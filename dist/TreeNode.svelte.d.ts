import { SvelteComponent } from "svelte";
import type { Action, TreeNode } from '../types/tree';
declare const __propDef: {
    props: {
        node: TreeNode;
        depth?: number | undefined;
        expandedIds: string[];
        hideActions?: boolean | undefined;
        hideArrow: boolean;
        actions?: Action[] | ((node: TreeNode) => Action[]) | undefined;
    };
    events: {
        expandedChange: CustomEvent<any>;
        nodeClick: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {
            node: TreeNode;
        };
        tree: {};
    };
};
export type TreeNodeProps = typeof __propDef.props;
export type TreeNodeEvents = typeof __propDef.events;
export type TreeNodeSlots = typeof __propDef.slots;
export default class TreeNode extends SvelteComponent<TreeNodeProps, TreeNodeEvents, TreeNodeSlots> {
}
export {};
