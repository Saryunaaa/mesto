import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallBack) {
        super(popupSelector);
        this._submitCallBack = submitCallBack;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._popupInputs = this._popupSelector.querySelectorAll('.popup__input');
    };

    close()  {
        super.close();
        this._form.reset();
    };

    _getInputValues() {
        this._inputValues = {};
        this._popupInputs.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    };

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallBack(this._getInputValues());
            this.close();
        });
    }
}