const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');

const closeButton = popup.querySelector('.popup__close');

const profileName = document.querySelector('.profile__name');
const profileComment = document.querySelector('.profile__comment');

const inputName = popup.querySelector('.popup__input_type_name');
const inputComment = popup.querySelector('.popup__input_type_comment');

const popupForm = popup.querySelector('.popup__form_name');

function handleFormSubmit (evt) {
    evt.preventDefault();
    openForm ();
    closeForm ();
};

function openForm () {
    profileName.textContent = inputName.value;
    profileComment.textContent = inputComment.value;
    popup.classList.add('popup_opened');
};

function closeForm () {
    popup.classList.remove('popup_opened')
};

editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
popupForm.addEventListener('submit', handleFormSubmit);


