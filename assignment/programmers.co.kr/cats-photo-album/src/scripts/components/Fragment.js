/**
 * @param {HTMLElement[]} items
 * @return {DocumentFragment}
 */
export function Fragment(items) {
    const fragment = document.createDocumentFragment();
    if (items) {
        items.forEach(item => fragment.appendChild(item));
    }
    return fragment;
}