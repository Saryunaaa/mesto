export default class FormValidator {
    constructor({inputSelector, submitButtonSelector, disabledButtonClass, inputErrorClass, inputSectionSelector, inputErrorClassActive}, formElement) {
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
        errorElement.textContent = '';
        errorElement.classList.remove(this._inputErrorClassActive, this._inputSectionSelector);
    };

     //сообщает ошибку 
     _showInputError = (errorElement, inputElement) => {
        errorElement.classList.add(this._inputErrorClassActive, this._inputSectionSelector);
        errorElement.textContent = inputElement.validationMessage;
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
        this._submitButton.removeAttribute('disabled');
    };

    _disableButton = () => {
        this._submitButton.classList.add(this._disabledButtonClass);
        this._submitButton.setAttribute('disabled', true);
    };

    _toggleButtonState = () => {
        const formIsValid = this._inputList.every(inputElement => inputElement.validity.valid);

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
                this._toggleButtonState(this._inputList, this._submitButton);
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();
        this._toggleButtonState();
    };

    clearValidationForm = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        })
    } ;
}
