import { createStore } from './lib/store.js';

/**
 * @typedef {import('./types').Directory} Directory
 * @typedef {import('./types').Node} Node
 * @typedef {{
 *  directories: Directory[];
 *  nodes: Node[];
 * }} State
 */

export const appState = createStore({
    directories: [],
    nodes: [],
})