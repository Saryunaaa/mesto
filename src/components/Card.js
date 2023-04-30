export default class Card {

  constructor(data, userId, templateSelector, handleCardClick, handleCardDelete, handleCardLike, handleCardUnlike) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this.cardId = data._id;
    this.dataCard = data;
    this._likeCounter = data.likes.length;

    this._userId = userId;

    this._ownerId = data.owner._id;

    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._handleCardUnlike = handleCardUnlike;

    this._templateSelector = templateSelector;

  }

  //разметка 
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

    return cardElement;
  }

  //создаем карточку 
  generateCard() {
    this._element = this._getTemplate();

    this._elementImage = this._element.querySelector('.element__image'); //кнопка открытия
    this._elementDelete = this._element.querySelector('.element__delete'); //кнопка удаления
    this._elementlike = this._element.querySelector('.element__like'); //кнопка лайка
    this._elementName = this._element.querySelector('element__name');
    this._elementLikeCounter = this._element.querySelector('element__likes');

    this._elementImage.alt = this._name;
    this._elementImage.src = this._link;
    this._elementName.textContent = this._name;

    if (this._ownerId !== this._userId) {
      this._elementDelete.remove()
    };

    this.renderLikeCard(this.dataCard);

    this._setEventListeners();

    return this._element;
  }

  isLiked() {
    return this._likes.some(like => like._id === this._userId)
  };

  toggleLike() {
    if (this.isLiked()) {
      this._handleCardUnlike(this.dataCard)
    } else {
      this._handleCardLike(this.dataCard)
    }
  };

  renderLikeCard(card) {
    this._likes = card.likes;
    if(this._likes.length === 0) {
      this._elementLikeCounter.textContent = '0';
    } else {
      this._elementLikeCounter.textContent = this._likes.length;
    }
    
    if (this.isLiked()){
      this._elementlike.classList.add('element__like_action')
    } else {
      this._elementlike.classList.remove('element__like_action')
    }
   };


  // создаём метод кнопки удаления
   deleteCard() {
    this._element.remove();
    this._element = null;
    //this._elementDelete.remove();
  }

  _setEventListeners() {
    //обработчик лайка
    this._elementlike.addEventListener('click', () => {
      this.toggleLike();
    });

    //обработчик кнопки удаления карточки
    this._elementDelete.addEventListener('click', () => {
      this._handleCardDelete(this, this.cardId);
    });

    //обработчик открытия попап-изображения по клику на карточку
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

}