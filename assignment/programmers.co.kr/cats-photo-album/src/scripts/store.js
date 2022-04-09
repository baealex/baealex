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
    const observers = [];

    return {
        /**
         * @param {(state: State) => void)} func 
         */
        subscribe(func) {
            observers.push(func)
        },
        /**
         * @param {(state: State) => State)} next 
         */
        set(next) {
            state = next(state);
            observers.forEach(observer => observer(state));
        }
    }
})();