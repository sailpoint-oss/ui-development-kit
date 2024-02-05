<script lang="ts">
	import ResourceLinksCard from '$lib/Components/HomepageCards/ResourceLinksCard.svelte';
	import StatusCard from '$lib/Components/HomepageCards/StatusCard.svelte';
	import SupportLinksCard from '$lib/Components/HomepageCards/SupportLinksCard.svelte';
	import TenantLinksCard from '$lib/Components/HomepageCards/TenantLinksCard.svelte';

	export let data;
	console.log(data);
</script>

<div class="flex flex-col gap-2 grow">
	<div class="flex flex-row flex-wrap gap-2 grow">
		<StatusCard />
		<TenantLinksCard tenantUrl={data.session?.tenantUrl} />
		<ResourceLinksCard />
		<SupportLinksCard />
	</div>
</div>
