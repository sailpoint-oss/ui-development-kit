<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { TriggerCodeModal } from '$lib/Utils';
	import { CodeBlock, Tab, TabGroup, getModalStore } from '@skeletonlabs/skeleton';

	export let data;

	console.log(data);

	let tabSet: number = 0;

	const modalStore = getModalStore();
</script>

<div class=" flex flex-col gap-2">
	{#await data.identityData}
		<div class="card grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then identityData}
		<div class="card p-4">
			<h1 class="text-2xl font-bold">Name: {identityData.name}</h1>
			<p class="">Alias: {identityData.alias}</p>
			<p class="">ID: {identityData.id}</p>
			<p class="">Lifecycle State: {identityData.lifecycleState?.stateName}</p>
		</div>
		<div class="card p-4">
			<h2 class="pb-2">Identity JSON</h2>
			<CodeBlock lineNumbers language="json" code={JSON.stringify(identityData, null, 4)} />
		</div>
		<div class="card p-4">
			<TabGroup>
				<Tab bind:group={tabSet} name="raw-source-values" value={0}>Identity Events</Tab>

				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						{#await data.identityEvents}
							<div class="grid h-full place-content-center p-8">
								<Progress width="w-[100px]" />
							</div>
						{:then identityEvents}
							{#if identityEvents.length > 0}
								<div class="table-container">
									<table class="table">
										<thead class="table-head">
											<th>Name</th>
											<th>Status</th>
											<th>Created</th>
											<th>Target</th>
											<th>Actor</th>
											<th />
										</thead>
										<tbody>
											{#each identityEvents as event}
												<tr>
													<td>{event.name}</td>
													<td>{event.status}</td>
													<td>{event.created}</td>
													<td>{event.target?.name}</td>
													<td>{event.actor?.name}</td>
													<td class="flex flex-col justify-center gap-1">
														<button
															class="btn variant-filled-primary text-sm !text-white"
															on:click={() => TriggerCodeModal(event, modalStore)}
														>
															View
														</button>
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								</div>
							{:else}
								<p class="text-center">No Identity Events</p>
							{/if}
						{/await}
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	{/await}
</div>
