<script>import { createEventDispatcher } from "svelte";
import Icon from "./Icon.svelte";
const dispatchEvent = createEventDispatcher();
export let node;
export let depth = 0;
export let expandedIds;
export let hideActions = false;
export let hideArrow;
export let actions = [];
$:
  expanded = expandedIds.some((i) => i === node.nodeId);
$:
  paddingLeft = (depth - 1) * 18 + 22;
$:
  actionList = Array.isArray(actions) ? actions : actions(node);
const isExpanded = (id, s) => {
  console.log(
    s,
    "id",
    id,
    expandedIds.toString(),
    expandedIds.some((i) => i === id)
  );
  return expandedIds.some((i) => i === id);
};
const toggleExpanded = (id) => {
  if (isExpanded(id, 2)) {
    const index = expandedIds.findIndex((v) => v === id);
    expandedIds.splice(index, 1);
    dispatchEvent("expandedChange", [...expandedIds]);
  } else {
    expandedIds.push(id);
    dispatchEvent("expandedChange", [...expandedIds]);
  }
};
const hasChild = (node2) => node2.children && node2.children.length > 0;
const getIcon = (node2) => {
  switch (node2.type) {
    case "bookmark":
      return "iconBookmark";
    case "tag":
      return "iconTags";
    default:
      return node2.icon || "";
  }
};
const onClick = (node2) => dispatchEvent("nodeClick", node2);
const getNodeAttrs = (node2) => {
  let result = {};
  if (node2.nodeId) {
    result["data-node-id"] = node2.nodeId;
  }
  if (node2.notebookId) {
    result["data-notebook-id"] = node2.notebookId;
  }
  if (node2.type) {
    result["data-type"] = node2.type;
  }
  if (node2.path) {
    result["data-path"] = node2.path;
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
		<!-- svelte-ignore a11y-no-static-element-interactions -->
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
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span class="b3-list-item__text ariaLabel" data-position="parentE" on:click={(e) => onClick(node)}
		><slot name="title" {node}>{node.name}</slot></span
	>
	{#if node.count}
		<span class="counter">${node.count}</span>`
	{/if}
	{#if actionList.length}
		{#each actionList as action}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
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
