<script>export let value = "";
</script>

<textarea { ...$$props } class={[$$props.class, 'b3-text-field'].join(' ')} bind:value on:change />
