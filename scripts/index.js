//для попапа профиля
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const profileCloseButton = popupProfile.querySelector('.popup__close-profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__comment');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputComment = popupProfile.querySelector('.popup__input_type_comment');
const profileForm = document.forms['popup__form-profile'];

//для попапа карточек 
const addButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const popupCloseButton = popupCard.querySelector('.popup__close-card');
const cardForm = document.forms['popup__form-card'];
const inputTitleCard = popupCard.querySelector('.popup__input_type_title');
const inputLinkCard = popupCard.querySelector('.popup__input_type_url');

//для попапа фотографии
const popupImage = document.querySelector('.popup_zoom');
const popupCloseButtonImage = popupImage.querySelector('.popup__close-image');
const popupLargeImage = popupImage.querySelector('.popup__photo');
const popupImageName = popupImage.querySelector('.popup__description');

//для добавления новых карточек 
const templateCard = document.querySelector('#element__card'); //шаблон, по которому будут добавлены карточки
const sectionCard = document.querySelector('.elements'); // секция, куда мы будем добавлять карты
const inCard = templateCard.content.querySelector('.element');

//общая функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscPress);
};

//общая функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscPress);
};

//функция закрытия попапа при нажатии на оверлей 
const closePopupOverlayClickList = document.querySelectorAll('.popup');

closePopupOverlayClickList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.currentTarget);
    }
  });
});

//функция закрытия попапа при нажатии на esc
function closePopupEscPress(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//функция, открывающая попап карточек 
function openCardForm() {
  openPopup(popupCard);
};

// слушатель для открытия попапа 
addButton.addEventListener('click', openCardForm);

//функция, закрывающая попап карточек 
function closeCardForm() {
  closePopup(popupCard);
}
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

//функция, которая будет добавлять новые карточки 
const addNewCard = (card) => {
  const newCard = inCard.cloneNode(true);
  const cardImage = newCard.querySelector('.element__image');
  const cardTitle = newCard.querySelector('.element__name');

  cardImage.alt = card.alt;
  cardImage.src = card.link;

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
    openPopup(popupImage);
    popupLargeImage.src = cardImage.src;
    popupLargeImage.alt = card.alt;
    popupImageName.textContent = card.name;
  };
  cardImage.addEventListener('click', openPopupImage);

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
  evt.submitter.classList.add('popup__save_disabled')
  evt.submitter.disabled = true;
  closeCardForm(popupCard);
};

//добавим наши карточки в начало 
const renderCard = (card) => {
  sectionCard.prepend(addNewCard(card));
};
//слушатель для сохранения результата
popupCard.addEventListener('submit', handleCardFormSubmit);

//попап с изменением имени и описания (4 спринт)
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputComment.value;
  closeProfileForm(popupProfile);
};

//открываем (4 спринт)
function openProfileForm() {
  inputName.textContent = profileName.value;
  inputComment.textContent = profileJob.value;
  openPopup(popupProfile);
};

//закрываем (4 спринт)
function closeProfileForm() {
  closePopup(popupProfile);
};

//слушатели (4 спринт)
editButton.addEventListener('click', openProfileForm);
profileForm.addEventListener('submit', handleProfileFormSubmit);


const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    disabledButtonClass: 'popup__save_disabled',
    inputErrorClass: '.popup__input-error',
    inputSectionSelector: '.popup__section',
    inputErrorClassActive: 'popup__input-error_active',
}

enableValidation(options);


