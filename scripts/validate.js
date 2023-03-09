//6 спринт

const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach(form => {
    setEventListeners(form, options);
  });
};

const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  const inputSectionElement = inputElement.closest(options.inputSectionSelector);
  const errorElement = inputSectionElement.querySelector(options.inputErrorClass);
  if (isValid) {
    hideInputError(errorElement, options.inputErrorClassActive);
  } else {
    showInputError(errorElement, inputElement.validationMessage, options.inputErrorClassActive);
  }
};


const hideInputError = (errorElement, inputErrorClassActive) => {
    errorElement.innerText = '';
    errorElement.classList.remove(inputErrorClassActive);
  };
  
  const showInputError = (errorElement, message, inputErrorClassActive) => {
    errorElement.innerText = message;
    errorElement.classList.add(inputErrorClassActive);
  };
  
  const enableButton = (buttonSubmitElement, disabledButtonClass) => {
    buttonSubmitElement.removeAttribute('disabled');
    buttonSubmitElement.classList.remove(disabledButtonClass);
  };
  
  const disableButton = (buttonSubmitElement, disabledButtonClass) => {
    buttonSubmitElement.setAttribute('disabled', true);
    buttonSubmitElement.classList.add(disabledButtonClass);
  };
  
  const toggleButtonState = (inputs, buttonSubmitElement, disabledButtonClass) => {
    const formIsValid = inputs.every(inputElement => inputElement.validity.valid);
  
    if (formIsValid) {
      enableButton(buttonSubmitElement, disabledButtonClass);
    } else {
      disableButton(buttonSubmitElement, disabledButtonClass);
    }
  };
  
  const setEventListeners = (form, options) => {
    const buttonSubmitElement = form.querySelector(options.submitButtonSelector);
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));
  
    inputs.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        toggleInputState(inputElement, options);
        toggleButtonState(inputs, buttonSubmitElement, options.disabledButtonClass);
      });
    });
    toggleButtonState(inputs, buttonSubmitElement, options.disabledButtonClass);
  };
