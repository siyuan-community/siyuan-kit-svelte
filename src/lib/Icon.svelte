<script lang="ts">
export let icon: string;

export let size: number | undefined = 0;

export let inline: boolean = false;

$: s = size ? size :
        inline ? 16 : undefined;

$: style = s ? `font-size: ${s}px; height: ${s}px; width: ${s}px` : '';

$: iconHref = !(icon || '').startsWith('#') ? `#${icon}` : icon;
</script>

<svg {style} {...$$props}><use xlink:href={iconHref}></use></svg>