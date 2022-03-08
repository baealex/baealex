export const store = (INITIAL_STATE) => {
    let state = INITIAL_STATE;
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
        unsubscribe(key) {
            observers = observers.filter(observer => observer.key === key);
        },
    }
};