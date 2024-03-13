<script lang="ts">
	import { navigation } from './navigation';
	import { page } from '$app/stores';
</script>

<div class="{$$props.class ?? ''} w-[144px] overflow-hidden bg-surface-50-900-token h-full">
	<div class="flex flex-col w-36 items-center h-full overflow-hidden">
		<div class="w-full px-2">
			<div class="flex flex-col items-center w-full mt-3 border-surface-400-500-token">
				{#each navigation as section}
					{#each section.content as link (link.url)}
						<a
							href={link.url}
							class="flex items-center w-full h-12 px-3 mt-2 rounded"
							class:bg-surface-active-token={link.url === $page.url.pathname}
							class:!text-white={link.url === $page.url.pathname}
						>
							{#if link.icon}
								<svelte:component this={link.icon} />
							{/if}
							<p class="ml-2 text-sm font-medium">{link.name}</p>
						</a>
					{/each}
				{/each}
			</div>
		</div>
	</div>
</div>
