<script lang="ts">
	import { enhance } from '$app/forms';
	import Progress from '$lib/Components/Progress.svelte';
	import { type TransformRead } from 'sailpoint-api-client';
	import { onMount } from 'svelte';

	let selectedTransform = '';
	let updatedTransform
	let transforms: TransformRead[] = null;

	$: console.log(selectedTransform)
	onMount(async () => {
		await getTransforms();
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
		} else {
			console.error('Failed to fetch transforms');
		}
	}

	function handleChange() {
		//console.log(selectedTransform);
		if(!selectedTransform) return;
		updatedTransform = JSON.stringify(JSON.parse(selectedTransform), undefined, 4)
	};

</script>

<div class="flex justify-center flex-col align-middle gap-2">
	<div class="card p-4">
		<p class="text-2xl text-center">Example Form</p>
	</div>
	<form method="POST" class="card p-4"  use:enhance={() => {
		transforms = null;
		return () => {
			getTransforms();
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
