<script lang="ts">
	import { enhance } from '$app/forms';
	import Progress from '$lib/Components/Progress.svelte';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import {
	TransformTypeEnum, type Transform


} from 'sailpoint-api-client';
	export let data;
	export let form;

	
	const selectedSource: Writable<any> = localStorageStore('selectedSource', undefined);
	const updatedTransform: Writable<string> = localStorageStore('updatedTransform', '');

	onMount(async () => {
		const sources = await data.transforms;
		if (sources.length > 0) {
			$selectedSource = JSON.stringify(sources[0]);
			$updatedTransform = JSON.stringify(sources[0], undefined, 4);
		}
	});

	const handleChange = (e: any) => {
		$updatedTransform = JSON.stringify(JSON.parse(e.target.value), undefined, 4);
	};

	$: console.log($selectedSource);
</script>

{#if form}
	{#if form.status === 'success'}
		<div class="alert alert-success">
			<p>updated transform</p>
		</div>
	{/if}
	{#if form.message}
		<div class="alert alert-error">
			<p>{form.message}</p>
		</div>
	{/if}
{/if}

<div class="flex justify-center flex-col align-middle gap-2">
	<div class="card p-4">
		<p class="text-2xl text-center">Transform Editor</p>
	</div>
	<form method="POST" class="card p-4">
		<p class="text-2xl text-center">Update Transform</p>
		<div class="flex flex-col gap-4">
			{#await data.transforms}
				<div class="flex flex-row justify-center">
					<Progress width="w-[100px]" />
				</div>
			{:then sources}
				<label>
					<span>Transforms:</span>
					<select
						on:change={handleChange}
						name="transform"
						placeholder="Select a transform"
						bind:value={$selectedSource}
						class="select"
					>
						<option hidden disabled>Select a transform</option>
						
						{#each sources as source}
							{@const sourceString = JSON.stringify(source)}
							<option value={sourceString} selected={$selectedSource === sourceString}>
								{source.name}
							</option>
						{/each}
					</select>
				</label>

				<label>
					<span>Description:</span>
					<pre><textarea name="updatedTransform" class="textarea h-80" bind:value={$updatedTransform} /></pre>
				</label>
			{/await}

			<button type="submit" class="btn variant-filled">Submit</button>
		</div>
	</form>
</div>
