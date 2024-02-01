<script lang="ts">
	import { JSONEditor } from 'svelte-jsoneditor';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import axios from 'axios';

	export let data;
	console.log(data);

	type TextContent = {
		text: string;
	};

	type JSONContent = {
		json: unknown;
	};

	type Content = JSONContent | TextContent;

	let requestBody: Content = {
		text: '',
		json: undefined
	};

	let responseBody: Content = {
		text: '',
		json: undefined
	};

	function mapPath(path: string[]) {
		const [name, value] = path;
		return { name, value };
	}

	async function makeAPICall() {
		const response = await axios({
			method: selectedAPIMethod,
			url: `${data.session.baseUrl}/${APICallPath}`,
			data: requestBody.json,
			headers: {
				authorization: `Bearer ${data.idnSession.access_token}`
			}
		}).catch((err) => {
			console.error(err);
			return err;
		});
		responseBody = { json: response.data };
		console.log(responseBody);
	}

	function handleKeydown(event: KeyboardEvent) {
		console.log(event);

		if (event.isTrusted === true && event.key === 'Enter') {
			makeAPICall();
		}
	}

	let APIVersions = [
		// @ts-expect-error - This is a valid API Version,
		{ name: 'Beta', value: Object.entries(data.BetaSpec).map((path) => mapPath(path)) },
		// @ts-expect-error - This is a valid API Version,
		{ name: 'V3', value: Object.entries(data.V3Spec).map((path) => mapPath(path)) },
		{
			name: 'Custom',
			value: [
				{
					name: 'Custom Path',
					value: { GET: '', POST: '', PUT: '', PATCH: '', DELETE: '', HEAD: '' }
				}
			]
		}
	];

	$: editorClasses = $modeCurrent === false ? 'jse-theme-dark' : '';

	let selectedAPIVersion = APIVersions[0];
	let selectedPath = selectedAPIVersion.value[0];

	let APICallPath: string = `${selectedAPIVersion.name.toLowerCase()}${selectedPath.name}`;

	let selectedAPIMethod = 'GET';
</script>

<div class="flex flex-col gap-2">
	<div class="flex flex-row">
		<select
			placeholder="Select an API Version"
			class="w-[100px] !rounded-r-none px-4 py-2 select"
			bind:value={selectedAPIVersion}
			on:change={() => {
				selectedPath = selectedAPIVersion.value[0];
				if (['Beta', 'V3', 'V2'].includes(selectedAPIVersion.name)) {
					APICallPath = `${selectedAPIVersion.name.toLowerCase()}${selectedPath.name}`;
				} else if (['CC'].includes(selectedAPIVersion.name)) {
					APICallPath = `${selectedPath.name}`;
				} else {
					APICallPath = '';
				}
			}}
		>
			{#each APIVersions as APIVersion}
				<option selected={selectedAPIVersion === APIVersion} value={APIVersion}>
					{APIVersion.name}
				</option>
			{/each}
		</select>
		<select
			placeholder="Choose the API Endpoint"
			class="!rounded-l-none px-4 select"
			bind:value={selectedPath}
			on:change={() => {
				if (['Beta', 'V3', 'V2'].includes(selectedAPIVersion.name)) {
					APICallPath = `${selectedAPIVersion.name.toLowerCase()}${selectedPath.name}`;
				} else if (['CC'].includes(selectedAPIVersion.name)) {
					APICallPath = `${selectedPath.name}`;
				} else {
					APICallPath = '';
				}
			}}
		>
			{#each selectedAPIVersion.value as path}
				<option selected={path === selectedPath} value={path}>{path.name}</option>
			{/each}
		</select>
	</div>
	<div class="flex flex-row">
		<select class="w-[100px] select rounded-r-none">
			{#each Object.entries(selectedPath.value) as [method, content]}
				<option>{method.toUpperCase()}</option>
			{/each}
		</select>
		<input
			type="text"
			class="w-full !rounded-l-none rounded-r-none px-4 py-2 input"
			bind:value={APICallPath}
		/>
		<button on:click={makeAPICall} class="btn variant-filled-surface rounded-l-none rounded-r-sm">
			Call
		</button>
	</div>

	<div class="card">
		<p class="text-center pt-4">Request</p>
		<div class="{editorClasses}  rounded-lg overflow-hidden pt-2">
			<JSONEditor bind:content={requestBody} />
		</div>
	</div>
	<div class="card">
		<p class="text-center pt-4">Response</p>
		<div class="{editorClasses}  rounded-lg overflow-hidden pt-2">
			<JSONEditor bind:content={responseBody} />
		</div>
	</div>
</div>

<style>
	/* load one or multiple themes */

	@import 'svelte-jsoneditor/themes/jse-theme-dark.css';
</style>
