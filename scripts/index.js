import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import {initialCards} from "../utils/cards.js";

const options = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  disabledButtonClass: 'popup__save_disabled',
  inputErrorClass: '.popup__input-error',
  inputSectionSelector: '.popup__section',
  inputErrorClassActive: 'popup__input-error_active',
}

const forms = document.querySelectorAll('.form')

//для попапа профиля
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__comment');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputComment = popupProfile.querySelector('.popup__input_type_comment');
const profileForm = document.forms['popup__form-profile'];

//для попапа карточек 
const addButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const cardForm = document.forms['popup__form-card'];
const inputTitleCard = popupCard.querySelector('.popup__input_type_title');
const inputLinkCard = popupCard.querySelector('.popup__input_type_url');

//для попапа фотографии
const popupImage = document.querySelector('.popup_zoom');
const popupLargeImage = popupImage.querySelector('.popup__photo');
const popupImageName = popupImage.querySelector('.popup__description');

//для добавления новых карточек 
const sectionCard = document.querySelector('.elements'); // секция, куда мы будем добавлять карты

//7 спринт ебучий
const profileFormValidator = new FormValidator(options, profileForm);
const cardFormValidator = new FormValidator(options, cardForm);

forms.forEach((formElement) => {
  const validator = new FormValidator(options, formElement);
  validator.enableValidation();
});

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
const popupList = document.querySelectorAll('.popup');

popupList.forEach((popup) => {
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
  cardFormValidator._toggleButtonState();
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

//открытие большой картинки
function openPopupImage(name, link) {
  openPopup(popupImage);
  popupLargeImage.src = link;
  popupLargeImage.alt = name;
  popupImageName.textContent = name;
};

//функция, которая создает карточки c помощью классa
const createNewCard = (...args) => {
  return new Card(...args).generateCard();
};

const renderCard = (element) => {
  const card = createNewCard(element, '#element__card', openPopupImage);
  sectionCard.prepend(card)
};

initialCards.forEach((elements) => {
  renderCard(elements)
})

//слушатель для сохранения результата
popupCard.addEventListener('submit', handleCardFormSubmit);

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

//слушатели (4 спринт)
editButton.addEventListener('click', openProfileForm);
profileForm.addEventListener('submit', handleProfileFormSubmit);

//открываем (4 спринт)
function openProfileForm() {
  openPopup(popupProfile);
  inputName.textContent = profileName.value;
  inputComment.textContent = profileJob.value;
  profileFormValidator._toggleButtonState()
};

//попап с изменением имени и описания (4 спринт)
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputComment.value;
  closeProfileForm(popupProfile);
};

//закрываем (4 спринт)
function closeProfileForm() {
  closePopup(popupProfile);
};


profileFormValidator.enableValidation();
cardFormValidator.enableValidation();


