<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Progress from '../Progress.svelte';

	let summaryResp: Promise<any>;

	const getStatus = async () => {
		console.debug('Getting Status Summary');
		summaryResp = (await fetch('https://status.sailpoint.com/api/v2/summary.json')).json();
		console.debug(await summaryResp);
	};

	let interval: any;

	onMount(async () => {
		getStatus();
		interval = setInterval(() => getStatus(), 30000);
	});

	onDestroy(() => clearInterval(interval));

	function parseClass(status: string) {
		switch (status) {
			case 'none':
				return 'text-success-500';

			case 'minor':
				return 'text-warning-500';

			case 'major':
				return 'text-error-500';
		}
	}
</script>

<div class="p-4 card grow overflow-hidden flex flex-col">
	<h1 class="text-center">IdentityNow Status</h1>
	<div class="grid place-content-center h-full">
		{#await summaryResp}
			<Progress width="w-12" />
		{:then summary}
			<a
				href="https://status.sailpoint.com"
				class="{parseClass(summary?.status?.indicator)} hover:underline"
				rel="noreferrer"
				target="_blank"
			>
				{summary?.status?.description}
			</a>
		{/await}
	</div>
</div>
