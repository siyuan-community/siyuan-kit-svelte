<script>export let type = "";
export let label = "";
export let icon = "";
$:
  dockIcon = icon.startsWith("#") ? icon : `#${icon}`;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span data-type={type} class="block__icon b3-tooltips b3-tooltips__sw" aria-label={label} on:click>
	<svg><use xlink:href={dockIcon} /></svg>
</span>
