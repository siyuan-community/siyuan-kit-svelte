<script lang="ts">
  import './button.css';

  /**
   * Is this the principal call to action on the page?
   */
  export let text = false;

  export let outline = false;

  /**
   * What background color to use
   */
  export let backgroundColor: string | undefined = undefined;
  /**
   * How large should the button be?
   */
  // export let size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Button contents
   */
  export let label: string = '';

  // $: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  $: outlineStyle = outline ? 'b3-button--outline' : ''

  $: textStyle = text ? 'b3-button--text' : ''

  $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button
  type="button"
  class={['b3-button', outlineStyle, textStyle].join(' ')}
  {style}
  on:click
>
  {label}
</button>
