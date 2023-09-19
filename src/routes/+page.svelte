<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Logo from '$lib/Logo.svelte';
	import { browser } from '$app/environment';
	import { Avatar } from '@skeletonlabs/skeleton';

	let desktop: string;

	if (window.electron && browser) {
		window.electron.receive('from-main', (data: any) => {
			desktop = `Received Message "${data}" from Electron`;
			console.log(desktop);
		});
	}

	const agent = window.electron ? 'Electron' : 'Browser';

	let tenant: string = 'tenant';
	let domain: string = 'identitynow';

	$: baseUrl = `https://${tenant}.api.${domain}.com`;
	$: tenantUrl = `https://${tenant}.${domain}.com`;
</script>

<main class="p-4">
	<form method="POST">
		<label>
			Tenant
			<input name="tenant" placeholder={``} bind:value={tenant} class="input p-2" />
		</label>
		<label>
			Domain
			<input name="domain" placeholder={``} bind:value={domain} class="input p-2" />
		</label>
		<label>
			API Base URL
			<input
				name="baseUrl"
				placeholder={`https://${tenant}.api.${domain}.com`}
				bind:value={baseUrl}
				class="input p-2"
			/>
		</label>

		<label>
			Tenant URL
			<input
				name="tenantUrl"
				placeholder={`https://${tenant}.identitynow.com`}
				bind:value={tenantUrl}
				class="input p-2"
			/>
		</label>

		<button>login</button>
	</form>
</main>

<style>
</style>
