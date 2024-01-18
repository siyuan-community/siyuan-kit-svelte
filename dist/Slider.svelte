<script>import { createEventDispatcher } from "svelte";
export let value;
export let min = 0;
export let max = 1;
export let step = 1;
const dispatch = createEventDispatcher();
function changed(e) {
  dispatch("change", { $event: e, value: e.target.value });
}
</script>

<input { ...$$props } class="b3-slider" type="range" bind:value {min} {max} {step} on:change={changed} />
