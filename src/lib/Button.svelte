<script lang="ts">
  /**
   * Text mode
   */
  export let text: boolean = false;

  /**
   * Outline mode
   */
  export let outline: boolean = false;

  /**
   * What background color to use
   */
  export let backgroundColor: string | undefined = undefined;
  /**
   * Button contents
   */
  export let label: string = '';

  $: outlineStyle = outline ? 'b3-button--outline' : ''

  $: textStyle = text ? 'b3-button--text' : ''

  $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
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
