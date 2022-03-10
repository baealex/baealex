import { createVirtualDOM } from './lib/virtual-dom.js';

import { Breadcrumb } from './components/breadcrumb.js';
import { Nodes } from './components/nodes.js';

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
            Breadcrumb({
                directories: props.directories,
                onClick: props.onClickNav,
            }),
            Nodes({
                directories: props.directories,
                nodes: props.nodes,
                onClickPrev: props.onClickPrevNode,
                onClick: props.onClickNode,
            }),
        )
    )
}