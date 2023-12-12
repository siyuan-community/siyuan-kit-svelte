<script lang="ts">
export let icon: string;

$: iconHref = icon.startsWith('#') ? icon.slice(1) : icon;
</script>

<svg {...$$props}><use xlink:href={iconHref}></use></svg>