<script>export let icon;
export let size = 0;
export let inline = false;
$:
  s = size ? size : inline ? 16 : void 0;
$:
  style = s ? `font-size: ${s}px; height: ${s}px; width: ${s}px` : "";
$:
  iconHref = !(icon || "").startsWith("#") ? `#${icon}` : icon;
</script>

<svg {style} {...$$props}><use xlink:href={iconHref}></use></svg>