# Moving a Firebase App Hosting backend to a new GitHub repo (CLI/API)

How to repoint an existing App Hosting backend at a **different GitHub repository**
(e.g. after moving the source to a new org/owner) **without recreating the backend** —
so the backend URL, custom domains, env vars, and secrets all stay intact.

Use this when the Firebase Console → App Hosting → **Settings → Deployment** page
just spins on *"Loading your deployment settings…"*. That hang happens when the
backend's current repo link points at a repo the GitHub App installation can no
longer access; the page never finishes loading, so you can't pick a new repo in
the UI. The API path below bypasses it entirely.

## Prerequisites

- `gcloud` CLI, authed as a project **Owner/Editor**: `gcloud auth login`
- `firebase` CLI (v15+): `npm i -g firebase-tools`
- Your new code already pushed to the new GitHub repo (note the branch, e.g. `main`)
- Set convenience vars (fill these in):

```bash
PROJECT=your-project-id
LOCATION=us-east4               # the backend's Primary Region (see backends:list)
BACKEND=your-backend-id
NEW_REPO_OWNER=new-org          # GitHub org/user that now owns the repo
NEW_REPO_NAME=your-repo
BRANCH=main
TOKEN() { gcloud auth print-access-token; }   # helper: re-fetch a fresh token each call
```

> API bases used below:
> - App Hosting: `https://firebaseapphosting.googleapis.com/v1beta`
> - DeveloperConnect (GitHub connections): `https://developerconnect.googleapis.com/v1`

---

## Step 0 — Discover the current wiring

```bash
# Which region/repo is the backend on?
firebase apphosting:backends:list --project "$PROJECT"

# What repo link does the backend currently use? (note codebase.repository + etag)
curl -s -H "Authorization: Bearer $(TOKEN)" \
  "https://firebaseapphosting.googleapis.com/v1beta/projects/$PROJECT/locations/$LOCATION/backends/$BACKEND" \
  | python3 -m json.tool | grep -A6 -iE "codebase|etag"

# What GitHub connections exist, and are they COMPLETE?
curl -s -H "Authorization: Bearer $(TOKEN)" \
  "https://developerconnect.googleapis.com/v1/projects/$PROJECT/locations/$LOCATION/connections" \
  | python3 -m json.tool
```

You're looking for a **connection** (`apphosting-github-conn-XXXX`) whose
`authorizerCredential.username` matches the account/org that owns the new repo and
whose `installationState.stage` is `COMPLETE`. You may find:

- A `COMPLETE` connection for the **old** owner (the one the backend uses now).
- A `PENDING_INSTALL_APP` connection for the **new** owner (a half-finished attempt) —
  it carries an `actionUri` you can click to finish. If there's none for the new
  owner, create one (Step 1a).

Save the connection id you'll use for the new repo:

```bash
CONN=apphosting-github-conn-XXXX   # the connection for NEW_REPO_OWNER
```

---

## Step 1 — Make sure a COMPLETE connection exists for the new owner (browser step)

**If a `PENDING_INSTALL_APP` connection for the new owner already exists:** open its
`actionUri` (from the Step 0 dump) in a browser, sign in as the project owner, and
**install/authorize the "Firebase App Hosting" GitHub App on the new org, granting it
access to the target repo.**

**If no connection for the new owner exists (Step 1a):** create one, then finish the
install via the returned `actionUri`.

```bash
CONN=apphosting-github-conn-$(date +%s | tail -c 6)   # any unique id
curl -s -X POST -H "Authorization: Bearer $(TOKEN)" -H "Content-Type: application/json" \
  "https://developerconnect.googleapis.com/v1/projects/$PROJECT/locations/$LOCATION/connections?connectionId=$CONN" \
  -d '{"githubConfig":{"githubApp":"FIREBASE"}}' | python3 -m json.tool
# Re-GET the connection, open installationState.actionUri in a browser, finish the install.
```

**Verify it's COMPLETE before continuing:**

```bash
curl -s -H "Authorization: Bearer $(TOKEN)" \
  "https://developerconnect.googleapis.com/v1/projects/$PROJECT/locations/$LOCATION/connections/$CONN" \
  | python3 -c "import sys,json;c=json.load(sys.stdin);print('stage:',c['installationState']['stage']);print('user:',c['githubConfig']['authorizerCredential'].get('username'))"
# stage: COMPLETE
```

---

## Step 2 — Create a gitRepositoryLink for the new repo

```bash
LINK_ID="${NEW_REPO_OWNER}-${NEW_REPO_NAME}"
curl -s -X POST -H "Authorization: Bearer $(TOKEN)" -H "Content-Type: application/json" \
  "https://developerconnect.googleapis.com/v1/projects/$PROJECT/locations/$LOCATION/connections/$CONN/gitRepositoryLinks?gitRepositoryLinkId=$LINK_ID" \
  -d "{\"cloneUri\":\"https://github.com/$NEW_REPO_OWNER/$NEW_REPO_NAME.git\"}" \
  | python3 -m json.tool
# Returns a long-running operation ({"done": false}); poll until done:
```

```bash
# Confirm the link exists
curl -s -H "Authorization: Bearer $(TOKEN)" \
  "https://developerconnect.googleapis.com/v1/projects/$PROJECT/locations/$LOCATION/connections/$CONN/gitRepositoryLinks" \
  | python3 -c "import sys,json;[print(r['name'].split('/')[-1],'->',r.get('cloneUri')) for r in json.load(sys.stdin).get('gitRepositoryLinks',[])]"
```

---

## Step 3 — Repoint the backend's codebase.repository

Re-fetch the **etag** right before patching (it changes on every write; a stale etag
gives a 409):

```bash
ETAG=$(curl -s -H "Authorization: Bearer $(TOKEN)" \
  "https://firebaseapphosting.googleapis.com/v1beta/projects/$PROJECT/locations/$LOCATION/backends/$BACKEND" \
  | python3 -c "import sys,json;print(json.load(sys.stdin)['etag'])")

NEW_REPO_PATH="projects/$PROJECT/locations/$LOCATION/connections/$CONN/gitRepositoryLinks/$LINK_ID"

curl -s -X PATCH -H "Authorization: Bearer $(TOKEN)" -H "Content-Type: application/json" \
  "https://firebaseapphosting.googleapis.com/v1beta/projects/$PROJECT/locations/$LOCATION/backends/$BACKEND?updateMask=codebase.repository" \
  -d "{\"etag\":\"$ETAG\",\"codebase\":{\"repository\":\"$NEW_REPO_PATH\"}}" \
  | python3 -m json.tool
# Poll the returned operation until done, then verify:
curl -s -H "Authorization: Bearer $(TOKEN)" \
  "https://firebaseapphosting.googleapis.com/v1beta/projects/$PROJECT/locations/$LOCATION/backends/$BACKEND" \
  | python3 -c "import sys,json;print(json.load(sys.stdin)['codebase']['repository'])"
```

> Note: this only changes `codebase.repository`. If your **live rollout branch** also
> needs to change, that's a separate `traffic`/deployment setting — the branch is
> supplied per rollout in Step 4, so usually no extra change is needed.

---

## Step 4 — Deploy

```bash
firebase apphosting:rollouts:create "$BACKEND" -b "$BRANCH" --force --project "$PROJECT"
```

Verify it succeeded and the new content is served:

```bash
curl -s -H "Authorization: Bearer $(TOKEN)" \
  "https://firebaseapphosting.googleapis.com/v1beta/projects/$PROJECT/locations/$LOCATION/backends/$BACKEND/rollouts?pageSize=1" \
  | python3 -c "import sys,json;r=json.load(sys.stdin).get('rollouts',[]);print('state:',r[0]['state']) if r else print('none')"
# state: SUCCEEDED

curl -sL -o /dev/null -w "HTTP %{http_code} -> %{url_effective}\n" https://YOUR-LIVE-DOMAIN/
```

Future `git push` to `$BRANCH` on the new repo now auto-triggers a rollout.

---

## Cleanup (optional)

The old connection and its now-unused repo links are harmless but clutter the console:

```bash
# Delete the stale repo link, then the stale connection (only if no backend uses them)
curl -s -X DELETE -H "Authorization: Bearer $(TOKEN)" \
  "https://developerconnect.googleapis.com/v1/projects/$PROJECT/locations/$LOCATION/connections/OLD_CONN/gitRepositoryLinks/OLD_LINK"
curl -s -X DELETE -H "Authorization: Bearer $(TOKEN)" \
  "https://developerconnect.googleapis.com/v1/projects/$PROJECT/locations/$LOCATION/connections/OLD_CONN"
```

---

## Gotchas

- **Region matters.** Every resource (backend, connection, repo link) lives under the
  backend's Primary Region. Use the same `$LOCATION` throughout.
- **etag is mandatory and volatile.** Always re-GET the backend immediately before the
  PATCH. A 409/`FAILED_PRECONDITION` means the etag was stale — re-fetch and retry.
- **The GitHub App install is the one manual step.** It's an OAuth/GitHub App grant and
  can't be scripted; everything else is API calls. Make sure the app is granted access
  to the *specific repo*, not just the org.
- **`rollouts:create` pulls from the backend's connected repo.** If it errors with
  `repository not found under installation ID …`, the connection/repo link is still
  wrong or the App install lost access — recheck Steps 1–3.
- **Don't recreate the backend** unless you have to — a new backend gets a new
  `*.hosted.app` URL and you'd have to remap custom domains.
