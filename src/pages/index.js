import './index.css'; // добавьте импорт главного файла стилей
import {apiConfig, forms, profileForm, cardForm, avatarForm, editAvatarButton, editButton, addButton, options } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";


//экземпляры 
const popupAddCard = new PopupWithForm('.popup_card', submitNewCard);
const popupProfileOpen = new PopupWithForm('.popup_profile', submitNewInfo);
const popupAvatar = new PopupWithForm('.popup_avatar', submitNewAvatar);
const popupDelete = new PopupWithConfirmation('.popup_delete', submitDeleteCard);
const popupImageOpen = new PopupWithImage('.popup_zoom');
let userId = null;


const createNewCard = (data, userId, cardTemplate, handleCardClick, handleCardDelete, handleCardLike) => {
  const card = new Card(data, userId, cardTemplate, handleCardClick, handleCardDelete, handleCardLike);
  return card.generateCard()
}

const api = new Api(apiConfig);

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__comment',
  profileAvatarSelector: '.profile__avatar'
})


Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([resData, resCard]) => {
    userId = resData._id;
    userInfo.setUserInfo(resData);
    userInfo.setUserAvatar(resData);
    sectionCard.renderItems(resCard)
  })
  .catch((err) => console.log(err));


//рисуем секцию с карточками
function renderCard(data) {
  const card = createNewCard(data, userId, '#element__card', handleCardClick, handleCardDelete, handleCardLike);
  sectionCard.addItemAppend(card)
}
const sectionCard = new Section(renderCard, '.elements')

//добавим новую карточку
addButton.addEventListener('click', () => {
  popupAddCard.open();
  cardFormValidator.clearValidationForm();
});

function submitNewCard(data) {
  popupAddCard.renderLoading(true)
  api.addNewCard(data)
    .then((res) => {
      const newCard = createNewCard(res, userId, '#element__card', handleCardClick, handleCardDelete, handleCardLike);
      popupAddCard.close();
      sectionCard.addCard(newCard);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAddCard.renderLoading(false)
    })
}

popupAddCard.setEventListeners();
popupImageOpen.setEventListeners();


//редактируем профиль
editButton.addEventListener('click', () => {
  popupProfileOpen.open();
  const { name, about } = userInfo.getUserInfo();
  profileForm.name.value = name;
  profileForm.about.value = about;
  profileFormValidator.clearValidationForm();
});

function submitNewInfo(inputNewData) {
  popupProfileOpen.renderLoading(true)
  api.editProfileInfo(inputNewData)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupProfileOpen.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupProfileOpen.renderLoading(false);
    })
}

popupProfileOpen.setEventListeners();


//редактируем аватар 
editAvatarButton.addEventListener('click', () => {
  popupAvatar.open();
  popupAvararFormValidator.clearValidationForm();
})


function submitNewAvatar(inputNewData) {
  popupAvatar.renderLoading(true)
  api.editProfileAvatar(inputNewData)
    .then((res) => {
      userInfo.setUserAvatar(res);
      popupAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAvatar.renderLoading(false);
    })
}

popupAvatar.setEventListeners();


//подтверждаем удаление попап 
function handleCardDelete(cardId, card) {
  popupDelete.open(cardId, card)
}

function submitDeleteCard(cardId, card) {
  popupDelete.renderLoading(true);
  api.deleteCardApi(cardId)
    .then(() => {
      card.deleteCard();
      popupDelete.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupDelete.renderLoading(false)
    })
};

popupDelete.setEventListeners();

function handleCardClick(title, link) {
  popupImageOpen.open(title, link)
};


function handleCardLike(card, cardId, isLiked) {
  if (isLiked) {
    api.unlikeCardApi(cardId)
      .then(res => card.unlikeCards(res))
      .catch(err => console.log(err))
  } else {
    api.likeCardApi(cardId)
      .then(res => card.likeCards(res))
      .catch(err => console.log(err))
  }
}

//валидация
const profileFormValidator = new FormValidator(options, profileForm);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(options, cardForm);
cardFormValidator.enableValidation();

const popupAvararFormValidator = new FormValidator(options, avatarForm);
popupAvararFormValidator.enableValidation();
