<script lang="ts" context="module">
	import Dock from '../../lib/Dock.svelte';
  import DockIcon from '../../lib/DockIcon.svelte'

  export const meta = {
    title: "示例/Dock",
    component: Dock
  }
</script>

<script lang="ts">
   import { Story, Template } from '@storybook/addon-svelte-csf';

   let title: string = "测试标题";
   let name = "testDock";
   let icon = "iconSiYuan";
</script>

<Template let:args>
  <Dock {...args} >
  </Dock>
</Template>

<Story name="Example">
	<div class="fn__flex-1 fn__flex" style="height: 640px; width: 500px;">
		<div
			data-type="wnd"
			data-id="dacd1f23-bf4b-4d90-a4d3-fc6103829fa6"
			class="fn__flex-column fn__flex fn__flex-1"
		>
			<div class="layout-tab-container fn__flex-1">
				<Dock {title} {name} {icon}>
					<div slot="actions">
						<DockIcon type="min" label="最小化" icon="iconMin" on:click={() => console.log('hello min')} />
					</div>
					<div slot="content" style="margin: 0 8px 2px">
						<p>Hello World</p>
					</div>
				</Dock>
			</div>
		</div>
	</div>
</Story>
