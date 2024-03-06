<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	onMount(() => {
		setTimeout(async () => {
			console.log('Redirecting to login...');
			goto('/');
		}, 2000);
	});
</script>

<div class="p-4">
	<div class="card p-4">
		{#if data.sessionLoggedOut}
			<p class="text-center p-2">Successfully Logged out</p>
		{:else}
			<p class="text-center p-2">
				WHOOPS! an error occurred. <br /> If you believe this is a bug please submit an issue on
				<a
					class="underline text-blue-500 hover:text-blue-700"
					href="https://github.com/sailpoint-oss/idn-admin-console/issues/new/choose"
					rel="noreferrer"
					target="_blank"
				>
					GitHub
				</a>
			</p>
		{/if}
	</div>
</div>
