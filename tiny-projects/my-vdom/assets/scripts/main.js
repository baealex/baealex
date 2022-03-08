import { appState } from './state.js';
import {
    createVirtualDOM
} from './lib/virtual-dom.js';
import { App } from './App.js'; 

function handleChangeInput(e) {
    appState.set((state) => ({
        ...state,
        text: e.target.value,
    }))
}

function handleClickAdd() {
    appState.set((state) => {
        if (state.text === '') {
            return state;
        }

        return {
            ...state,
            text: '',
            items: state.items.concat({
                id: state.items.length,
                text: state.text,
                completed: false,
            })
        }
    });
}

function handleClickItem(id) {
    appState.set((state) => ({
        ...state,
        items: state.items.map(item => (
            item.id !== id
                ? item
                : {
                    ...item,
                    completed: !item.completed,
                }
        ))
    }));
}

const app = new App(document.getElementById('root'))

appState.subscribe((state) => {
    app.render(
        createVirtualDOM('div', { className: 'main' },
            createVirtualDOM('div', { className: 'input' },
                createVirtualDOM(
                    'input',
                    {
                        onChange: handleChangeInput,
                        value: state.text,
                    }
                ),
                createVirtualDOM(
                    'button',
                    {
                        onClick: handleClickAdd
                    },
                    'Add'
                ),
            ),
            createVirtualDOM(
                'ul',
                {},
                ...state.items.map(item => (
                    createVirtualDOM(
                        'li',
                        {
                            className: `${item.completed ? 'completed' : ''}`,
                            onClick: () => handleClickItem(item.id)
                        },
                        `${item.text}`
                    )
                ))
            ),
        )
    );
});