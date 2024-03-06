<script lang="ts">
	import { tenantLinks } from './links';

	export let tenantUrl = 'https://placeholder.com';
</script>

<div class="p-4 card variant-soft-surface grow">
	<h1 class="text-center">Tenant Links</h1>
	<ul class="flex flex-col">
		{#each tenantLinks as link}
			<li class="listbox-item">
				<a
					class="hover:underline text-center hover:text-tertiary-600"
					target="_blank"
					rel="noreferrer"
					href={tenantUrl + link.slug}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</div>
