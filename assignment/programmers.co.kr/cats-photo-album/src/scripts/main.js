import { Nav, Node } from './components/index.js';

import { getDirectoryContent } from './api.js';
import { appState } from './store.js';

(async function App() {
    const $app = document.querySelector('.app');
    const $nav = new Nav($app);
    const $nodes = new Node($app);

    function render(state) {
        $nav.render(state, appState);
        $nodes.render(state, appState);
    }

    appState.subscribe(render);

    // initialize to root
    const rootNodes = await getDirectoryContent();
    appState.set((prevState) => ({
        nodes: rootNodes,
        directories: prevState.directories.concat({
            id: undefined,
            name: 'root'
        }),
    }));
})();