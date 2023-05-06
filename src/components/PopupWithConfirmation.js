import Popup from '../components/Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, {submitCallback}) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._submitButton = this._popup.querySelector('.popup__save');
    };

    open(card, cardId) {
        this.id = cardId;
        this.card = card;
        super.open();
    };

    renderLoading(isLoading) {
		if(isLoading) {
			this._submitButton.textContent = 'Сохранение...';
		} else {
			this._submitButton.textContent = 'Сохранить';
		}
	}

    setEventListeners() {
        this._submitButton.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this.cardId, this.card)
        })
        super.setEventListeners()
    }
}