import type { Meta, StoryObj } from '@storybook/svelte';

import Select from '../../lib/Select.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: '示例/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: 'string', options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
  },
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SelectDefault: Story = {
  args: {
    value: 'primary',
    options: [
      { value: 'primary', 'text': 'Primary' },
      { value: 'secondary', 'text': 'Secondary' }]
  },
};
