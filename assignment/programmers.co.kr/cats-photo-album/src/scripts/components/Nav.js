import { Fragment, NavItem } from './index.js';

import { getDirectoryContent } from '../api.js';

export function Nav($app) {
    const $nav = document.createElement('nav');
    $nav.className = 'Breadcrumb';
    $app.appendChild($nav);

    this.render = (props, appState) => {
        $nav.replaceChildren(Fragment(props.directories.map((directory, idx) => {
            return NavItem({
                name: directory.name,
                onClick: async () => {
                    const latest = props.directories.length - 1;
                    const latestDir = props.directories[latest];

                    if (latestDir.id !== directory.id) {
                        const nodes = await getDirectoryContent(directory.id);
                        appState.set((prevState) => ({
                            directories: prevState.directories.slice(0, idx + 1),
                            nodes,
                        }));
                    }
                }
            })
        })));
    }
}