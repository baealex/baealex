import { createVirtualDOM } from '../lib/virtual-dom.js';

import { Node } from './node.js';

/**
 * @typedef {import('../types').Directory} Directory
 * @typedef {import('../types').Node} Node
 * @typedef {{
 *  directories: Directory[];
 *  nodes: Node[];
 *  onClick: (directories: Directory[], id: number, idx: number) => void;
 *  onClickPrev: (directories: Directory[]) => void;
 * }} AppProps
 */

/**
 * 
 * @param {AppProps} props 
 * @returns 
 */

export function Nodes(props) {
    return createVirtualDOM(
        'div',
        { className: 'Nodes' },
        props.directories.length > 1 && (
            Node({
                type: 'PREV',
                onClick: async () => {
                    await props.onClickPrev(props.directories);
                }
            })
        ),
        ...props.nodes.map(node => Node({
            name: node.name,
            type: node.type,
            onClick: async () => await props.onClick(node)
        }))
    )
}