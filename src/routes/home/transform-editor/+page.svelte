<script lang="ts">
	import { enhance } from '$app/forms';
	import Progress from '$lib/Components/Progress.svelte';
	import { type TransformRead } from 'sailpoint-api-client';
	import { onMount } from 'svelte';
	import type { ActionData } from './$types';
	import { browser } from '$app/environment';

	let selectedTransform = '';
	let updatedTransform
	let transforms: TransformRead[] = null;
	export let form: ActionData
	$: console.log(form)
	

	$: console.log(selectedTransform)
	onMount(async () => {
		if (browser) {
			await getTransforms();
		}
	});

	async function getTransforms() {
		const response = await fetch('./transform-editor', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			transforms = await response.json();
			updatedTransform = ''
			if (form && form.transform) {
				updatedTransform = JSON.stringify(JSON.parse(form.transform.toString()), undefined, 4)
				selectedTransform = JSON.stringify(JSON.parse(form.transform.toString()))
			}
			
		} else {
			console.error('Failed to fetch transforms');
		}
	}

	function handleChange() {
		if(!selectedTransform) return;
		updatedTransform = JSON.stringify(JSON.parse(selectedTransform), undefined, 4)
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
			<p class="text-2xl text-center">Successfully updated transform</p>
		</div>
	{/if}
	<form method="POST" class="card p-4"  use:enhance={() => {
		transforms = null;
		return ({update}) => {
			getTransforms();
			update();
		};
	}}>
		<p class="text-2xl text-center">Update Transform</p>
		<div class="flex flex-col gap-4">
			{#if transforms === null}
				<div class="flex flex-row justify-center">
					<Progress width="w-[100px]" />
				</div>
			{:else}
				<label>
					<span>Transforms:</span>
					<select
						bind:value={selectedTransform}
						on:change={handleChange}
						name="transform"
						class="select"
					>
						<option value="">Create a new transform</option>
						{#each transforms as transform}
							<option value={JSON.stringify(transform)}>
								{transform.name}
							</option>
						{/each}
					</select>
				</label>

				<label>
					<span>Transform:</span>
					<pre><textarea  name="updatedTransform" class="textarea h-80" bind:value={updatedTransform} /></pre>
				</label>
			{/if}

			<button type="submit" class="btn variant-filled">Submit</button>
		</div>
	</form>
</div>
