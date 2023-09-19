<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let visible = false;
	onMount(() => (visible = true));
</script>

<center class="py-10">
	{#if visible}
		<img
			src="/sveltekit-electron.svg"
			alt="Svelte Logo"
			draggable="false"
			in:fly={{ y: 100, duration: 1500 }}
		/>
	{:else}
		<div style="height: 16rem" />
	{/if}
</center>

<style>
	img {
		height: 16rem;
		width: 16rem;
		user-select: none;
	}
</style>
