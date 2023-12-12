import type { Meta, StoryObj } from '@storybook/svelte';

import Tree from '../../lib/Tree.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: '示例/Tree',
    component: Tree,
    tags: ['autodocs'],
    argTypes: {
        treeNodes: {

        }
    },
} satisfies Meta<Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TreeDefault: Story = {
    args: {
        treeNodes: [{
            name: 'test',
            nodeId: '123',
        }, {
            name: 'test2',
            nodeId: '456',
            children: [
                {
                    name: '333',
                    nodeId: 'test',
                }
            ]
        }]
    },
};
