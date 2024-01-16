<script lang="ts" context="module">
	import Dialog from '../../lib/Dialog.svelte';
  import DockIcon from '../../lib/DockIcon.svelte'

  export const meta = {
    title: "HighLevel/Dialog",
    component: Dialog
  }
</script>

<script lang="ts">
   import Button from '$lib/Button.svelte';
import { Story, Template } from '@storybook/addon-svelte-csf';
	let actions = [
		{ type: 'cancel', name: '取消', callback: () => console.log('cancel' )},
		{ type: 'text', name: 'text', callback: () => console.log('text' )},
		{ type: 'any', name: 'hi', callback: () => console.log('hi' )},
	]
</script>

<Template let:args>
  <Dialog {...args} >
  </Dialog>
</Template>

<Story name="Example">
	<div class="b3-dialog__container" style="width:1120px;opacity: 1;">
		<div class="resize__move b3-dialog__header">你好</div>
		<div class="b3-dialog__body">
			<Dialog {actions}>
				<div slot="content">
					<p>Hello World</p>
				</div>
			</Dialog>
		</div>
	  </div>

	  <div class="b3-dialog__container" style="width:1120px;opacity: 1;">
		<div class="resize__move b3-dialog__header">你好</div>
		<div class="b3-dialog__body">
			<Dialog>
				<div slot="content">
					<p>Hello World</p>
				</div>
				<div slot="actions">
					<Button label="hahahahaha"></Button>
				</div>
			</Dialog>
		</div>
	  </div>
</Story>
