import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._popupPhoto = this.popup.querySelector('.popup__photo');
        this._popupPhotoDescription = this.popup.querySelector('.popup__description');
    };

    openPopup(title, link) {
        this._popupPhoto.src = link;
        this._popupPhoto.alt = title;
        this._popupPhotoDescription.textContent = title;
        super.openPopup();
    }
}
