<script lang="ts">
	import { page } from '$app/stores';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	$: console.log($page);
</script>

<div class="p-4">
	<div class="card p-4">
		<p class="text-center p-2 pb-4">
			WHOOPS! <br /> <span class="text-red-500">a {$page.status} error occurred.</span> <br /> If
			you believe this is a bug please submit an issue on
			<a
				class="underline text-blue-500 hover:text-blue-700"
				href="https://github.com/sailpoint-oss/idn-admin-console/issues/new/choose"
				rel="noreferrer"
				target="_blank"
			>
				GitHub
			</a>
		</p>
		<div class="grid place-content-center">
			<a href="/" class="btn variant-filled-primary dark:text-white"> Go Back to Login </a>
		</div>
		{#if $page.error?.message}
			<p class="py-2">Message: <br /><span class="text-red-500">{$page.error.message}</span></p>
		{/if}

		{#if $page.error?.urls}
			<p>These links may be helpful:</p>
			<ul>
				{#each $page.error?.urls as url}
					<li>
						-
						<a
							class="underline text-blue-500 hover:text-blue-700"
							href={url}
							rel="noreferrer"
							target="_blank">{url}</a
						>
					</li>
				{/each}
			</ul>
		{/if}
		{#if $page.error?.context}
			<div class="py-2">
				<p>Context</p>
				<CodeBlock language="json" code={JSON.stringify($page.error?.context, null, 4)} />
			</div>
		{/if}
		{#if $page.error?.errData}
			<div class="pt-2">
				<p>Error Data</p>
				<CodeBlock language="json" code={JSON.stringify($page.error?.errData, null, 4)} />
			</div>
		{/if}
	</div>
</div>
