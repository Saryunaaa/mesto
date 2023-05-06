import Popup from '../components/Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._submitButton = this._popup.querySelector('.popup__save');
    };

    open(card, cardId) {
        this.cardId = cardId;
        this.card = card;
        super.open();
    };

    renderLoading(isLoading) {
		if(isLoading) {
			this._submitButton.textContent = 'Удаление...';
		} else {
			this._submitButton.textContent = 'Да';
		}
	}

    setEventListeners() {
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._submitCallback(this.cardId, this.card)
        })
        super.setEventListeners()
    }
}