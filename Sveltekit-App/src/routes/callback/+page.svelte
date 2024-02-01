<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import AnimatedCounter from '$lib/Components/AnimatedCounter.svelte';

	export let data;
	console.log(data);
	if (browser) setTimeout(() => goto(`/home`), 2000);
</script>

<div class="grid place-content-center h-[80vh]">
	<div class="card card-glass z-50 space-y-5 p-4 md:p-10">
		<div class="skills">
			<AnimatedCounter
				interval={1500}
				transitionInterval={10}
				startImmediately
				values={data.counterList}
				random
				class="custom-skill px-2"
			/>
		</div>
	</div>
</div>

<style>
	.skills {
		display: flex;
		justify-items: start;
		align-items: center;
		flex-wrap: wrap;
	}
	:global(.custom-skill) {
		display: inline-block;
		text-align: center;
	}
</style>
