import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        /**
             * Data type
             */ type?: string | undefined;
        /**
             * Label
             */ label?: string | undefined;
        /**
             * Icon
             */ icon?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DockIconProps = typeof __propDef.props;
export type DockIconEvents = typeof __propDef.events;
export type DockIconSlots = typeof __propDef.slots;
export default class DockIcon extends SvelteComponent<DockIconProps, DockIconEvents, DockIconSlots> {
}
export {};
