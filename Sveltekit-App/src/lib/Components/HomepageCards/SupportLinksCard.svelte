<script lang="ts">
	import { supportLinks } from './links';
</script>

<div class="p-4 card variant-soft-surface grow">
	<h1 class="text-center">Support</h1>
	<ul class="flex flex-col">
		{#each supportLinks as link}
			<li class="flex flex-row gap-1 hover:underline hover:text-tertiary-600">
				<a target="_blank" rel="noreferrer" href={link.href}>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</div>
