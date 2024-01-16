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

## TODO

+ [按钮Button](/?path=/docs/BaseComponent-button--docs)
+ [开关Switch](/?path=/docs/BaseComponent-switch--docs)
+ [输入Input（文字、数字）](/?path=/docs/BaseComponent-input--docs)
+ [文本域 Textarea](/?path=/docs/BaseComponent-textarea--docs)
+ [滑块Slider](/?path=/docs/BaseComponent-slider--docs)
+ [选择Select](/?path=/docs/BaseComponent-select--docs)
+ 图标(SpanSvg)

+ 树型结构
+ 侧边Dock（插槽：标题、按钮组、内容）
+ Dialog（插槽）
+ Tab