<script lang="ts">
	import { onMount } from 'svelte';

	export let data;
	onMount(() => {
		setTimeout(async () => {
			console.log('Redirecting to IDN logout...');
			window.location.href = data.logoutLink;
		}, 2000);
	});
</script>

<div class="p-4">
	<div class="card p-4">
		<p class="text-center p-2">Successfully Logged out</p>
		<p class="text-center p-2">Redirecting to IDN Logout...</p>
	</div>
</div>
