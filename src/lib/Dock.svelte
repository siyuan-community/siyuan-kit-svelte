<script lang="ts">
	/**
	 * dock name
	 */
	export let name: string = '';

	/**
	 * Title on left top
	 */
	export let title: string = '';

	/**
	 * Icon on left top
	 */
	export let icon: string = '';

	$: dockIcon = !icon.startsWith('#') ? `#${icon}` : icon;
</script>

<div class={'fn__flex-1 fn__flex-column ' + name}>
	<div class="block__icons">
		<div class="block__logo">
			<svg><use xlink:href={dockIcon} /></svg>
			{title}
		</div>
		<span class="fn__flex-1 fn__space" />
		<slot name="actions" />
	</div>
	<div class="fn__flex-1">
		<slot name="content" />
	</div>
</div>
