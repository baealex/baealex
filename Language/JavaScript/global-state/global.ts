function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export class State<T> {
    state: T | any;
    private updater: any;

    constructor() {
        this.state = {};
        this.updater = {};
    }

    async setState(newState: T) {
        return new Promise((resolve) => {
            Object.assign(this.state, newState);
            Object.keys(this.updater).forEach(key => {
                try {
                    this.runUpdater(key);
                } catch(e) {
                    this.popUpdater(key);
                }
            });
            resolve(this.state);
        })
    }

    appendUpdater(fn: (state: T) => void) {
        const key = createUUID();
        this.updater[key] = () => fn(this.state);
        return key;
    }

    runUpdater(key: string) {
        this.updater[key]();
    }

    popUpdater(key: string) {
        delete this.updater[key];
    }
}