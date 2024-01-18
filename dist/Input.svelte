<script>import { onMount } from "svelte";
export let value = "";
export let type = "text";
$:
  inputType = type === "text" ? "input" : "number";
let inputElement;
onMount(() => {
  inputElement.type = inputType;
});
</script>

<input { ...$$props } class="b3-text-field" bind:this={inputElement} bind:value on:change />
