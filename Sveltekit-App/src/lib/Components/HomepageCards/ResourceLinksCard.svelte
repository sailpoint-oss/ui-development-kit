<script lang="ts">
	import { resourcelinks } from './links';
</script>

<div class="p-4 card variant-soft-surface grow">
	<h1 class="text-center">Resources</h1>
	<ul class="flex flex-col">
		{#each resourcelinks as link}
			<li class="listbox-item">
				<a
					class="hover:underline text-center hover:text-tertiary-600"
					target="_blank"
					rel="noreferrer"
					href={link.href}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</div>
