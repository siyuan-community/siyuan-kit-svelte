import type { Meta, StoryObj } from '@storybook/svelte';

import Tree from '../../lib/Tree.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: '示例/Tree',
    component: Tree,
    tags: ['autodocs'],
    argTypes: {
        treeNodes: {

        },
        actions: {

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
            icon: 'iconSiYuan'
        }, {
            name: 'test2',
            nodeId: '456',
            icon: 'iconFolder',
            children: [
                {
                    name: '789',
                    nodeId: '789',
                    icon: 'iconFolder',
                    children: [
                        { 
                            name: '890',
                            nodeId: '890',
                            icon: 'iconSiYuan'
                        }
                    ]
                }
            ]
        }],
        actions: [
            { type: 'file', icon: 'iconFile', title: 'file', callback: (n, e) => {
                console.log(n, e);
            }},
            { type: 'test', icon: 'iconSiYuan', title: 'test', callback: (n, e) => {
                console.log(n, e);
            }}
        ],
        expandedIds: ['456', '789']
    },
};
