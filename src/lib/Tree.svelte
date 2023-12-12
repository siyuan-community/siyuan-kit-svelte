<script lang="ts">
	import type { TreeNode as Node } from '../types/tree';
	import TreeNode from './TreeNode.svelte';

	export let treeNodes: Node[];
</script>

<div>
	<TreeNode {treeNodes} depth={0} />
</div>
