import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '../../lib/Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: '示例/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    outline: { type: 'boolean', control: 'boolean' },
    text: { type: 'boolean', control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    text: true,
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    label: 'Button',
  },
};
