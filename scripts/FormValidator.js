export default class FormValidator {
    constructor({formSelector, inputSelector, submitButtonSelector, disabledButtonClass, inputErrorClass, inputSectionSelector, inputErrorClassActive}, formElement) {
        this._formSelector = formSelector;
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._disabledButtonClass = disabledButtonClass;
        this._inputSectionSelector = inputSectionSelector;
        this._inputErrorClass = inputErrorClass;
        this._inputErrorClassActive = inputErrorClassActive;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }

    //удаляет классы с ошибкой
    _hideInputError = (errorElement) => {
        errorElement.innerText = '';
        errorElement.classList.remove(this._inputErrorClassActive);
    };

     //сообщает ошибку 
     _showInputError = (errorElement, message) => {
        errorElement.classList.add(this._inputErrorClassActive);
        errorElement.innerText = message;
    };

    _toggleInputState = (inputElement) => {
        const inputSectionElement = inputElement.closest(this._inputSectionSelector);
        const errorElement = inputSectionElement.querySelector(this._inputErrorClass);
        if (inputElement.validity.valid === true) {
          this._hideInputError(errorElement, inputElement);
        } else {
          this._showInputError(errorElement, inputElement, inputElement.validationMessage);
        }
      };

   /* _checkInputValidity = (inputElement) => {
        if (inputElement.validity.valid === true) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement, inputElement.validationMessage);
        }
    }; */

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _enableButton = () => {
        this._submitButton.classList.remove(this._disabledButtonClass);
        this._submitButton.disabled = false;
    };

    _disableButton = () => {
        this._submitButton.classList.add(this._disabledButtonClass);
        this._submitButton.disabled = true;
    };

    _toggleButtonState = () => {
        const formIsValid =this._inputList.every(inputElement => inputElement.validity.valid);

        if (formIsValid) {
            this._enableButton();
        } else {
            this._disableButton();
        }
    };

    _setEventListeners = () => {
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._toggleInputState(inputElement);
                this._toggleButtonState(this._inputList, this._submitButton, this._disabledButtonClass);
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners()
        this._toggleButtonState(this._inputList, this._submitButton, this._disabledButtonClass);
    };

}
