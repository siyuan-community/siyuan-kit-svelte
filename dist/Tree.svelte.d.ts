import { SvelteComponent } from "svelte";
import type { Action, TreeNode as Node } from '../types/tree';
declare const __propDef: {
    props: {
        [x: string]: any;
        depth?: number | undefined;
        expandedIds?: string[] | undefined;
        treeNodes?: Node[] | undefined;
        actions?: Action[] | ((node: Node) => Action[]) | undefined;
        hideActions?: boolean | undefined;
        hideArrowWhenOnlyOneLevel?: boolean | undefined;
    };
    events: {
        nodeClick: CustomEvent<any>;
        expandedChange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {
            node: any;
        };
    };
};
export type TreeProps = typeof __propDef.props;
export type TreeEvents = typeof __propDef.events;
export type TreeSlots = typeof __propDef.slots;
export default class Tree extends SvelteComponent<TreeProps, TreeEvents, TreeSlots> {
}
export {};
