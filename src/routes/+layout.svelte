<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { Modal, initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

<div class="dragbar" />
<Modal />
{#if ready}
	<slot />
{/if}

<style>
	.dragbar {
		-webkit-app-region: drag;
		position: absolute;
		z-index: 100;
		height: 40px;
		width: 100%;
	}
</style>
