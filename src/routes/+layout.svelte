<script lang="ts">
	import { Modal, initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import CodeBlockModal from '$lib/Components/CodeBlockModal.svelte';
	import { page } from '$app/stores';
	import { capitalize, parseInitials } from '$lib/Utils';

	import Sidebar from '$lib/sidebar/Sidebar.svelte';
	import {
		AppBar,
		AppShell,
		Avatar,
		LightSwitch,
		getDrawerStore,
		popup,
		storePopup,
		type DrawerSettings,
		type PopupSettings
	} from '@skeletonlabs/skeleton';

	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

	import HamburgerSvg from '$lib/Components/SVGs/HamburgerSVG.svelte';
	import SidebarDrawer from '$lib/sidebar/SidebarDrawer.svelte';

	import hljs from 'highlight.js/lib/core';

	// Import each language module you require
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import shell from 'highlight.js/lib/languages/shell';

	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	import 'highlight.js/styles/github-dark.css';

	initializeStores();
	let ready: boolean = false;
	onMount(() => (ready = true));

	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		codeBlockModal: { ref: CodeBlockModal }

		// ...
	};

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data;

	// Register each imported language module
	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);

	storeHighlightJs.set(hljs);

	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		// Remove zero-length tokens.
		const tokens = $page.url.pathname.split('/').filter((t) => t !== '');

		let tokenPath = '';

		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;

			return {
				label: t
					.split('-')
					.map((word) => capitalize(word))
					.join(' '),
				href: tokenPath
			};
		});

		crumbs = crumbs.filter((c) => c.label !== 'Logout' && c.label !== 'Callback');
	}

	const drawerStore = getDrawerStore();

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

	const popupAccount: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupAccount',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
</script>

<Modal components={modalRegistry} />

<SidebarDrawer />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar padding="p-2" class="h-![72px]">
			<svelte:fragment slot="lead">
				<div class="flex items-center space-x-4">
					{#if data.tokenDetails}
						<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
							<HamburgerSvg class="w-6 h-6" />
						</button>
					{/if}
					<img class="h-8 w-8" src="/logo.ico" alt="SailPoint TetraSail" />
				</div>
			</svelte:fragment>
			<p class="text-xl lg:!block hidden">UI Development Kit</p>
			<svelte:fragment slot="trail">
				<LightSwitch />
				{#if data.tokenDetails}
					<div class="rounded-full w-fit" use:popup={popupAccount}>
						<Avatar
							initials={parseInitials(data?.tokenDetails?.user_name)}
							border="hover:border-2 border-surface-300-600-token hover:!border-primary-500"
							cursor="cursor-pointer"
							width="w-10"
						/>
						<div
							class="card p-4 w-72 !shadow-xl bg-surface-100-800-token"
							data-popup="popupAccount"
						>
							<div class="arrow bg-surface-50-900-token" />
							<div class="flex flex-col gap-2">
								<div class="space-y-4">
									<Avatar initials={parseInitials(data?.tokenDetails?.user_name)} width="w-16" />
									<div>
										<p class="font-bold">{data?.tokenDetails?.user_name}</p>
										<div class="flex flex-wrap gap-4">
											<small>
												<span class="opacity-50">Tenant:</span>
												<strong>{data?.tokenDetails?.org}</strong>
											</small>
											<small>
												<span class="opacity-50">Pod:</span>
												<strong>{data?.tokenDetails?.pod}</strong>
											</small>
										</div>
										<small><span class="opacity-50">Scopes:</span></small>
										<div class="flex gap-4 flex-wrap">
											{#each data?.tokenDetails?.scope as scope}
												<small><strong></strong>{scope}</small>
											{/each}
										</div>
									</div>

									<a href="/logout" class="btn variant-soft w-full">Logout</a>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if data.tokenDetails}
			<Sidebar class="hidden lg:grid overflow-hidden" />
		{/if}
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="flex flex-col h-full">
		{#if crumbs.length > 0}
			<div class="pl-2 pt-2 pr-2">
				<ol class="breadcrumb card p-2">
					{#each crumbs as crumb, i}
						<!-- If crumb index is less than the breadcrumb length minus 1 -->
						{#if i < crumbs.length - 1}
							<li class="crumb"><a class="anchor" href={crumb.href}>{crumb.label}</a></li>
							<li class="crumb-separator" aria-hidden>&rsaquo;</li>
						{:else}
							<li class="crumb">{crumb.label}</li>
						{/if}
					{/each}
				</ol>
			</div>
		{/if}

		<div class="p-2 grow">
			{#if ready}
				<slot />
			{/if}
		</div>
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
