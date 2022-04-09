/**
 * @typedef {{
 *  name: string
 *  onClick: () => void;
 * }} NavItemProps
 */

/**
 * @param {NavItemProps} props 
 * @return {HTMLDivElement}
 */
export function NavItem(props) {
    const div = document.createElement('div');
    div.textContent = props.name;

    div.addEventListener('click', () => props.onClick())
    return div;
}