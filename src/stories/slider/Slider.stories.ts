import type { Meta, StoryObj } from '@storybook/svelte';

import Slider from '../../lib/Slider.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: '示例/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value: { type: 'number', control: 'number' },
    min: { type: 'number' },
    max: { type: 'number' },
    step: { type: 'number'},
  },
} satisfies Meta<Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SliderDefault: Story = {
  args: {
    value: 12,
    step: 1,
    min: 1,
    max: 100,
  },
};
