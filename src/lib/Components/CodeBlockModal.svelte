<script lang="ts">
	import { CodeBlock, getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
</script>

<div class="card p-4 w-[85%]">
	<CodeBlock
		lineNumbers
		language={$modalStore[0]?.meta?.language || 'json'}
		code={$modalStore[0]?.meta?.code || ''}
	/>
</div>
