<script>export let name = "";
export let title = "";
export let icon = "";
$:
  dockIcon = !icon.startsWith("#") ? `#${icon}` : icon;
</script>

<div class={'fn__flex-1 fn__flex-column ' + name}>
	<div class="block__icons">
		<div class="block__logo">
			<svg class="block__logoicon"><use xlink:href={dockIcon} /></svg>
			{title}
		</div>
		<span class="fn__flex-1 fn__space" />
		<slot name="actions" />
	</div>
	<div class="fn__flex-1">
		<slot name="content" />
	</div>
</div>
