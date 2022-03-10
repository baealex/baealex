export function createVirtualDOM(type, props, ...children) {
    return {
        type,
        props,
        children: children.filter(i => !!i)
    };
}

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const $el =  document.createElement(node.type);
    node.children.map(createElement).forEach($el.appendChild.bind($el));

    if (node.props.src) {
        $el.src = node.props.src;
    }

    if (node.props.className) {
        $el.className = node.props.className;
    }

    if (node.props.onClick) {
        $el.addEventListener('click', node.props.onClick);
    }
    
    return $el;
}

function changed(node1, node2) {
    return (
        typeof node1 !== typeof node2 ||
        typeof node1 === 'string' && node1 !== node2 ||
        node1.type !== node2.type ||
        node1.props?.src !== node2.props?.src ||
        node1.props?.onClick !== node2.props?.onClick ||
        node1.props?.className !== node2.props?.className
    )
}

let correctionValue = 0;

export function updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
        correctionValue = 0;
        $parent.appendChild(createElement(newNode));
    } else if (!newNode) {
        $parent.removeChild($parent.childNodes[index - correctionValue++]);
    } else if (changed(newNode, oldNode)) {
        correctionValue = 0;
        $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
    } else if (newNode.type) {
        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;

        for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(
                $parent.childNodes[index],
                newNode.children[i],
                oldNode.children[i],
                i
            );
        }
    }
}