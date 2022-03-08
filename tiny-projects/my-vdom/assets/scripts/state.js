import { store } from './lib/store.js';

export const appState = store({
    text: '',
    items: [],
});