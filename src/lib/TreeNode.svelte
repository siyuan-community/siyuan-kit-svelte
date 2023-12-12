<script lang="ts">
	import type { TreeNode } from '../types/tree';
	import Icon from './Icon.svelte';

	export let treeNodes: TreeNode[];

	export let depth = 0;

	$: rootClass = depth === 0 ? 'b3-list b3-list--background' : '';

	$: paddingLeft = (depth - 1) * 18 + 22;

	const hasChild = (node: TreeNode) => node.children && node.children.length > 0;

	const getIcon = (node: TreeNode) => {
		switch (node.type) {
			case 'bookmark':
				return 'iconBookmark';
			case 'tag':
				return 'iconTags';
			default:
				return 'iconFolder';
		}
	};

	const getNodeAttrs = (node: TreeNode) => {
		let result: { [key: string]: any } = {};
		if (node.nodeId) {
			result['data-node-id'] = node.nodeId;
		}
		if (node.notebookId) {
			result['data-notebook-id'] = node.notebookId;
		}
		if (node.type) {
			result['data-type'] = node.type;
		}
		if (node.path) {
			result['data-path'] = node.path;
		}
		return result;
	};
</script>

<ul class={[$$props.class, rootClass].join(' ')} data-depth={depth}>
	{#each treeNodes as node}
		<li class="b3-list-item" {...getNodeAttrs(node)}>
			<span
				style={`padding-left: ${paddingLeft + 'px'}; margin-right: 2px;`}
				class={[
					'b3-list-item__toggle',
					node.type === 'backlink' || hasChild(node) ? ' b3-list-item__toggle--hl' : '',
					hasChild(node) || node.type === 'backlink' ? '' : ' fn__hidden'
				].join(' ')}
			>
				<svg
					data-id="${encodeURIComponent(node.name + node.depth)}"
					class={['b3-list-item__arrow', hasChild(node) ? 'b3-list-item__arrow--open' : ''].join(
						' '
					)}><use xlink:href="#iconRight" /></svg
				>
			</span>
			<Icon class="b3-list-item__graphic" icon={getIcon(node)} />
			<span class="b3-list-item__text ariaLabel" data-position="parentE">{node.name}</span>
			{#if node.count}
				<span class="counter">${node.count}</span>`
			{/if}
		</li>
		{#if node.children}
			<svelte:self treeNodes={node.children} depth={depth + 1} />
		{/if}
	{/each}
</ul>
