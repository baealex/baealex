import { createVirtualDOM } from './lib/virtual-dom.js';

import { Node } from './components/node.js';

/**
 * @typedef {import('./types').Directory} Directory
 * @typedef {import('./types').Node} Node
 * @typedef {{
 *  directories: Directory[];
 *  nodes: Node[];
 *  onClickNav: (directories: Directory[], id: number, idx: number) => void;
 *  onClickNode: (node: Node) => void;
 *  onClickPrevNode: (directories: Directory[]) => void;
 * }} AppProps
 */

/**
 * 
 * @param {AppProps} props 
 * @returns 
 */

export function App(props) {
    return (
        createVirtualDOM(
            'div',
            {},
            createVirtualDOM(
                'nav',
                { className: 'Breadcrumb' },
                ...props.directories.map((directory, idx) => (
                    createVirtualDOM(
                        'div',
                        {
                            onClick: async () => {
                                await props.onClickNav(
                                    props.directories,
                                    directory.id,
                                    idx
                                );
                            }
                        },
                        directory.name,
                    )
                ))
            ),
            createVirtualDOM(
                'div',
                { className: 'Nodes' },
                props.directories.length > 1 && (
                    Node({
                        type: 'PREV',
                        onClick: async () => {
                            await props.onClickPrevNode(props.directories);
                        }
                    })
                ),
                ...props.nodes.map(node => Node({
                    name: node.name,
                    type: node.type,
                    onClick: async () => await props.onClickNode(node)
                }))
            ),
        )
    )
}