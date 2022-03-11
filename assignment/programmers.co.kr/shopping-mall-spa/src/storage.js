const KEY = 'products_cart';

export function getCartItem() {
    if (localStorage.getItem(KEY)) {
        return JSON.parse(localStorage.getItem(KEY));
    }
    return [];
}

export function setCartItem(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
}

export function appendCartItem(item) {
    const items = getCartItem() || [];
    items.push(item);
    setCartItem(items);
}

export function removeCartItem() {
    localStorage.removeItem(KEY);
}