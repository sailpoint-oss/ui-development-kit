<script lang="ts">
	import Paginator from '$lib/Components/Paginator.svelte';
	import Progress from '$lib/Components/Progress.svelte';
	import {
		TriggerCodeModal,
		createOnAmountChange,
		createOnGo,
		createOnPageChange
	} from '$lib/Utils.js';
	import type { ModalSettings, PaginationSettings } from '@skeletonlabs/skeleton';
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

<div class="card flex flex-col justify-center h-full">
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
	{#await data.sources}
		<div class="grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then sources}
		<div class="table-container">
			<table class="table">
				<thead class="table-head">
					<th>ID</th>
					<th>Name</th>
					<th>Description</th>
					<th>Type</th>
					<th>Authoritative</th>
					<th>Healthy</th>
					<th>Delete Threshold</th>
					<th>Owner</th>
					<th />
				</thead>
				<tbody class="table-body">
					{#each sources as source}
						<tr>
							<td>
								<p class="text-center">{source.id}</p>
							</td>
							<td>
								<p class="text-center">{source.name}</p>
							</td>
							<td>
								<p class="text-center">{source.description}</p>
							</td>
							<td>
								<p class="text-center">{source.type}</p>
							</td>
							<td>
								<p class="text-center">{source.authoritative ? 'True' : 'False'}</p>
							</td>
							<td>
								<p
									class="text-center font-bold {source.healthy ? 'text-green-500' : 'text-red-500'}"
								>
									{source.healthy ? 'True' : 'False'}
								</p>
							</td>
							<td>
								<p class="text-center">{source.deleteThreshold}</p>
							</td>
							<td>
								<p class="text-center">{source.owner.name}</p>
							</td>
							<td class="flex flex-col justify-center gap-1">
								<a
									href={`/home/sources/${source.id}`}
									class="btn btn-sm variant-filled-primary text-sm !text-white"
									data-sveltekit-preload-data="hover"
								>
									Open
								</a>
								<button
									on:click={() => TriggerCodeModal(source, modalStore)}
									class="btn btn-sm variant-filled-primary text-sm !text-white"
								>
									View
								</button>
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
