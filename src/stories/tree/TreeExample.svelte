<script lang="ts">
	import Tree from "$lib/Tree.svelte";
	import type { Action, TreeNode } from "../../types/tree";

    export let treeNodes: TreeNode[] = [];

	export let actions: Action[] | ((node: TreeNode) => Action[]) = [];

    </script>

    <Tree {actions} {treeNodes}>
        <div slot="title" let:node>Hello: {node.name}</div>
    </Tree>