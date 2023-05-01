export default class Section {
    constructor({ renderer }) {
        this._renderer = renderer;
        this._container = document.querySelector('.element');
    }
    renderItems(items, user) {
        items.forEach(item => {
            this._renderer(item, user);
        });
    }

    addItemAppend = (element) => {
        this._container.append(element);
    }

    addCard = (element) => {
        this._container.prepend(element);
    }
}