import { updateElement } from './lib/virtual-dom.js';

export function App($el) {
    this.$el = $el;
    this.lastDOM = undefined;
}

App.prototype.render = function (nextDom) {
    if (this.lastDOM) {
        updateElement(this.$el, nextDom, this.lastDOM);
        this.lastDOM = nextDom;
        return;
    }

    updateElement(this.$el, nextDom, this.lastDOM);
    this.lastDOM = nextDom;
    return;
}