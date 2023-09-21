<script lang="ts">
	//export let data;
	let tableSimple: TableSource | undefined = undefined;

	onMount(async () => {
		const response = await fetch('/api/sailpoint', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		});

		let data = await response.json();
		console.log(data);

		if (JSON.stringify(data) !== '{}') {
			let reportResult = [];

			for (let row of <any>data) {
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
	});

	import type { TableSource } from '@skeletonlabs/skeleton';
	import { ProgressRadial, Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
</script>

<div class="p-4">
	<img src="/SailPoint-Developer-Community-Lockup.png" alt="sailPoint Logo" />
	<a href="/home" class="btn variant-filled-primary w-full mt-2 text-slate-50 text-lg">
		Go back report screen
	</a>
	<div class="flex justify-center mt-4 flex-col">
		<div class="text-2xl text-slate-500 divide-dashed divide-y-2 mt-4 mb-2">
			Listing of Source Account Create Errors
		</div>
		{#if tableSimple}
			<Table class="w-full" source={tableSimple} />
		{:else}
			<ProgressRadial
				...
				stroke={100}
				meter="stroke-primary-500"
				track="stroke-primary-500/30"
			/>
		{/if}
	</div>
</div>
