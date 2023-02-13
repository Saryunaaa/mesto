const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');

const closeButton = popup.querySelector('.popup__close');

const profileName = document.querySelector('.profile__name');
const profileComment = document.querySelector('.profile__comment');

const inputName = popup.querySelector('.popup__name');
const inputComment = popup.querySelector('.popup__comment');

const saveButton = popup.querySelector('.popup__save');

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileComment.textContent = inputComment.value;
    popup.classList.remove('popup__opened')
};


const toggleOpenPopup = () => {
    popup.classList.toggle('popup__opened');
};

const handleEditButtonClick = () => {
    toggleOpenPopup();
};

const handleCloseButtonClick = () => {
    toggleOpenPopup();
};

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
saveButton.addEventListener('click', handleFormSubmit);


