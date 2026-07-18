<script>
	import { apps, rows } from '$lib/competitors';
</script>

<div class="table-scroll">
	<table class="compare">
		<thead>
			<tr>
				<th class="row-label"></th>
				{#each apps as app, i}
					<th class:col-own={i === 0}>{app}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<tr>
					<th scope="row" class="row-label">{row.label}</th>
					{#each row.cells as cell, i}
						<td class:col-own={i === 0}>
							{#if cell === 'yes'}
								<span class="c-yes" title="Yes">✓</span>
							{:else if cell === 'no'}
								<span class="c-no" title="No">—</span>
							{:else}
								<span class="c-txt">{cell}</span>
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.table-scroll {
		overflow-x: auto;
		border: 0.5px solid var(--border);
		border-radius: 16px;
	}
	.compare {
		width: 100%;
		border-collapse: collapse;
		min-width: 720px;
		font-size: 15px;
	}
	.compare th,
	.compare td {
		padding: 14px 16px;
		text-align: center;
		border-bottom: 0.5px solid var(--border);
	}
	.compare thead th {
		font-size: 14px;
		font-weight: 700;
		color: var(--navy);
		white-space: nowrap;
	}
	.compare tbody tr:last-child th,
	.compare tbody tr:last-child td {
		border-bottom: none;
	}
	.row-label {
		text-align: left;
		font-weight: 600;
		color: var(--text-body-dark);
		white-space: nowrap;
	}
	.col-own {
		background: var(--indigo-tint);
	}
	.compare thead th.col-own {
		color: var(--indigo);
	}
	.c-yes {
		color: var(--indigo);
		font-weight: 800;
		font-size: 17px;
	}
	.c-no {
		color: #b8bcc6;
	}
	.c-txt {
		font-size: 12.5px;
		font-weight: 600;
		color: var(--text-muted);
		white-space: nowrap;
	}
</style>
