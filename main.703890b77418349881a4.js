(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",disabledButtonClass:"popup__save_disabled",inputErrorClass:".popup__input-error",inputSectionSelector:".popup__section",inputErrorClassActive:"popup__input-error_active"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e,n){return(e=i(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}document.querySelector("#element__card");var u=r((function t(e,n){var r=this,i=e.inputSelector,u=e.submitButtonSelector,a=e.disabledButtonClass,c=e.inputErrorClass,l=e.inputSectionSelector,s=e.inputErrorClassActive;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"_hideInputError",(function(t){t.textContent="",t.classList.remove(r._inputErrorClassActive,r._inputSectionSelector)})),o(this,"_showInputError",(function(t,e){t.classList.add(r._inputErrorClassActive,r._inputSectionSelector),t.textContent=e.validationMessage})),o(this,"_toggleInputState",(function(t){var e=t.closest(r._inputSectionSelector).querySelector(r._inputErrorClass);!0===t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),o(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),o(this,"_enableButton",(function(){r._submitButton.classList.remove(r._disabledButtonClass),r._submitButton.removeAttribute("disabled")})),o(this,"_disableButton",(function(){r._submitButton.classList.add(r._disabledButtonClass),r._submitButton.setAttribute("disabled",!0)})),o(this,"_toggleButtonState",(function(){r._inputList.every((function(t){return t.validity.valid}))?r._enableButton():r._disableButton()})),o(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._toggleInputState(t),r._toggleButtonState(r._inputList,r._submitButton)}))}))})),o(this,"enableValidation",(function(){r._setEventListeners(),r._toggleButtonState(r._inputList,r._submitButton)})),o(this,"clearValidationForm",(function(){r._toggleButtonState(),r._inputList.forEach((function(t){r._hideInputError(t)}))})),this._inputSelector=i,this._submitButtonSelector=u,this._disabledButtonClass=a,this._inputSectionSelector=l,this._inputErrorClass=c,this._inputErrorClassActive=s,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}));function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var l=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this.cardId=e._id,this.dataCard=e,this._userId=n,this._ownerId=e.owner._id,this._handleCardClick=o,this._handleCardDelete=i,this._handleCardLike=u,this._handleCardUnlike=a,this._templateSelector=r}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this.cardElement=this._getTemplate(),this._elementImage=this.cardElement.querySelector(".element__image"),this._elementDelete=this.cardElement.querySelector(".element__delete"),this._elementlike=this.cardElement.querySelector(".element__like"),this._elementName=this.cardElement.querySelector("element__name"),this._elementLikeCounter=this.cardElement.querySelector("element__likes"),this._elementImage.alt=this._name,this._elementImage.src=this._link,this._elementName.textContent=this._name,this._ownerId!==this._userId&&this._elementDelete.remove(),this.renderLikeCard(this.dataCard),this._setEventListeners(),this.cardElement}},{key:"isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"toggleLike",value:function(){this.isLiked()?this._handleCardUnlike(this.dataCard):this._handleCardLike(this.dataCard)}},{key:"renderLikeCard",value:function(t){this._likes=t.likes,0===this._likes.length?this._elementLikeCounter.textContent="0":this._elementLikeCounter.textContent=this._likes.length,this.isLiked()?this._elementlike.classList.add("element__like_action"):this._elementlike.classList.remove("element__like_action")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._elementlike.addEventListener("click",(function(){t.toggleLike()})),this._elementDelete.addEventListener("click",(function(){t._handleCardDelete(t,t.cardId)})),this._elementImage.addEventListener("click",(function(){t._handleCardClick()}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var h=function(){function t(e){var n=this,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"addItemAppend",(function(t){n._container.append(t)})),p(this,"addCard",(function(t){n._container.prepend(t)})),this._renderer=r,this._container=document.querySelector(".element")}var e,n;return e=t,(n=[{key:"renderItems",value:function(t,e){var n=this;t.forEach((function(t){n._renderer(t,e)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=document.querySelector(e),this._popupCloseButton=this._popupSelector.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(){return t.close()})),this._popupSelector.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close(e.currentTarget)}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._form=n._popupSelector.querySelector(".popup__form"),n._popupInputs=n._popupSelector.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelector(".popup__save"),n}return e=u,(n=[{key:"close",value:function(){S(w(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._popupInputs.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var t=this;S(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues()),t.close()}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPhoto=e._popupSelector.querySelector(".popup__photo"),e._popupPhotoDescription=e._popupSelector.querySelector(".popup__description"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupPhoto.src=e,this._popupPhoto.alt=t,this._popupPhotoDescription.textContent=t,j(O(u.prototype),"open",this).call(this)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,q(r.key),r)}}function B(t,e,n){return e&&I(t.prototype,e),n&&I(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function A(t,e,n){return(e=q(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===T(e)?e:String(e)}var R=B((function t(e){var n=this,r=e.profileNameSelector,o=e.profileJobSelector,i=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,"getUserInfo",(function(){return{name:n._profileName.textContent,about:n._profileJob.textContent}})),A(this,"setUserInfo",(function(t){var e=t.name,r=t.about;n._profileName.textContent=e,n._profileJob.textContent=r})),A(this,"setUserAvatar",(function(t){n._profileAvatar.scr=t.avatar})),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(o),this._profileAvatar=document.querySelector(i)}));function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=r,n._submitButton=n._popupSelector.querySelector(".popup__save"),n}return e=u,(n=[{key:"open",value:function(t,e){this.id=e,this.card=t,D(U(u.prototype),"open",this).call(this)}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var t=this;this._submitButton.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t.id,t.card)})),D(U(u.prototype),"setEventListeners",this).call(this)}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,M(r.key),r)}}function M(t){var e=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===J(e)?e:String(e)}var H=function(){function t(e){var n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=void 0,(r=M(r="x"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._url=e.url,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkErrors",value:function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))}},{key:"getProfileInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return t._checkErrors(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkErrors(e)}))}},{key:"editProfileInfo",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkErrors(t)}))}},{key:"editProfileAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._checkErrors(t)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.url})}).then((function(t){return e._checkErrors(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._checkErrors(t)}))}},{key:"likeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._checkErrors(t)}))}},{key:"unlikeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._checkErrors(t)}))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var $,K=document.forms["popup__form-profile"],Q=document.forms["popup__form-card"],W=document.forms["popup__form-profile"],X=(document.querySelectorAll(".form"),new H({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{"Content-Type":"application/json",authorization:"7a2f82a6-78fe-4f1a-86b7-9c43d46e789f"}}));Promise.all([X.getProfileInfo(),X.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$=o._id,nt.setUserInfo(o),nt.setUserAvatar(o),Z.renderItems(i,o)})).catch((function(t){return console.log(t)}));var Y=new L(".popup_zoom");Y.setEventListeners();var Z=new h({renderer:function(t,e){Z.addCard(tt(t,e))}},".elements"),tt=function(t,e){var n=new l({data:t,userId:e,cardTemplate:"#element__card",handleCardClick:function(){Y.open(t)},handleCardDelete:function(t,e){it.open(t,e)},handleCardLike:function(t){X.likeCard(t).then((function(t){n.renderLikeCard(t)})).catch((function(t){return console.log(t)}))},handleCardUnlike:function(t){X.unlikeCard(t).then((function(t){n.renderLikeCard(t)})).catch((function(t){return console.log(t)}))}});return n.generateCard()};document.querySelector(".profile__add-button").addEventListener("click",(function(){et.open(),at.clearValidationForm()}));var et=new k(".popup_card",(function(t){et.renderLoading(!0),X.addNewCard(t).then((function(t){Z.addCard(tt(t,$)),et.close()})).catch((function(t){return console.log(t)})).finally((function(){et.renderLoading(!1)}))}));et.setEventListeners();var nt=new R({profileNameSelector:".profile__name",profileJobSelector:".profile__comment",profileAvatarSelector:".profile__avatar"}),rt=new k(".popup_profile",(function(t){rt.renderLoading(!0),X.editProfileInfo(t).then((function(t){nt.setUserInfo(t),rt.close()})).catch((function(t){return console.log(t)})).finally((function(){rt.renderLoading(!1)}))}));document.querySelector(".profile__edit-button").addEventListener("click",(function(){rt.open();var t=nt.getUserInfo(),e=t.name,n=t.about;K.name.value=e,K.about.value=n,ut.clearValidationForm()})),rt.setEventListeners();var ot=new k(".popup_avatar",(function(t){ot.renderLoading(!0),X.editProfileAvatar(t).then((function(t){nt.setUserAvatar(t),ot.close()})).catch((function(t){return console.log(t)})).finally((function(){ot.renderLoading(!1)}))}));document.querySelector(".profile__avatar-button").addEventListener("click",(function(){ot.open(),ct.clearValidationForm()})),ot.setEventListeners();var it=new V(".popup_delete",(function(t,e){it.renderLoading(!0),X.deleteCard(t).then((function(){e.deleteCard(),it.close()})).catch((function(t){return console.log(t)})).finally((function(){it.renderLoading(!1)}))}));it.setEventListeners();var ut=new u(t,K);ut.enableValidation();var at=new u(t,Q);at.enableValidation();var ct=new u(t,W);ct.enableValidation()})();