<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	export let width: string = '';
</script>

<div class="grid place-content-center {width}">
	<ProgressRadial
		{width}
		stroke={100}
		meter="stroke-primary-500"
		track="stroke-primary-500/30"
		class="progress-bar"
	/>
</div>
