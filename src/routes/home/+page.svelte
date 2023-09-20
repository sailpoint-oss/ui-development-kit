<script>
	import { each } from 'svelte/internal';

	let pages = [
		{
			url: '/source-account-create-error',
			name: 'Source Account Create Error',
			description:
				'This report will show all source accounts for which there is a create error associated with the source',
		},
		{
			url: '/source-account-make-error',
			name: 'Source Account Make Error',
			description:
				'This report will show all source accounts for which there is a create error associated with the source',
		},
	];
</script>

<div class="p-4">
	<img src="/SailPoint-Developer-Community-Lockup.png" alt="sailPoint Logo" />
	<a href="/" class="btn variant-filled-primary w-full mt-2 text-slate-50 text-lg">
		Go back to login
	</a>
	<div class="text-2xl text-slate-500 divide-dashed divide-y-2 mt-4 mb-2">
		Select a report to run
	</div>

	<div class="flex flex-row flex-wrap">
		{#each pages as page (page.url)}
			<a
				class="card card-hover overflow-hidden m-4 w-modal-slim"
				href="/source-account-create-error"
			>
				<header>
					<div class="w-full aspect-[21/9] text-container" alt="Post">
						<div class="text">{page.name}</div>
					</div>
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3" data-toc-ignore>Summary</h3>
					<article>
						<p>
							{page.description}
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
			</a>
		{/each}
	</div>
</div>

<style>
	/* Define a container to hold the text */
	.text-container {
		position: relative;
		background-color: #526bf8;
		overflow: hidden;
	}

	/* Style the text */
	.text {
		font-size: 24px;
		font-weight: bold;
		color: #fff;
		text-transform: uppercase;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
