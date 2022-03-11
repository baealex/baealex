import { getDirectoryContent } from './api.js';
import {
    Fragment,
    NavItem,
    NodeItem,
} from './components.js';
import { imagePopup } from './popup.js';
import { appState } from './state.js';

(async function App() {
    const $app = document.querySelector('.app');

    const $nav = document.createElement('nav');
    $nav.className = 'Breadcrumb';
    $app.appendChild($nav);

    const $nodes = document.createElement('div');
    $nodes.className = 'Nodes';
    $app.appendChild($nodes);

    function render(state) {
        $nav.innerHTML = '';
        $nav.appendChild(Fragment(state.directories.map((directory, idx) => {
            return NavItem({
                name: directory.name,
                onClick: async () => {
                    const latest = state.directories.length - 1;
                    const latestDir = state.directories[latest];

                    if (latestDir.id !== directory.id) {
                        const nodes = await getDirectoryContent(directory.id);
                        appState.setState((prevState) => ({
                            directories: prevState.directories.slice(0, idx + 1),
                            nodes,
                        }));
                    }
                }
            })
        })));
        
        $nodes.innerHTML = '';
        $nodes.appendChild(Fragment([
            Fragment(state.directories.length > 1 && [
                NodeItem({
                    type: 'PREV',
                    onClick: async () => {
                        const prev = state.directories.length - 2;
                        const prevDir = state.directories[prev];
                        const nodes = await getDirectoryContent(prevDir.id);
    
                        appState.setState((prevState) => ({
                            directories: prevState.directories.slice(0, prev + 1),
                            nodes,
                        }));
                    }
                })
            ]),
            Fragment(state.nodes.map(node => {
                if (node.type === 'FILE') {
                    return NodeItem({
                        name: node.name,
                        type: node.type,
                        onClick: () => {
                            const baseURL = 'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public'
                            imagePopup.show(baseURL + node.filePath);
                        },
                    })
                }
                if (node.type === 'DIRECTORY') {
                    return NodeItem({
                        name: node.name,
                        type: node.type,
                        onClick: async () => {
                            const nodes = await getDirectoryContent(node.id);
                            appState.setState((prevState) => ({
                                directories: prevState.directories.concat({
                                    id: node.id,
                                    name: node.name
                                }),
                                nodes,
                            }));
                        },
                    })
                }
            })),
        ]))
    }

    appState.appendHandler(render);

    // initialize to root
    const rootNodes = await getDirectoryContent();
    appState.setState((prevState) => ({
        nodes: rootNodes,
        directories: prevState.directories.concat({
            id: undefined,
            name: 'root'
        }),
    }));
})();