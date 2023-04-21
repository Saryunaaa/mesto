import { initialCards } from "../utils/cards.js";
import { options } from "../utils/options.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import './index.css'; // добавьте импорт главного файла стилей

const profileForm = document.forms['popup__form-profile'];
const cardForm = document.forms['popup__form-card'];
const forms = document.querySelectorAll('.form');

const profileFormValidator = new FormValidator(options, profileForm);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(options, cardForm);
cardFormValidator.enableValidation();

const popupProfileOpen = new PopupWithForm('.popup_profile', submitNewUserData);
popupProfileOpen.setEventListeners();

const popupNewCard = new PopupWithForm('.popup_card', submitNewCard);
popupNewCard.setEventListeners();

const popupImageOpen = new PopupWithImage('.popup_zoom');
popupImageOpen.setEventListeners();


const createNewCard = (title, link, templateSelector, handleCardClick) => {
  const card = new Card(title, link, templateSelector, handleCardClick);
  return card.generateCard();
};

function renderInitialCard (element) {
  const card = createNewCard(element.title, element.link, '#element__card', handleCardClick);
  sectionCard.addItemAppend(card)
};

const sectionCard = new Section({
  data: initialCards,
  renderer: renderInitialCard,
}, '.elements');

sectionCard.renderItems(initialCards);

const addButton = document.querySelector('.profile__add-button');

addButton.addEventListener('click', () => {
  popupNewCard.open();
  cardFormValidator.clearValidationForm();
});

function submitNewCard(data) {
  const card = createNewCard(data.title, data.link, '#element__card', handleCardClick);
  sectionCard.addCard(card)
};

function handleCardClick(title, link) {
  popupImageOpen.open(title, link);
};


const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__comment'
})

const editButton = document.querySelector('.profile__edit-button');

editButton.addEventListener('click', () => {
  popupProfileOpen.open();
  const { name, job } = userInfo.getUserInfo();
  profileForm.name.value = name;
  profileForm.job.value = job;
  profileFormValidator.clearValidationForm();
});

function submitNewUserData(data) {
  userInfo.setUserInfo(data);
};
