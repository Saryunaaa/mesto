export default class Section {
    constructor({ items, renderer }) {
        this._renderer = renderer;
        this._container = document.querySelector('.element');
    }
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }

    addItemAppend = (element) => {
        this._container.append(element);
    }

    addCard = (element) => {
        this._container.prepend(element);
    }

}