<script lang="ts">
	export let value: string = '';

</script>

<textarea { ...$$props } class={[$$props.class, 'b3-text-field'].join(' ')} bind:value on:change />
