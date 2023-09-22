<script lang="ts">
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { ProgressRadial, Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { Search } from 'sailpoint-api-client';
	import { onMount } from 'svelte';
	import alasql from 'alasql';

	//export let data;
	let tableSimple: TableSource | undefined = undefined;

	onMount(async () => {
		const search: Search = {
			indices: ['identities'],
			query: {
				query: `@accounts(disabled:false) AND (attributes.cloudLifecycleState:inactive)`,
			},
			sort: ['name'],
		};

		const response = await fetch('/api/sailpoint/search', {
			method: 'POST',
			body: JSON.stringify(search),
			headers: {
				'content-type': 'application/json',
			},
		});

		let data = await response.json();
		console.log(data);

		if (JSON.stringify(data) !== '{}') {
			let reportResult = [];

			for (let row of <any>data) {
				let accounts: string[] = [];
				for (let account of row.accounts) {
					if (account.disabled == false) {
						accounts.push(account.source.name);
					}
				}
				reportResult.push({
					name: row.displayName,
					source: accounts.join(', '),
					department: row.attributes.department,
					accessCount: row.accessCount,
					entitlementCount: row.entitlementCount,
					roleCount: row.roleCount,
				});
			}

			let res = alasql(
				'SELECT name, source, department, accessCount, entitlementCount, roleCount FROM ?',
				[reportResult],
			);
			console.log(res);
			tableSimple = {
				// A list of heading labels.
				head: [
					'Name',
					'Sources',
					'Departments',
					'Access Count',
					'Entitlement Count',
					'Role Count',
				],
				// The data visibly shown in your table body UI.
				body: tableMapperValues(res, [
					'name',
					'source',
					'department',
					'accessCount',
					'entitlementCount',
					'roleCount',
				]),
				// Optional: The data returned when interactive is enabled and a row is clicked.
				meta: tableMapperValues(res, [
					'name',
					'source',
					'department',
					'accessCount',
					'entitlementCount',
					'roleCount',
				]),
			};
		}
	});

	function onTableclick(event: any) {
		console.log(event);
	}
</script>

<main>
	<div class="p-4">
		<img src="/SailPoint-Developer-Community-Lockup.png" alt="sailPoint Logo" />
		<a href="/home" class="btn variant-filled-primary w-full mt-2 text-slate-50 text-lg">
			Go back report screen
		</a>
		<div class="flex justify-center mt-4 flex-col align-middle">
			<div class="text-2xl text-slate-500 divide-dashed divide-y-2 mt-4 mb-2">
				Listing of identities that are inactive but still have access in sources
			</div>
			{#if tableSimple}
				<Table
					class="w-full"
					source={tableSimple}
					interactive={true}
					on:selected={onTableclick}
				/>
			{:else}
				<div class="progress-bar">
					<ProgressRadial
						stroke={100}
						meter="stroke-primary-500"
						track="stroke-primary-500/30"
						class="progress-bar"
					/>
				</div>
			{/if}
		</div>
	</div>
</main>

<style>
	.progress-bar {
		padding-top: calc(50vh - 4.5rem - 200px);
		padding-left: calc(50% - 4.5rem);
	}
</style>
