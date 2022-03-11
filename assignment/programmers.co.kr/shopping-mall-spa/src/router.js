import { Cart } from './pages/cart.js';
import { Home } from './pages/index.js';
import { Products } from './pages/products.js';

let routerRef = undefined;

export function useRouter() {
    return routerRef;
}

export function Router($app) {
    if (!routerRef) {
        routerRef = this;
    }

    window.addEventListener('popstate', () => {
        this.push(location.pathname, true);
    });

    this.push = async (path, isPopState=false) => {
        if (!isPopState) {
            history.pushState(null, null, path);
        }

        let page = undefined;

        if (path === '/') {
            page = await Home();
        }
        else if (path === '/cart') {
            page = await Cart();
        }
        else if (path.startsWith('/products/')) {
            const id = path.replace('/products/', '');
            page = await Products(id);
        }
        
        $app.innerHTML = page.initialRender();
        page.addEventListener();
    }
};