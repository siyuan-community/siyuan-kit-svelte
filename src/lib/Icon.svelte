<script lang="ts">
export let icon: string;

$: iconHref = !(icon || '').startsWith('#') ? `#${icon}` : icon;
</script>

<svg {...$$props}><use xlink:href={iconHref}></use></svg>