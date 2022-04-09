import { Fragment, NodeItem } from './index.js';

import { getDirectoryContent } from '../api.js';
import { imagePopup } from '../popup.js';

export function Node($app) {
    const $nodes = document.createElement('div');
    $nodes.className = 'Nodes';
    $app.appendChild($nodes);
    
    this.render = (props, appState) => {
        $nodes.replaceChildren(Fragment([
            Fragment(props.directories.length > 1 && [
                NodeItem({
                    type: 'PREV',
                    onClick: async () => {
                        const prev = props.directories.length - 2;
                        const prevDir = props.directories[prev];
                        const nodes = await getDirectoryContent(prevDir.id);
    
                        appState.set((prevState) => ({
                            directories: prevState.directories.slice(0, prev + 1),
                            nodes,
                        }));
                    }
                })
            ]),
            Fragment(props.nodes.map(node => {
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
                            appState.set((prevState) => ({
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
}