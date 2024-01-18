import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        icon: string;
        size?: number | undefined;
        inline?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
export default class Icon extends SvelteComponent<IconProps, IconEvents, IconSlots> {
}
export {};
