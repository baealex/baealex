/**
 * @typedef {{
 *  directories: {
 *    id: string;
 *    name: string;
 *  }[];
 *  nodes: {
 *    id: string;
 *    name: string;
 *    type: "DIRECTORY" | "FILE";
 *    filePath: string | null;
 *    parent: string | null;
 * }[];
 * }} State
 */

export const appState = (() => {
    /** @type {State} */
    let state = {
        directories: [],
        nodes: [],
    };
    const handlers = [];

    return {
        /**
         * @param {(state: State) => void)} func 
         */
        appendHandler(func) {
            handlers.push(func)
        },
        /**
         * @param {(state: State) => State)} next 
         */
        setState(next) {
            state = next(state);
            handlers.forEach(handler => handler(state));
        }
    }
})();