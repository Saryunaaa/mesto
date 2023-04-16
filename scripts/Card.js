export default class Card {

    constructor(data, templateSelector, openPopupImage) {
        this._name = data.name;
        this._link = data.link;
        this._openPopupImage = openPopupImage;
        this._templateSelector = templateSelector;
    }

    //разметка 
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

        this._elementImage = cardElement.querySelector('.element__image'); //кнопка открытия
        this._elementDelete = cardElement.querySelector('.element__delete'); //кнопка удаления
        this._elementlike = cardElement.querySelector('.element__like'); //кнопка лайка

        return cardElement;
    }

    //создаем карточку 
    generateCard() {
        this._element = this._getTemplate();
       
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;
        this._element.querySelector('.element__name').textContent = this._name;

        this._setEventListeners();
        return this._element;
    }

    _likeCard() {
        this._elementlike.classList.toggle('element__like_action');
      }
     
      // создаём метод кнопки удаления
      _deleteCard() {
        this._element.remove();
        this._element = null;
        //this._elementDelete.remove();
      }
     
      _setEventListeners() {
        //обработчик лайка
        this._elementlike.addEventListener('click', () => {
          this._likeCard();
        });
     
        //обработчик кнопки удаления карточки
        this._elementDelete.addEventListener('click', () => {
          this._deleteCard();
        });
     
        //обработчик открытия попап-изображения по клику на карточку
        this._elementImage.addEventListener('click', () => {
          this._openPopupImage(this._name, this._link);
        });
      }

    }