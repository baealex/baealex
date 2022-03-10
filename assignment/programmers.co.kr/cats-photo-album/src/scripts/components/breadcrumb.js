import { createVirtualDOM } from '../lib/virtual-dom.js';

/**
 * @typedef {import('../types').Directory} Directory
 * @typedef {{
 *  directories: Directory[];
 *  onClick: (directories: Directory[], id: number, idx: number) => void;
 * }} NodeProps
 */

/**
 * @param {NodeProps} props 
 * @returns 
 */

export function Breadcrumb(props) {
    return (
        createVirtualDOM(
            'nav',
            { className: 'Breadcrumb' },
            ...props.directories.map((directory, idx) => (
                createVirtualDOM(
                    'div',
                    {
                        onClick: async () => {
                            await props.onClick(
                                props.directories,
                                directory.id,
                                idx
                            );
                        }
                    },
                    directory.name,
                )
            ))
        )
    )
}