<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Action, TreeNode } from '../types/tree';
	import Icon from './Icon.svelte';

	const dispatchEvent = createEventDispatcher();

	export let node: TreeNode;

	export let depth = 0;

	export let expandedIds: string[];

	export let hideActions = false;

	export let hideArrow: boolean;

	export let actions: Action[] | ((node: TreeNode) => Action[]) = [];

	$: expanded = expandedIds.some((i) => i === node.nodeId);

	$: paddingLeft = (depth - 1) * 18 + 22;

	$: actionList = Array.isArray(actions) ? actions : actions(node);

	const isExpanded = (id: string, s: any) => {
		console.log(
			s,
			'id',
			id,
			expandedIds.toString(),
			expandedIds.some((i) => i === id)
		);
		return expandedIds.some((i) => i === id);
	};

	const toggleExpanded = (id: string) => {
		if (isExpanded(id, 2)) {
			const index = expandedIds.findIndex((v) => v === id);
			expandedIds.splice(index, 1);
			dispatchEvent('expandedChange', [...expandedIds]);
		} else {
			expandedIds.push(id);
			dispatchEvent('expandedChange', [...expandedIds]);
		}
	};

	const hasChild = (node: TreeNode) => node.children && node.children.length > 0;

	const getIcon = (node: TreeNode) => {
		switch (node.type) {
			case 'bookmark':
				return 'iconBookmark';
			case 'tag':
				return 'iconTags';
			default:
				return node.icon || '';
		}
	};

	const onClick = (node: TreeNode) => dispatchEvent('nodeClick', node);

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

<li
	class={['b3-list-item', hideActions ? 'b3-list-item--hide-action' : ''].join(' ')}
	{...getNodeAttrs(node)}
>
	{#if !hideArrow}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			style={`padding-left: ${paddingLeft + 'px'}; margin-right: 2px;`}
			class={[
				'b3-list-item__toggle',
				node.type === 'backlink' || hasChild(node) ? ' b3-list-item__toggle--hl' : '',
				hasChild(node) || node.type === 'backlink' ? '' : ' fn__hidden'
			].join(' ')}
			on:click={() => toggleExpanded(node.nodeId)}
		>
			<svg
				data-id="${encodeURIComponent(node.name + node.depth)}"
				class={[
					'b3-list-item__arrow',
					hasChild(node) && isExpanded(node.nodeId, 3) ? 'b3-list-item__arrow--open' : ''
				].join(' ')}><use xlink:href="#iconRight" /></svg
			>
		</span>
	{/if}
	<Icon class="b3-list-item__graphic" icon={getIcon(node)} />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span class="b3-list-item__text ariaLabel" data-position="parentE" on:click={(e) => onClick(node)}
		><slot name="title" {node}>{node.name}</slot></span
	>
	{#if node.count}
		<span class="counter">${node.count}</span>`
	{/if}
	{#if actionList.length}
		{#each actionList as action}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				data-type={action.type}
				class="b3-list-item__action b3-tooltips b3-tooltips__nw"
				aria-label={action.title}
				on:click={(e) => action.callback(node, e)}
			>
				<Icon icon={action.icon} />
			</span>
		{/each}
	{/if}
</li>

{#if expanded}
	<slot name="tree" />
{/if}
