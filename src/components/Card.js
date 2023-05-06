export default class Card {

  constructor(data, userId, templateSelector, handleCardClick, handleCardDelete, handleCardLike) {
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this.cardId = data._id;
    this.dataCard = data;

    this._userId = userId;

    this._ownerId = data.owner._id;

    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;

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
    this._elementName = this._element.querySelector('.element__name'); //название 
    this._elementLikeCounter = this._element.querySelector('.element__likes'); //счетчик лайков

    this._elementName.textContent = this._title;
    this._elementImage.alt = this._title;
    this._elementImage.src = this._link;


  //проверка карточки на собственный лайк
		if (this._likes.some((user) => user._id === this._userId)) {
			this._isLiked = true;
			this._elementlike.classList.add('element__like_action');
		} else {
			this._isLiked = false;
			this._elementlike.classList.remove('element__like_action');
		}

  //количество лайков
		this._elementLikeCounter.textContent = this._likes.length;

    if(this._ownerId !== this._userId) {
      this._elementDelete.remove()
    };

    this._setEventListeners();
    return this._element;
  }

  
  //лайк
	likeCards(data) {
		this._elementLikeCounter.textContent = data.likes.length;
		this._elementlike.classList.add('element__like_action');
		this._isLiked = true;
	}

  //убираем лайк
	unlikeCards(data) {
		this._elementLikeCounter.textContent = data.likes.length;
		this._elementlike.classList.remove('element__like_action');
		this._isLiked = false;
	}


  // создаём метод кнопки удаления
   deleteCard() {
    this._element.remove();
    this._element = null;
    //this._elementDelete.remove();
  }

  _setEventListeners() {
    //обработчик лайка
    this._elementlike.addEventListener('click', () => {
      this._handleCardLike(this, this.cardId, this._isLiked);
    });

    //обработчик кнопки удаления карточки
    this._elementDelete.addEventListener('click', () => {
      this._handleCardDelete(this, this.cardId);
    });

    //обработчик открытия попап-изображения по клику на карточку
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    });
  }
}