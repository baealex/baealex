import { createVirtualDOM } from '../lib/virtual-dom.js';

/**
 * @typedef {import('../types').NodeType} NodeType
 * @typedef {{
 *  name: string;
 *  type: NodeType;
 *  onClick: (e: Event) => void;
 * }} NodeProps
 */

/**
 * @param {NodeProps} props 
 * @returns 
 */

export function Node(props) {
    return (
        createVirtualDOM(
            'div',
            {
                className: 'Node',
                onClick: props.onClick,
            },
            createVirtualDOM(
                'img',
                {
                    src: `./assets/${props.type.toLowerCase()}.png`
                },
            ),
            props.name && (
                createVirtualDOM(
                    'div',
                    {},
                    props.name,
                )
            )
        )
    )
}