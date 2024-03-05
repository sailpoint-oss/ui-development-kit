<script lang="ts">
	import { Accordion, AccordionItem, CodeBlock } from '@skeletonlabs/skeleton';

	export let cluster: { name: string; id: string } | undefined;

	function formatStatusColor(status: string) {
		switch (status) {
			case 'HEALTHY':
				return 'text-green-500';
			case 'WARNING':
				return 'text-red-500';
			case 'FAILED':
				return 'text-red-500';
			default:
				return 'text-gray-500';
		}
	}
</script>

<h2>Virtual Appliance Cluster</h2>
<p>Name: {cluster?.name || 'Empty'}</p>
<p>ID: {cluster?.id || 'Empty'}</p>

{#if cluster?.id}
	{#await fetch(`/api/sailpoint/cluster/${cluster.id}`)}
		<div class="py-2 placeholder" />
	{:then clusterResponse}
		{#await clusterResponse.json()}
			<div class="py-2 placeholder" />
		{:then clusterInfo}
			<p>Pod: {clusterInfo.pod}</p>
			<p>Description: {clusterInfo.description ? clusterInfo.description : 'Empty'}</p>
			<p>CCG Version: {clusterInfo.ccgVersion}</p>
			<p>
				Debugging Enabled: <span
					class={clusterInfo.configuration?.debug === 'true' ? 'text-green-500' : 'text-red-500'}
				>
					{clusterInfo.configuration.debug === 'true' ? 'True' : 'False'}
				</span>
			</p>
			<p>
				Status: <span class={formatStatusColor(clusterInfo.status)}>
					{clusterInfo.status}
				</span>
			</p>
			<p>
				Alert: <span class={formatStatusColor(clusterInfo.status)}>
					{clusterInfo.alertKey}
				</span>
			</p>
			<div class="py-2">
				<p class="underline">Client IDs</p>
				<ul class="list">
					{#each clusterInfo.clientIds as client, index}
						<li>
							<span>{index + 1}.</span>
							<span class="flex-auto">{client}</span>
						</li>
					{/each}
				</ul>
			</div>

			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="summary">Raw Data</svelte:fragment>
					<svelte:fragment slot="content">
						<CodeBlock code={JSON.stringify(clusterInfo, null, 4)} language="json" />
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		{:catch error}
			<p class="text-red-500">Error: {error.message}</p>
		{/await}
	{:catch error}
		<p class="text-red-500">Error: {error.message}</p>
	{/await}
{/if}
