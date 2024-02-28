<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { TriggerCodeModal, formatDate } from '$lib/Utils';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let data;
	console.log(data);

	const modalStore = getModalStore();
</script>

<div class="flex justify-center flex-col align-middle">
	<div class="card p-4">
		<p class="text-2xl text-center">
			Listing of identities that are missing the cloud life cycle state attribute
		</p>
	</div>
	{#await data.reportData}
		<div class="grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then reportData}
		<div class="table-container">
			<table class="table">
				<thead class="table-head">
					<th> Name </th>
					<th> Sources </th>
					<th> Created </th>
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
	{/await}
</div>
