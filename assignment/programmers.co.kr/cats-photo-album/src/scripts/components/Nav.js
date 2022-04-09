import { Fragment, NavItem } from './index.js';

import { getDirectoryContent } from '../api.js';

export function Nav($app) {
    const $nav = document.createElement('nav');
    $nav.className = 'Breadcrumb';
    $app.appendChild($nav);

    this.render = (state, setState) => {
        $nav.replaceChildren(Fragment(state.directories.map((directory, idx) => {
            return NavItem({
                name: directory.name,
                onClick: async () => {
                    const latest = state.directories.length - 1;
                    const latestDir = state.directories[latest];

                    if (latestDir.id !== directory.id) {
                        const nodes = await getDirectoryContent(directory.id);
                        setState((prevState) => ({
                            directories: prevState.directories.slice(0, idx + 1),
                            nodes,
                        }));
                    }
                }
            })
        })));
    }
}