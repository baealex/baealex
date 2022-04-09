import { Router } from './lib/router.js';

import { Cart } from './pages/cart.js';
import { Home } from './pages/index.js';
import { Products } from './pages/products.js';

const router = new Router(document.querySelector('.App'));
router.route('/', Home);
router.route('/cart', Cart);
router.route('/products/:id', Products);

router.push(location.pathname);