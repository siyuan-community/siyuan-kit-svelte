<script>export let actions = [];
</script>

<div class="b3-dialog__content">
	<slot name="content" />
</div>
{#if actions.length || $$slots.actions}
	<div class="b3-dialog__action">
		{#each actions as action, index}
			{#if action.type === 'cancel'}
				<button class="b3-button b3-button--cancel" on:click={() => action.callback()}>{action.name}</button>
			{:else if action.type === 'text'}
				<button class="b3-button b3-button--text" on:click={() => action.callback()}>{action.name}</button>
			{:else}
				<button class="b3-button" on:click={() => action.callback()}>{action.name}</button>
			{/if}
			{#if index < actions.length - 1}
				<div class="fn__space" />
			{/if}
		{/each}
		<slot name="actions" />
	</div>
{/if}
