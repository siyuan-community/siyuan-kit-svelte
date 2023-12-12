<script lang="ts">
	export let value: boolean;
</script>

<input { ...$$props } class="b3-switch" type="checkbox" bind:checked={value} on:change />
