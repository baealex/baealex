import { appState } from './state.js';
import {
    createVirtualDOM,
    updateElement
} from './virtual-dom.js';

function handleIncrease() {
    appState.set(({counter}) => ({ counter: counter + 1 }))
}

function handleDecrease() {
    appState.set(({counter}) => ({ counter: counter - 1 }))
}

let lastDOM = undefined;

appState.subscribe((state) => {
    const nextDom = createVirtualDOM('div', {},
        createVirtualDOM('div', {}, `${state.counter}`),
        createVirtualDOM('button', { onClick: handleIncrease }, 'increase'),
        createVirtualDOM('button', { onClick: handleDecrease }, 'decrease'),
    );

    if (lastDOM) {
        updateElement(document.getElementById('root'), nextDom, lastDOM);
        lastDOM = nextDom;
        return;
    }

    updateElement(document.getElementById('root'), nextDom);
    lastDOM = nextDom;
    return;
});