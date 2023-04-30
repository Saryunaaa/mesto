import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPhoto = this._popupSelector.querySelector('.popup__photo');
        this._popupPhotoDescription = this._popupSelector.querySelector('.popup__description');
    };

    open(name, link) {
        this._popupPhoto.src = link;
        this._popupPhoto.alt = name;
        this._popupPhotoDescription.textContent = name;
        super.open();
    }
}