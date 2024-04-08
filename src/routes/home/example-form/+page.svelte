<script lang="ts">
	import { enhance } from '$app/forms';
	import Progress from '$lib/Components/Progress.svelte';
	import { type Source } from 'sailpoint-api-client';
	import { onMount } from 'svelte';
	import type { ActionData } from './$types';
	import { browser } from '$app/environment';

	let selectedSource = '';
	let updatedSource
	let sources: Source[] = null;
	export let form: ActionData
	$: console.log(form)
	

	$: console.log(selectedSource)
	onMount(async () => {
		if (browser) {
			await getSources();
		}
	});

	async function getSources() {
		const response = await fetch('./example-form/api', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			sources = await response.json();
			updatedSource = ''
			if (form && form.source && typeof form.source !== 'undefined') {
				const source: Source = typeof form.source === 'string' ? JSON.parse(form.source) : form.source;
				updatedSource = source.description
				selectedSource = JSON.stringify(source)
			}
			
		} else {
			console.error('Failed to fetch sources');
		}
	}

	function handleChange() {
		if(!selectedSource) return;
		updatedSource = JSON.parse(selectedSource).description
	};

</script>

<div class="flex justify-center flex-col align-middle gap-2">
	{#if form && !form.success && form.message}
		<div class="card p-4 text-red-700">
			<p class="text-2xl text-center">{form.message}</p>
		</div>
	{/if}
	{#if form && form.success}
		<div class="card p-4 text-green-600">
			<p class="text-2xl text-center">Successfully updated source</p>
		</div>
	{/if}
	<form method="POST" class="card p-4"  use:enhance={() => {
		sources = null;
		return ({update}) => {
			getSources();
			update();
		};
	}}>
		<p class="text-2xl text-center">Update Source</p>
		<div class="flex flex-col gap-4">
			{#if sources === null}
				<div class="flex flex-row justify-center">
					<Progress width="w-[100px]" />
				</div>
			{:else}
				<label>
					<span>Sources:</span>
					<select
						bind:value={selectedSource}
						on:change={handleChange}
						name="source"
						class="select"
					>
						{#each sources as source}
							<option value={JSON.stringify(source)}>
								{source.name}
							</option>
						{/each}
					</select>
				</label>

				<label>
					<span>Source description:</span>
					<input  name="updatedSource" class="input" bind:value={updatedSource} />
				</label>
			{/if}

			<button type="submit" class="btn variant-filled">Submit</button>
		</div>
	</form>
</div>