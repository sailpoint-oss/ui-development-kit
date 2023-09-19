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
	<img src="/SailPoint-Developer-Community-Lockup.png" alt="sailPoint Logo" />
	<div class="text-2xl text-slate-500 divide-dashed divide-y-2 mt-4 mb-2">
		Enter your tenant information to continue
	</div>
	<form method="POST">
		<label class="text-slate-600">
			Tenant
			<input name="tenant" placeholder={``} bind:value={tenant} class="input p-2" />
		</label>
		<label class="text-slate-600">
			Domain
			<input name="domain" placeholder={``} bind:value={domain} class="input p-2" />
		</label>
		<label class="text-slate-600">
			API Base URL
			<input
				name="baseUrl"
				placeholder={`https://${tenant}.api.${domain}.com`}
				bind:value={baseUrl}
				class="input p-2"
			/>
		</label>

		<label class="text-slate-600">
			Tenant URL
			<input
				name="tenantUrl"
				placeholder={`https://${tenant}.identitynow.com`}
				bind:value={tenantUrl}
				class="input p-2"
			/>
		</label>

		<button type="button" class="btn variant-filled-primary w-full mt-2 text-slate-50 text-lg">
			login
		</button>
	</form>
</main>

<style>
</style>
