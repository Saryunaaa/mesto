import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._popupInputs = this._form.querySelectorAll('.popup__input');
        this._submitButton = this._form.querySelector('.popup__save')
    };

    close()  {
        this._form.reset();
        super.close();
    };

    _getInputValues() {
        this._inputValues = {};
        this._popupInputs.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    };

    renderLoading(isLoading) {
		if(isLoading) {
			this._submitButton.textContent = 'Сохранение...';
		} else {
			this._submitButton.textContent = 'Сохранить';
		}
	}

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._getInputValues());
        });

        super.setEventListeners();
    }
}