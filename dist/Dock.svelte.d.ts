import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**
             * dock name
             */ name?: string | undefined;
        /**
             * Title on left top
             */ title?: string | undefined;
        /**
             * Icon on left top
             */ icon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        actions: {};
        content: {};
    };
};
export type DockProps = typeof __propDef.props;
export type DockEvents = typeof __propDef.events;
export type DockSlots = typeof __propDef.slots;
export default class Dock extends SvelteComponent<DockProps, DockEvents, DockSlots> {
}
export {};
