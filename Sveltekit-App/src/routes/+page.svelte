<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';

	let desktop: string;

	if (window.electron && browser) {
		window.electron.receive('from-main', (data: any) => {
			desktop = `Received Message "${data}" from Electron`;
			console.log(desktop);
		});
	}

	const agent = window.electron ? 'Electron' : 'Browser';

	const tenant: Writable<string> = localStorageStore('tenant', 'tenant');
	const domain: Writable<string> = localStorageStore('domain', 'identitynow');
	const baseUrl: Writable<string> = localStorageStore(
		'baseUrl',
		'https://${tenant}.api.${domain}.com'
	);
	const tenantUrl: Writable<string> = localStorageStore(
		'tenantUrl',
		'https://${tenant}.${domain}.com'
	);

	$: baseUrl.set(`https://${$tenant}.api.${$domain}.com`);
	$: tenantUrl.set(`https://${$tenant}.${$domain}.com`);
</script>

<main class="p-32 h-full">
	<div class="flex flex-row justify-center">
		<img
			class="h-12 min-w-[590px]"
			src="/SailPoint-Developer-Community-Lockup.png"
			alt="sailPoint Logo"
		/>
	</div>
	<div class="">
		<div class="text-2xl text-center py-2">Enter your tenant information to continue</div>
		<form method="POST" use:enhance class="flex flex-col gap-4">
			<label class="">
				Tenant
				<input name="tenant" placeholder={`tenant`} bind:value={$tenant} class="input p-2" />
			</label>
			<label class="">
				Domain
				<input name="domain" placeholder={`identitynow`} bind:value={$domain} class="input p-2" />
			</label>
			<label class="">
				API Base URL
				<input
					name="baseUrl"
					placeholder={`https://${tenant}.api.${domain}.com`}
					bind:value={$baseUrl}
					class="input p-2"
				/>
			</label>

			<label class="">
				Tenant URL
				<input
					name="tenantUrl"
					placeholder={`https://${tenant}.identitynow.com`}
					bind:value={$tenantUrl}
					class="input p-2"
				/>
			</label>

			<button type="submit" class="btn variant-filled-primary w-full mt-2 !text-white text-lg">
				Login
			</button>
		</form>
	</div>
</main>
