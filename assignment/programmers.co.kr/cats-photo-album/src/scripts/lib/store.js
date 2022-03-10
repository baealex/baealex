export const createStore = (initialState) => {
    let state = initialState;
    let observer = [];

    return {
        set(next) {
            state = next(state);
            observer.forEach(({ func }) => func(state));
        },
        subscribe(func) {
            func(state);
            const key = Math.random().toString();
            observer.push({ key, func });
        },
        unsubscribe(key) {
            observer = observer.filter(item => item.key !== key);
        }
    }
}