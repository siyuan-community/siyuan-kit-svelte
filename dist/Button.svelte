<script>export let text = false;
export let outline = false;
export let backgroundColor = void 0;
export let label = "";
$:
  outlineStyle = outline ? "b3-button--outline" : "";
$:
  textStyle = text ? "b3-button--text" : "";
$:
  style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

<button
  type="button"
  { ...$$props }
  class={['b3-button', outlineStyle, textStyle].join(' ')}
  {style}
  on:click
>
  {label}
</button>
