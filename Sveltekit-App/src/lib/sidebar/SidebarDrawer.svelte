<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import { getDrawerStore, Drawer } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	$: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
</script>

<Drawer width="w-[144px]" class={classesDrawer}>
	{#if $drawerStore.id === 'doc-sidenav'}
		<!-- Doc Sidebar -->
		<Sidebar />
	{/if}
</Drawer>
