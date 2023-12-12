import type { Meta, StoryObj } from '@storybook/svelte';

import Textarea from '../../lib/Textarea.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: '示例/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    value: { type: 'string', control: 'string' }
  },
} satisfies Meta<Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextareaText: Story = {
  args: {
    value: 'test',
  },
};

