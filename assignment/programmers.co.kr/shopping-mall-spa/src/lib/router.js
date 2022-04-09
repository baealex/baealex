let routerRef = undefined;

export function useRouter() {
    return routerRef;
}

export class Router {
    constructor($el) {
        this.$el = $el;
        this.path = '';
        this.staticMapper = {};
        this.dynamicMapper = {};

        if (!routerRef) {
            routerRef = this;
        }

        window.addEventListener('popstate', () => {
            this.push(location.pathname, true);
        });
    }

    route(path, pageComponent) {
        if (path.includes(':')) {
            this.dynamicMapper[path.split(':')[0]] = pageComponent;
            return;
        }
        this.staticMapper[path] = pageComponent;
    }

    async push(path, isPopState) {
        if (!isPopState) {
            history.pushState(null, null, path);
        }
        
        if (this.staticMapper[path]) {
            const page = await this.staticMapper[path]();
            this.$el.innerHTML = await page.initialRender();
            page.addEventListener();
            return;
        }

        for (const key in this.dynamicMapper) {
            if (path.startsWith(key)) {
                const query = path.replace(key, '');
                const page = await this.dynamicMapper[path.replace(query, '')](query);
                this.$el.innerHTML = await page.initialRender();
                page.addEventListener();
                return;
            }
        }
    }
}