import type { Meta, StoryObj } from '@storybook/svelte';

import Dock from '../../lib/Dock.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: '示例/Dock',
  component: Dock,
  tags: ['autodocs'],
  argTypes: {
    title: { type: 'string', defaultValue: '测试标题' },
    icon: { type: 'string', defaultValue: 'iconSiYuan' },
    name: { type: 'string', defaultValue: 'testDock' }
  },
} satisfies Meta<Dock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: '测试标题',
    icon: 'iconSiYuan',
    name: 'testDock',
  },
};
