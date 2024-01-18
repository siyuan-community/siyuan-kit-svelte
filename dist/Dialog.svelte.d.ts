import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**
             * Actions
             */ actions?: {
            type: string;
            name: string;
            callback: () => void;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        content: {};
        actions: {};
    };
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponent<DialogProps, DialogEvents, DialogSlots> {
}
export {};
