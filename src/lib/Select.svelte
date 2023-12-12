<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value: any;

	export let options: { text: string; value: any }[] = [];

	const dispatch = createEventDispatcher();

	function changed(e: any) {
		dispatch('change', { $event: e, value: e.target.value });
	}
</script>

<select
class="b3-select"
bind:value={value}
on:change={changed}
>
{#each options as option}
	<option value={option.value}>{option.text}</option>
{/each}
</select>