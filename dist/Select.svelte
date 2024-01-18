<script>import { createEventDispatcher } from "svelte";
export let value;
export let options = [];
const dispatch = createEventDispatcher();
function changed(e) {
  dispatch("change", { $event: e, value: e.target.value });
}
</script>

<select
{ ...$$props }
class="b3-select"
bind:value={value}
on:change={changed}
>
{#each options as option}
	<option value={option.value}>{option.text}</option>
{/each}
</select>