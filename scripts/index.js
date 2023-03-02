//для попапа профиля
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup__profile');
const closeButton = popupProfile.querySelector('.popup__close-profile');
const profileName = document.querySelector('.profile__name');
const profileComment = document.querySelector('.profile__comment');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputComment = popupProfile.querySelector('.popup__input_type_comment');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');

//для попапа карточек 
const addButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup__card');
const popupCloseButton = popupCard.querySelector('.popup__close-card');
const popupFormCard = popupCard.querySelector('.popup__form-card');
const inputTitleCard = popupCard.querySelector('.popup__input_type_title');
const inputLinkCard = popupCard.querySelector('.popup__input_type_url');
const popupSaveButton = popupCard.querySelector('.popup__save-card');

//для попапа фотографии
const popupImage = document.querySelector('.popup__image');
const popupCloseButtonImage = popupImage.querySelector('.popup__close-image');
const popupLargeImage = popupImage.querySelector('.popup__image_div-img');
const popupImageName = popupImage.querySelector('.popup__image_div-name');

//для добавления новых карточек 
const templateCard = document.querySelector('#element__card'); //шаблон, по которому будут добавлены карточки
const sectionCard = document.querySelector('.elements'); // секция, куда мы будем добавлять карты

//функция, открывающая попап карточек 
function openCardForm() {
  inputTitleCard.value = '';
  inputLinkCard.value = '';
  popupCard.classList.add('popup_opened');
};

// слушатель для открытия попапа 
addButton.addEventListener('click', openCardForm);

//функция, закрывающая попап карточек 
function closeCardForm() {
  popupCard.classList.remove('popup_opened');
}

// слушатель для закрытия попапа 
popupCloseButton.addEventListener('click', closeCardForm);

//функция, которая будет добавлять новые карточки 
const addNewCard = (card) => {
  const inCard = templateCard.content.querySelector('.element');
  const newCard = inCard.cloneNode(true);
  const cardImage = newCard.querySelector('.element__image');
  const cardTitle = newCard.querySelector('.element__name');

  cardImage.alt = card.alt,
    cardImage.src = card.link,

    cardTitle.textContent = card.name;

  //для лайка
  const cardLikeButton = newCard.querySelector('.element__like');
  cardLikeButton.addEventListener('click', function () {
    cardLikeButton.classList.toggle('element__like_action');
  });

  //для удаления 
  const cardDeleteButton = newCard.querySelector('.element__delete');
  cardDeleteButton.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  //открытие большой картинки
  function openPopupImage() {
    popupImage.classList.add('popup_opened');
    popupLargeImage.src = cardImage.src;
    popupLargeImage.alt = cardImage.alt;
    popupImageName.textContent = card.name;
  };
  cardImage.addEventListener('click', openPopupImage);

  //закрытие большой картинки 
  function closePopupImage() {
    popupImage.classList.remove('popup_opened');
  };
  popupCloseButtonImage.addEventListener('click', closePopupImage);

  return newCard;
};

//создаем обязательные карточки из массива
initialCards.forEach((card) => {
  sectionCard.append(addNewCard(card));
});

//сохраняем результат
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard({
    name: inputTitleCard.value,
    link: inputLinkCard.value,
  });
  evt.target.reset();
  closeCardForm(popupCard);
};

//добавим наши карточки в начало 
const renderCard = (card) => {
  sectionCard.append(addNewCard(card));
};
//слушатель для сохранения результата
popupCard.addEventListener('submit', handleCardFormSubmit);

//попап с изменением имени и описания (4 спринт)
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileComment.textContent = inputComment.value;
  closeForm(popupProfile);
};

//открываем (4 спринт)
function openForm() {
  inputName.textContent = profileName.value;
  inputComment.textContent = profileComment.value;
  popupProfile.classList.add('popup_opened');
};

//хакрываем (4 спринт)
function closeForm() {
  popupProfile.classList.remove('popup_opened');
};

//слушатели (4 спринт)
editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
popupFormProfile.addEventListener('submit', handleFormSubmit);




