import { initialCards } from "../utils/cards.js";
import { options, cardTemplate } from "../utils/options.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";
import './index.css'; // добавьте импорт главного файла стилей

const profileForm = document.forms['popup__form-profile'];
const cardForm = document.forms['popup__form-card'];
const avatarForm = document.forms['popup__form-profile']
const forms = document.querySelectorAll('.form');

let userID;


const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    'Content-Type': "application/json",
    authorization: '7a2f82a6-78fe-4f1a-86b7-9c43d46e789f'
  }
}

const api = new Api(apiConfig);

Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([data, resCard]) => {
    userID= data._id;
    userInfo.setUserInfo(data);
    userInfo.setUserAvatar(data);
    sectionCard.renderItems(resCard, data)
  })
  .catch((err) => console.log(err));

const popupImageOpen = new PopupWithImage('.popup_zoom');

popupImageOpen.setEventListeners();

//рисуем секцию с карточками
const sectionCard = new Section({
  renderer: (item, userId) => {
    sectionCard.addCard(createNewCard(item, userId))
  },
}, '.elements')

//создаем карточку 
const createNewCard = (data, user) => {
  const card = new Card({
   data: data,
   userId: user,
   cardTemplate: '#element__card',
    handleCardClick: () => {
      popupImageOpen.open(data)
    },

    handleCardDelete: (cardId, cardElement) => {
      popupDelete.open(cardId, cardElement)
    },

    handleCardLike: (cardId) => {
      api.likeCard(cardId)
        .then((res) => {
          card.renderLikeCard(res)
        })
        .catch((err) => console.log(err))
    },

    handleCardUnlike: (cardId) => {
      api.unlikeCard(cardId)
        .then((res) => {
          card.renderLikeCard(res)
        })
        .catch((err) => console.log(err))
    }
  });

  return card.generateCard()
};


const addButton = document.querySelector('.profile__add-button');

addButton.addEventListener('click', () => {
  popupAddCard.open();
  cardFormValidator.clearValidationForm();
});

const popupAddCard = new PopupWithForm('.popup_card', submitNewCard)

function submitNewCard(data) {
  popupAddCard.renderLoading(true)
  api.addNewCard(data)
    .then((newCard) => {
      sectionCard.addCard(createNewCard(newCard, userID));
      popupAddCard.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAddCard.renderLoading(false)
    })
}

popupAddCard.setEventListeners();


const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__comment',
  profileAvatarSelector: '.profile__avatar'
})



//редактируем профиль
const popupProfileOpen = new PopupWithForm('.popup_profile', submitNewInfo)
function submitNewInfo(data) {
  popupProfileOpen.renderLoading(true)
  api.editProfileInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupProfileOpen.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupProfileOpen.renderLoading(false);
    })
}

const editButton = document.querySelector('.profile__edit-button');

editButton.addEventListener('click', () => {
  popupProfileOpen.open();
  const { name, about } = userInfo.getUserInfo();
  profileForm.name.value = name;
  profileForm.about.value = about;
  profileFormValidator.clearValidationForm();
});

popupProfileOpen.setEventListeners();

//редактируем аватар 
const popupAvatar = new PopupWithForm('.popup_avatar', submitNewAvatar)

function submitNewAvatar(data) {
  popupAvatar.renderLoading(true)
  api.editProfileAvatar(data)
    .then((resUser) => {
      userInfo.setUserAvatar(resUser);
      popupAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAvatar.renderLoading(false);
    })
}

const editAvatarButton = document.querySelector('.profile__avatar-button');

editAvatarButton.addEventListener('click', () => {
  popupAvatar.open();
  popupAvararFormValidator.clearValidationForm();
})

popupAvatar.setEventListeners();

//подтверждаем удаление попап 
const popupDelete = new PopupWithConfirmation('.popup_delete', submitDeleteCard)
  function submitDeleteCard(id, card) {
    popupDelete.renderLoading(true);
    api.deleteCard(id)
      .then(() => {
        card.deleteCard();
        popupDelete.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupDelete.renderLoading(false)
      })
  }

popupDelete.setEventListeners();

const profileFormValidator = new FormValidator(options, profileForm);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(options, cardForm);
cardFormValidator.enableValidation();

const popupAvararFormValidator = new FormValidator(options, avatarForm);
popupAvararFormValidator.enableValidation();





