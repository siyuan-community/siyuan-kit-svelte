<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Action, TreeNode as Node } from '../types/tree';
	import TreeNode from './TreeNode.svelte';

	const dispatchEvent = createEventDispatcher();

	export let depth = 0;

	$: rootClass = depth === 0 ? 'b3-list b3-list--background' : '';

	export let expandedIds: string[] = [];

	export let treeNodes: Node[] = [];

	export let actions: Action[] | ((node: Node) => Action[]) = [];

	export let hideActions = true;

	export let hideArrowWhenOnlyOneLevel = false;

	const onExpandedChange = (e: any) => {
		expandedIds = e.detail;
		dispatchEvent('expandedChange', e.detail);
	};
</script>

<ul class={[$$props.class, rootClass].join(' ')} data-depth={depth}>
	{#each treeNodes || [] as node, index (node.nodeId)}
		<TreeNode
			bind:node
			bind:expandedIds
			{depth}
			{actions}
			{hideActions}
			hideArrow={depth === 0 && treeNodes.every((n) => !n.children || !n.children.length)}
			on:nodeClick
			on:expandedChange={onExpandedChange}
		>
			<span slot="title" let:node>
				<slot name="title" {node}>{node.name}</slot>
			</span>
			<svelte:self
				slot="tree"
				bind:treeNodes={node.children}
				bind:expandedIds
				depth={depth + 1}
				on:expandedChange
				{hideActions}
				{actions}
				{hideArrowWhenOnlyOneLevel}
			>
				<span slot="title" let:node>
					<slot name="title" {node}>{node.name}</slot>
				</span>
			</svelte:self>
		</TreeNode>
	{/each}
</ul>
