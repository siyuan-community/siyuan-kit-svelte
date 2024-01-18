import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        text?: boolean | undefined;
        outline?: boolean | undefined;
        backgroundColor?: string | undefined;
        label?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
