<script lang="ts">
	import { onMount } from 'svelte';
	export let value: string | number = '';

	export let type: 'number' | 'text' = 'text';

	$: inputType = type === 'text' ? 'input' : 'number';

	let inputElement: HTMLInputElement;
	onMount(() => {
		inputElement.type = inputType;
	});
</script>

<input class="b3-text-field" bind:this={inputElement} bind:value on:change />
