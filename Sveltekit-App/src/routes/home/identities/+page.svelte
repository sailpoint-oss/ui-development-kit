<script lang="ts">
	import Paginator from '$lib/Components/Paginator.svelte';
	import Progress from '$lib/Components/Progress.svelte';
	import {
		TriggerCodeModal,
		createOnAmountChange,
		createOnGo,
		createOnPageChange,
		formatDate
	} from '$lib/Utils.js';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	export let data;

	$: onPageChange = createOnPageChange({ ...data.params, filters, sorters }, '/home/identities');
	$: onAmountChange = createOnAmountChange(
		{ ...data.params, filters, sorters },
		'/home/identities'
	);
	$: onGo = createOnGo({ ...data.params, filters, sorters }, '/home/identities');

	let filters = '';
	let sorters = '';
</script>

<div class="card flex justify-center flex-col align-middle">
	{#await data.totalCount then totalCount}
		{#if totalCount > 250 || Number(data.params.limit) < totalCount}
			<Paginator
				{onAmountChange}
				{onGo}
				{onPageChange}
				settings={{
					page: Number(data.params.page),
					limit: Number(data.params.limit),
					size: totalCount,
					amounts: [10, 50, 100, 250]
				}}
				{filters}
				{sorters}
				{totalCount}
			/>
		{/if}
	{/await}
	{#await data.identities}
		<div class="grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then identities}
		<div class="table-container">
			<table class="table">
				<thead class="table-head">
					<th>ID</th>
					<th>Name</th>
					<th>Lifecycle State</th>
					<th>eMail</th>
					<th>Created</th>
					<th>Modified</th>
					<th />
				</thead>
				<tbody class="table-body">
					{#each identities as identity}
						<tr>
							<td>
								<p class="text-center">{identity.id}</p>
							</td>
							<td>
								<p class="text-center">{identity.name}</p>
							</td>
							<td>
								<p class="text-center">{identity.lifecycleState?.stateName}</p>
							</td>
							<td>
								<p class="text-center">{identity.emailAddress}</p>
							</td>
							<td>
								<p class="text-center">{formatDate(identity.created)}</p>
							</td>
							<td>
								<p class="text-center">{formatDate(identity.modified)}</p>
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
	{#await data.totalCount then totalCount}
		{#if totalCount > 250 || Number(data.params.limit) < totalCount}
			<Paginator
				{onAmountChange}
				{onGo}
				{onPageChange}
				settings={{
					page: Number(data.params.page),
					limit: Number(data.params.limit),
					size: totalCount,
					amounts: [10, 50, 100, 250]
				}}
				{filters}
				{sorters}
				{totalCount}
			/>
		{/if}
	{/await}
</div>
