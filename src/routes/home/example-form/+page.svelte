<script lang="ts">
	import { enhance } from '$app/forms';
	import Progress from '$lib/Components/Progress.svelte';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { localStorageStore } from '@skeletonlabs/skeleton';

	export let data;

	let selectedSource
	let updatedDescription

	onMount(async () => {
		const sources = await data.sources;
		if (sources.length > 0) {
			$selectedSource = JSON.stringify(sources[0]);
			$updatedDescription = sources[0].description || '';
		}
	});

	const handleChange = (e: any) => {
		$updatedDescription = JSON.parse(e.target.value).description || '';
	};

	$: console.log($selectedSource);
</script>

<div class="flex justify-center flex-col align-middle gap-2">
	<div class="card p-4">
		<p class="text-2xl text-center">Example Form</p>
	</div>
	<form method="POST" class="card p-4">
		<p class="text-2xl text-center">Update Source Description</p>
		<div class="flex flex-col gap-4">
			{#await data.sources}
				<div class="flex flex-row justify-center">
					<Progress width="w-[100px]" />
				</div>
			{:then sources}
				<label>
					<span>Sources:</span>
					<select
						on:change={handleChange}
						name="source"
						placeholder="Select a source"
						bind:value={$selectedSource}
						class="select"
					>
						<option hidden disabled>Select a source</option>
						{#each sources as source}
							{@const sourceString = JSON.stringify(source)}
							<option value={sourceString} selected={$selectedSource === sourceString}>
								{source.name} - {source.type}
							</option>
						{/each}
					</select>
				</label>

				<label>
					<span>Description:</span>
					<textarea name="updatedDescription" class="textarea" bind:value={$updatedDescription} />
				</label>
			{/await}

			<button type="submit" class="btn variant-filled">Submit</button>
		</div>
	</form>
</div>
