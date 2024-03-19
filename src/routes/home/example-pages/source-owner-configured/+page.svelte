<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { TriggerCodeModal, formatDate } from '$lib/Utils';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let data;
	console.log(data);

	const modalStore = getModalStore();
</script>

<div class="flex justify-center flex-col align-middle gap-2">
	<div class="card p-4">
		<p class="text-2xl text-center">Listing of sources and their configured owners</p>
	</div>
	{#await data.sources}
		<div class="grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then sources}
		<div class="table-container">
			<table class="table">
				<thead class="table-head">
					<th> Source Name </th>
					<th> Type </th>
					<th> Modified </th>
					<th> Created </th>
					<th> Owner </th>
					<th />
				</thead>
				<tbody>
					{#each sources as source}
						<tr>
							<td>{source.name}</td>
							<td>{source.type}</td>
							<td>{formatDate(source.modified)}</td>
							<td>{formatDate(source.created)}</td>
							<td>{source.owner.name}</td>
							<td class="flex flex-col justify-center gap-1">
								<button
									on:click={() => TriggerCodeModal(source, modalStore)}
									class="btn variant-filled-primary text-sm !text-white"
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
</div>
