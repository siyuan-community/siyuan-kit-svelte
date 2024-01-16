import type { Meta, StoryObj } from '@storybook/svelte';

import Tree from '../../lib/Tree.svelte';
import TreeExample from './TreeExample.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'HighLevel/Tree',
    component: Tree,
    tags: ['autodocs'],
    argTypes: {
        treeNodes: {

        },
        actions: {

        },
        hideArrowWhenOnlyOneLevel: {
            type: 'boolean',
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
        expandedIds: ['456', '789'],
    },
};

export const TreeWithSlot: Story = {
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
        expandedIds: ['456', '789'],
    },
    render: (args) => ({
        Component: TreeExample,
        props: {
            ...args,
        }
    })
}

export const TreeOnlyOneLevel: Story = {
    args: {
        treeNodes: [{
            name: 'test',
            nodeId: '123',
            icon: 'iconSiYuan'
        }, {
            name: 'test2',
            nodeId: '456',
            icon: 'iconFolder',
        }],
        actions: [
            { type: 'file', icon: 'iconFile', title: 'file', callback: (n, e) => {
                console.log(n, e);
            }},
            { type: 'test', icon: 'iconSiYuan', title: 'test', callback: (n, e) => {
                console.log(n, e);
            }}
        ],
        hideArrowWhenOnlyOneLevel: true,
        
    },
    render: (args) => ({
        Component: Tree,
        props: {
            ...args,
        }
    })
}
