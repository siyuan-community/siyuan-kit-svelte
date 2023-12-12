export interface Action {
    icon: string;
    title: string;
    type: string;
    callback: (node: TreeNode, event: MouseEvent) => void;
}
export interface TreeNode {
    name: string;
    nodeId: string;
    depth?: number;
    children?: TreeNode[];
    icon?: string;
    title?: string;
    actions?: Action[];
    notebookId?: string;
    type?: string;
    path?: string;
    count?: number;
}