import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, submitCallBack) {
        super(popup);
        this._submitCallBack = submitCallBack;
        this._form = this.popup.querySelector('.popup__form');
        this._popupInput = this.popup.querySelectorAll('.popup__input');
    };

    closePopup()  {
        super.closePopup();
        this._form.reset();
    };

    _getInputValues() {
        this._inputValues = {};
        this._popupInput.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    };

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallBack(this._getInputValues());
            this.closePopup();
        });
    }
}