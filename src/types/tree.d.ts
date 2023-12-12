export interface Action {
    icon: string;
    title: string;
    callback: (event: MouseEvent) => boolean;
}
export interface TreeNode {
    name: string;
    depth?: number;
    children?: TreeNode[];
    icon?: string;
    title?: string;
    actions?: Action[];
    nodeId?: string;
    notebookId?: string;
    type?: string;
    path?: string;
    count?: number;
}