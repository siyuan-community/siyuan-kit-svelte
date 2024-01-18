# Siyuan kit svelte

![Vercel](https://vercelbadge.vercel.app/api/siyuan-community/siyuan-kit-svelte)

The svelte version development kit for siyuan plugin.

## Install

```bash
pnpm install siyuan-kit-svelte
```

## Usage

```svelte
<script lang="ts">
import { Button } from 'siyuan-kit-svelte';

const value = 123;
</script>

<div><Button label={value}></Button></div>
```

## Supported Components

+ Button
+ Switch
+ Input
+ Textarea
+ Slider
+ Select
+ Icon
+ Tree
+ Dock
+ Dialog

Check storybook site [https://svelte-kit.siyuan-note.club](https://svelte-kit.siyuan-note.club) for more information.