<script lang="ts">
	import type { Action, TreeNode as Node } from '../types/tree';
	import TreeNode from './TreeNode.svelte';

	export let depth = 0;

	$: rootClass = depth === 0 ? 'b3-list b3-list--background' : '';

	export let expandedIds: string[] = []

	export let treeNodes: Node[] = [];

	export let actions: Action[] | ((node: Node) => Action[]) = [];

	const onExpandedChange = (e: any) => {
		expandedIds = e.detail;
	}
</script>

<ul class={[$$props.class, rootClass].join(' ')} data-depth={depth}>
	{#each treeNodes || [] as node, index (node.nodeId)}
		<TreeNode bind:node={node} bind:expandedIds={expandedIds} {depth} {actions} on:expandedChange={onExpandedChange} />
	{/each}
</ul>
