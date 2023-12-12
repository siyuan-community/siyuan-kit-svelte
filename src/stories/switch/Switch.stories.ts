import type { Meta, StoryObj } from '@storybook/svelte';

import Switch from '../../lib/Switch.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: '示例/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    value: { type: 'boolean', control: 'boolean' }
  },
} satisfies Meta<Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SwitchWithValue: Story = {
  args: {
    value: true,
  },
};
