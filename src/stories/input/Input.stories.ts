import type { Meta, StoryObj } from '@storybook/svelte';

import Input from './Input.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: '示例/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { type: 'string' },
    value: { type: 'string', control: 'string' }
  },
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InputText: Story = {
  args: {
    type: 'text',
    value: 'test',
  },
};

export const InputNumber: Story = {
  args: {
    type: 'number',
    value: 123,
  },
};

