<script lang="ts">
	import VaCluster from '$lib/Components/VACluster.svelte';
	import { formatDate } from '$lib/Utils.js';
	import { Accordion, AccordionItem, CodeBlock, Tab, TabGroup } from '@skeletonlabs/skeleton';
	import Progress from '$lib/Components/Progress.svelte';

	export let data;

	console.log(data);

	let tabSet: number = 1;
</script>

<div class="flex flex-col gap-2">
	<div class="card p-4">
		<h1 class="text-2xl font-bold">{data.source.name}</h1>
		<p class="">{data.source.description}</p>
		<p class="">ID: {data.source.id}</p>
		<p class="">Type: {data.source.type}</p>
		<p class="">
			Authoritative: {data.source.authoritative ? 'True' : 'False'}
		</p>
		<p>
			Healthy:
			<span class={data.source.healthy ? 'text-green-500' : 'text-red-500'}>
				{data.source.healthy ? 'True' : 'False'}
			</span>
		</p>
	</div>
	<div class="card p-4">
		<VaCluster cluster={data.source.cluster} />
	</div>
	{#await data.sourceEvents}
		<div class="card grid h-full place-content-center p-8">
			<Progress width="w-[100px]" />
		</div>
	{:then sourceEvents}
		<div class="card p-4">
			<h2>Most Recent Aggregations</h2>
			<div>
				<strong>Accounts:</strong>
				<Accordion>
					<AccordionItem>
						<svelte:fragment slot="summary">
							Started: {formatDate(sourceEvents.accounts.started?.created)}
						</svelte:fragment>
						<svelte:fragment slot="content">
							<CodeBlock
								lineNumbers
								language="json"
								code={JSON.stringify(sourceEvents.accounts.started, null, 4)}
							/>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="summary">
							Passed: {formatDate(sourceEvents.accounts.passed?.created)}
						</svelte:fragment>
						<svelte:fragment slot="content">
							<CodeBlock
								lineNumbers
								language="json"
								code={JSON.stringify(sourceEvents.accounts.passed, null, 4)}
							/>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
				<strong>Entitlements</strong>
				<Accordion>
					<AccordionItem>
						<svelte:fragment slot="summary">
							Started: {formatDate(sourceEvents.entitlements.started?.created)}
						</svelte:fragment>
						<svelte:fragment slot="content">
							<div>
								<CodeBlock
									lineNumbers
									language="json"
									code={JSON.stringify(sourceEvents.entitlements.started, null, 4)}
								/>
							</div>
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="summary">
							Passed: {formatDate(sourceEvents.entitlements.passed?.created)}
						</svelte:fragment>
						<svelte:fragment slot="content">
							<CodeBlock
								lineNumbers
								language="json"
								code={JSON.stringify(sourceEvents.entitlements.passed, null, 4)}
							/>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	{/await}
	<div class="card p-4">
		<TabGroup>
			<!-- <Tab bind:group={tabSet} name="raw-source-values" value={0}>Source Events</Tab> -->
			<Tab bind:group={tabSet} name="tab2" value={1}>Connector Attributes JSON</Tab>
			<Tab bind:group={tabSet} name="raw-source-values" value={2}>Full Source JSON</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<!-- SOURCE EVENTS -->
				{:else if tabSet === 1}
					<CodeBlock
						lineNumbers
						language="json"
						code={JSON.stringify(data.source.connectorAttributes, null, 4)}
					/>
				{:else if tabSet === 2}
					<CodeBlock lineNumbers language="json" code={JSON.stringify(data.source, null, 4)} />
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
