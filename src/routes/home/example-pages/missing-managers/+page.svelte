<script lang="ts">
    import Paginator from '$lib/Components/Paginator.svelte';
    import Progress from '$lib/Components/Progress.svelte';
    import {
        TriggerCodeModal,
        formatDate,
        createOnPageChange,
        createOnAmountChange,
        createOnGo
    } from '$lib/Utils.js';
    import { getModalStore } from '@skeletonlabs/skeleton';

    export let data;

    const modalStore = getModalStore();

    $: onPageChange = createOnPageChange(
        { ...data.params, filters: '', sorters},
        '/home/example-pages/missing-managers'
    );
    $: onAmountChange = createOnAmountChange(
        { ...data.params, filters: '', sorters},
        '/home/example-pages/missing-managers'
    );
    $: onGo = createOnGo(
        { ...data.params, filters: '', sorters },
        '/home/example-pages/missing-managers'
    );

    let sorters = data.params.sorters || '';
</script>

<div class="flex justify-center flex-col align-middle">
	<div class="card p-4">
		<p class="text-2xl text-center">
			List of identities without managers
		</p>
	</div>
	{#await data.reportData}
		<div class="grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then reportData}
	{#await data.totalCount then totalCount}
			{#if totalCount > 250 || Number(data.params.limit) < totalCount}
				<div class="card p-4">
					<Paginator
						{onAmountChange}
						{onGo}
						{onPageChange}
						settings={{
							page: Number(data.params.page),
							limit: Number(data.params.limit),
							size: totalCount,
							amounts: [5, 10, 50, 100, 250]
						}}
						bind:sorters
						{totalCount}
					/>
				</div>
			{/if}
		{/await}
		{#if reportData.length === 0}
			<div class="card p-4">
				<p class=" text-center text-success-500">No identities with missing managers found</p>
			</div>
		{:else}
		<div class="table-container">
			<table class="table">
				<thead class="table-head">
					<th> DisplayName </th>
					<th> Identity ID </th>
					<th> Sources </th>
					<th> Created </th>
					<th> Modified </th>
					<th> Access Count </th>
					<th> Entitlement Count </th>
					<th> Role Count </th>
					<th></th>
				</thead>
				<tbody class="table-body">
					{#each reportData as identity}
					<tr>
						<td>
							{identity.displayName}
						</td>						
						<td>
							{identity.id}
						</td>
						<td>
							{identity.accounts?.map((account) => account.source?.name).join(', ')}
						</td>
						<td>
							{formatDate(identity.created)}
						</td>
						<td>
							{formatDate(identity.modified)}
						</td>
						<td>
							{identity.accessCount}
						</td>
						<td>
							{identity.entitlementCount}
						</td>
						<td>
							{identity.roleCount}
						</td>
						<td>
								<div class="flex flex-col justify-center gap-1">									
									<button
										on:click={() => TriggerCodeModal(identity, modalStore)}
										class="btn btn-sm variant-filled-primary text-sm !text-white"
									>
										View
									</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		{/if}
	{/await}
</div>
