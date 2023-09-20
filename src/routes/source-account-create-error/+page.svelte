<script lang="ts">
	export let data;

	import type { TableSource } from '@skeletonlabs/skeleton';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	let tableSimple: TableSource;
	if (JSON.stringify(data) !== '{}') {
		let reportResult = [];

		for (let row of <any>data.val) {
			reportResult.push({
				name: row.target.name,
				source: row.attributes.sourceName,
				failure: row.name,
			});
		}

		tableSimple = {
			// A list of heading labels.
			head: ['Name', 'Source', 'Failure'],
			// The data visibly shown in your table body UI.
			body: tableMapperValues(reportResult, ['name', 'source', 'failure']),
			// Optional: The data returned when interactive is enabled and a row is clicked.
			meta: tableMapperValues(reportResult, ['name', 'source', 'failure']),
		};
	}
</script>

<div>Page Works!</div>
<a href="/" class="">Go back</a>
{#if tableSimple}
	<Table class="w-4/5" source={tableSimple} />
{/if}
