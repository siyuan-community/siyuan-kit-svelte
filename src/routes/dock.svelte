<script lang="ts">
	import Dock from '$lib/Dock.svelte';
	import DockIcon from '$lib/DockIcon.svelte';

	export let name: string;
	export let title: string;
	export let icon: string;
</script>

<div class="fn__flex-1 fn__flex" style="height: 640px; width: 500px;">
	<div
		data-type="wnd"
		data-id="dacd1f23-bf4b-4d90-a4d3-fc6103829fa6"
		class="fn__flex-column fn__flex fn__flex-1"
	>
		<div class="layout-tab-container fn__flex-1">
			<Dock {title} {name} {icon}>
				<div slot="actions">
					<DockIcon type="min" label="最小化" icon="iconMin" />
				</div>
				<div slot="content">
					<p>Hello World</p>
				</div>
			</Dock>
		</div>
	</div>
</div>
