import { Router } from './router.js';

(async () => {
    const $app = document.querySelector('.App');
    const router = new Router($app);
    router.push(location.pathname);
})();