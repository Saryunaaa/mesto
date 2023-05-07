export const forms = document.querySelectorAll('.form');
export const profileForm = document.forms['popup__form-profile'];
export const cardForm = document.forms['popup__form-card'];
export const avatarForm = document.forms['popup__form-avatar'];
export let userId = null;

export const editAvatarButton = document.querySelector('.profile__avatar-button');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');

export const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    disabledButtonClass: 'popup__save_disabled',
    inputErrorClass: '.popup__input-error',
    inputSectionSelector: '.popup__section',
    inputErrorClassActive: 'popup__input-error_active',
  }


