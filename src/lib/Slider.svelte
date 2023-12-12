<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value: number;

	export let min: number = 0;

	export let max: number = 1;

	export let step: number = 1;

	const dispatch = createEventDispatcher();

	function changed(e: any) {
		dispatch('change', { $event: e, value: e.target.value });
	}
</script>

<input { ...$$props } class="b3-slider" type="range" bind:value {min} {max} {step} on:change={changed} />
