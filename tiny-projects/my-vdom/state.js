export const appState = (() => {
    let state = {
        counter: 0,
    };
    let observers = [];

    return {
        set(next) {
            state = next(state);
            observers.forEach(({ func }) => func(state));
        },
        subscribe(func) {
            func(state);

            const key = Math.random().toString();
            observers.push({
                key,
                func,
            });
            return key;
        },
        unsubscribe(targetKey) {
            observers = observers.filter(({ key }) => key === targetKey);
        },
    }
})();