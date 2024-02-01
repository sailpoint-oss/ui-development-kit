<script lang="ts">
	import Progress from '$lib/Components/Progress.svelte';
	import { TriggerCodeModal, formatDate } from '$lib/Utils.js';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	export let data;
	console.log(data);
</script>

<div class="flex justify-center flex-col align-middle gap-2">
	<div class="card p-4">
		<p class="text-2xl text-center">List of sources and their most recent aggregation events</p>
	</div>

	{#await data.sources}
		<div class="card grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then sources}
		<div class="table-container">
			<table class="table">
				<thead>
					<th>Source Name</th>
					<th>Type</th>
					<th>Authoritative</th>
					<th>Account Aggregations</th>
					<th>Entitlement Aggregations</th>
				</thead>
				<tbody>
					{#each sources as source}
						<tr>
							<td>{source.name}</td>
							<td>{source.type}</td>
							<td
								class="font-bold"
								class:text-tertiary-500={source.authoritative}
								class:text-warning-500={!source.authoritative}
							>
								{source.authoritative ? 'True' : 'False'}
							</td>
							{#await data.eventsMap}
								<td>
									<div class="grid place-content-center">
										<Progress width="w-[80px]" />
									</div>
								</td>
							{:then eventsMap}
								<td>
									<div class="flex flex-col gap-2">
										<button
											disabled={!eventsMap.get(source.name)?.accounts.started}
											class="btn btn-sm variant-filled-primary text-sm !text-white"
											on:click={() =>
												eventsMap.get(source.name)?.accounts.started &&
												TriggerCodeModal(eventsMap.get(source.name)?.accounts.started, modalStore)}
										>
											Started: {formatDate(eventsMap.get(source.name)?.accounts.started?.created)}
										</button>
										<button
											class="btn btn-sm variant-filled"
											disabled={!eventsMap.get(source.name)?.accounts.passed}
											on:click={() =>
												eventsMap.get(source.name)?.accounts.passed &&
												TriggerCodeModal(eventsMap.get(source.name)?.accounts.passed, modalStore)}
										>
											Passed: {formatDate(eventsMap.get(source.name)?.accounts.passed?.created)}
										</button>
									</div>
								</td>
							{/await}
							{#await data.eventsMap}
								<td>
									<div class="grid place-content-center">
										<Progress width="w-[80px]" />
									</div>
								</td>
							{:then eventsMap}
								<td>
									<div class="flex flex-col gap-2">
										<button
											class="btn btn-sm variant-filled-primary text-sm !text-white"
											disabled={!eventsMap.get(source.name)?.entitlements.started}
											on:click={() =>
												eventsMap.get(source.name)?.entitlements.started &&
												TriggerCodeModal(
													eventsMap.get(source.name)?.entitlements.started,
													modalStore
												)}
										>
											Started: {formatDate(
												eventsMap.get(source.name)?.entitlements.started?.created
											)}
										</button>
										<button
											class="btn btn-sm variant-filled"
											disabled={!eventsMap.get(source.name)?.entitlements.passed}
											on:click={() =>
												eventsMap.get(source.name)?.entitlements.passed &&
												TriggerCodeModal(
													eventsMap.get(source.name)?.entitlements.passed,
													modalStore
												)}
										>
											Passed: {formatDate(eventsMap.get(source.name)?.entitlements.passed?.created)}
										</button>
									</div>
								</td>
							{/await}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/await}
</div>
