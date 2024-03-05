<script lang="ts">
	import { reports } from './reports';
</script>

<div class="grid gap-2 grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
	{#each reports as report (report.url)}
		<a
			class="card card-hover overflow-hidden"
			data-sveltekit-preload-data="hover"
			href={report.url}
		>
			<header
				class="card-header aspect-[21/9] bg-[#526bf8] flex flex-col justify-center min-h-[105px]"
			>
				<p class="font-bold text-white uppercase text-center text-xl">
					{report.name}
				</p>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3" data-toc-ignore>Summary</h3>
				<article>
					<p>
						{report.description}
					</p>
				</article>
			</div>
		</a>
	{/each}
</div>
