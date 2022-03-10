import { updateElement } from './lib/virtual-dom.js';
import { getDirectoryContent } from './module/api.js';
import { imagePopup } from './module/popup.js';

import { App } from './app.js';
import { appState } from './store.js';

/**
 * @typedef {import('./store').State} State
 */

async function handleClickNavigation(directories, id, idx) {
    const lastIndex = directories.length - 1;
    const lastDir = directories[lastIndex];

    if (lastDir.id !== id) {
        const nodes = await getDirectoryContent(id);
        appState.set((prevState) => ({
            directories: prevState.directories.slice(0, idx + 1),
            nodes,
        }));
    }
}

async function handleClickNode(node) {
    if (node.type === 'FILE') {
        const baseURL = 'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public'
        imagePopup.show(baseURL + node.filePath);
    }
    if (node.type === 'DIRECTORY') {
        const nodes = await getDirectoryContent(node.id);
        appState.set((prevState) => ({
            directories: prevState.directories.concat({
                id: node.id,
                name: node.name
            }),
            nodes,
        }));
    }
}

async function handleClickPrevNode(directories) {
    const prev = directories.length - 2;
    const prevDir = directories[prev];
    const nodes = await getDirectoryContent(prevDir.id);

    appState.set((prevState) => ({
        directories: prevState.directories.slice(0, prev + 1),
        nodes,
    }));
}

(async function() {
    const $app = document.querySelector('.App');
    let prevDOM = undefined;

    appState.subscribe((state) => {
        const nextDOM = App({
            ...state,
            onClickNav: handleClickNavigation,
            onClickNode: handleClickNode,
            onClickPrevNode: handleClickPrevNode,
        });

        updateElement($app, nextDOM, prevDOM);
        prevDOM = nextDOM;
        return;
    });

    // initialize to root
    const rootNodes = await getDirectoryContent();
    appState.set((/** @type {State} */prevState) => ({
        nodes: rootNodes,
        directories: prevState.directories.concat({
            id: undefined,
            name: 'root',
        }),
    }));
})();