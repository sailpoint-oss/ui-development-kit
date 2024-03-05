<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { TriggerCodeModal, formatDate } from '$lib/Utils.js';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let data;

	const modalStore = getModalStore();
</script>

<div class="flex justify-center flex-col align-middle gap-2">
	<div class="card p-4">
		<p class="text-2xl text-center">
			List of all identities that are inactive but still have access in sources
		</p>
	</div>
	{#await data.reportData}
		<div class="grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then reportData}
		{#if reportData.length === 0}
			<div class="card p-4">
				<p class=" text-center text-success-500">No inactive identities with access found</p>
			</div>
		{:else}
			<div class="table-container">
				<table class="table">
					<thead class="table-head">
						<th> Name </th>
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
										<a
											href={`/home/identities/${identity.id}`}
											class="btn btn-sm variant-filled-primary text-sm !text-white"
											data-sveltekit-preload-data="hover"
										>
											Open
										</a>
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
