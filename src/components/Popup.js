export default class Popup {
  constructor(popup) {
    this.popup = document.querySelector(popup);
    this._popupCloseButton = this.popup.querySelector('.popup__close');
  }

  //открытиe попапа
  openPopup() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupEscPress);
  };

  //закрытиe попапа
  closePopup() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupEscPress);
  };

  _closePopupEscPress(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  };

  setEventListeners() {
    this._popupCloseButton.addEventListener('click', () => this.closePopup());
    this.popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.closePopup(evt.currentTarget);
      }
    })
  }
} 
