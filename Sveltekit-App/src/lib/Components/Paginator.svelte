<script lang="ts">
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';

	export let totalCount: number = 0;
	export let settings: PaginationSettings;
	export let onPageChange: (e: CustomEvent<number>) => void;
	export let onAmountChange: (e: CustomEvent<number>) => void;
	export let onGo: (e: KeyboardEvent | MouseEvent) => void;
	export let filters: string = '';
	export let sorters: string = '';
</script>

<div class=" p-4 flex flex-row flex-wrap justify-between gap-4">
	<div class="flex flex-row gap-1">
		<input
			on:keydown={onGo}
			bind:value={filters}
			class="input"
			title="Filter"
			type="text"
			placeholder="Filter"
		/>
		<input
			on:keydown={onGo}
			bind:value={sorters}
			class="input"
			title="Sorter"
			type="text"
			placeholder="Sorter"
		/>
		<button on:click={onGo} class="btn variant-filled-primary !text-white"> Go </button>
	</div>
	<p class="my-auto">Total Count: {totalCount}</p>
	<Paginator
		bind:settings
		on:page={onPageChange}
		on:amount={onAmountChange}
		showNumerals={true}
		maxNumerals={1}
		showFirstLastButtons={true}
		showPreviousNextButtons={true}
	/>
</div>
