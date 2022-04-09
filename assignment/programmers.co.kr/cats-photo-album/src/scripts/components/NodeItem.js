/**
 * @typedef {{
 *  name: string;
 *  type: "PREV" | "DIRECTORY" | "FILE";
 *  onClick: () => void;
 * }} NodeItemProps
 */

/**
 * @param {NodeItemProps} props 
 * @return {HTMLDivElement}
 */
export function NodeItem(props) {
    const node = document.createElement('div');
    node.className = 'Node';

    const img = document.createElement('img');
    img.src = `./assets/${props.type.toLowerCase()}.png`;
    node.appendChild(img);

    if (props.name) {
        const div = document.createElement('div');
        div.textContent = props.name;
        node.appendChild(div);
    }

    node.addEventListener('click', () => props.onClick())
    return node;
}