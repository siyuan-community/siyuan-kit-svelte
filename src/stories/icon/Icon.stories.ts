import type { Meta, StoryObj } from '@storybook/svelte';

import Icon from '../../lib/Icon.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: '示例/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      type: 'string',
      options: ['iconTransform', 'iconSiYuan'],
      control: { type: 'radio' }
    },
    // size: {
    //   type: 'number',
    // },
    inline: {
      type: 'boolean',
    }
  },
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IconDefault: Story = {
  args: {
    icon: 'iconTransform',
    size: 0,
    inline: false,
  },
};

export const IconInline: Story = {
  args: {
    icon: 'iconTransform',
    size: 0,
    inline: true,
  }
}

export const IconSize: Story = {
  args: {
    icon: 'iconTransform',
    size: 24,
    inline: true,
  }
}
