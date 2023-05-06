(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",disabledButtonClass:"popup__save_disabled",inputErrorClass:".popup__input-error",inputSectionSelector:".popup__section",inputErrorClassActive:"popup__input-error_active"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e,n){return(e=i(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}document.querySelector("#element__card");var u=r((function t(e,n){var r=this,i=e.inputSelector,u=e.submitButtonSelector,a=e.disabledButtonClass,l=e.inputErrorClass,c=e.inputSectionSelector,s=e.inputErrorClassActive;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"_hideInputError",(function(t){t.textContent="",t.classList.remove(r._inputErrorClassActive,r._inputSectionSelector)})),o(this,"_showInputError",(function(t,e){t.classList.add(r._inputErrorClassActive,r._inputSectionSelector),t.textContent=e.validationMessage})),o(this,"_toggleInputState",(function(t){var e=t.closest(r._inputSectionSelector).querySelector(r._inputErrorClass);!0===t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),o(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),o(this,"_enableButton",(function(){r._submitButton.classList.remove(r._disabledButtonClass),r._submitButton.removeAttribute("disabled")})),o(this,"_disableButton",(function(){r._submitButton.classList.add(r._disabledButtonClass),r._submitButton.setAttribute("disabled",!0)})),o(this,"_toggleButtonState",(function(){r._inputList.every((function(t){return t.validity.valid}))?r._enableButton():r._disableButton()})),o(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._toggleInputState(t),r._toggleButtonState(r._inputList,r._submitButton)}))}))})),o(this,"enableValidation",(function(){r._setEventListeners(),r._toggleButtonState(r._inputList,r._submitButton)})),o(this,"clearValidationForm",(function(){r._toggleButtonState(),r._inputList.forEach((function(t){r._hideInputError(t)}))})),this._inputSelector=i,this._submitButtonSelector=u,this._disabledButtonClass=a,this._inputSectionSelector=c,this._inputErrorClass=l,this._inputErrorClassActive=s,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}));function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.name,this._link=e.link,this._likes=e.likes,this.cardId=e._id,this.dataCard=e,this._userId=n,this._ownerId=e.owner._id,this._handleCardClick=o,this._handleCardDelete=i,this._handleCardLike=u,this._templateSelector=r}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementDelete=this._element.querySelector(".element__delete"),this._elementlike=this._element.querySelector(".element__like"),this._elementName=this._element.querySelector(".element__name"),this._elementLikeCounter=this._element.querySelector(".element__likes"),this._elementName.textContent=this._title,this._elementImage.alt=this._title,this._elementImage.src=this._link,this._likes.some((function(e){return e._id===t._userId}))?(this._isLiked=!0,this._elementlike.classList.add("element__like_action")):(this._isLiked=!1,this._elementlike.classList.remove("element__like_action")),this._elementLikeCounter.textContent=this._likes.length,this._ownerId!==this._userId&&this._elementDelete.remove(),this._setEventListeners(),this._element}},{key:"likeCards",value:function(t){this._elementLikeCounter.textContent=t.likes.length,this._elementlike.classList.add("element__like_action"),this._isLiked=!0}},{key:"unlikeCards",value:function(t){this._elementLikeCounter.textContent=t.likes.length,this._elementlike.classList.remove("element__like_action"),this._isLiked=!1}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._elementlike.addEventListener("click",(function(){t._handleCardLike(t,t.cardId,t._isLiked)})),this._elementDelete.addEventListener("click",(function(){t._handleCardDelete(t,t.cardId)})),this._elementImage.addEventListener("click",(function(){t._handleCardClick(t._title,t._link)}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var h=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"addItemAppend",(function(t){r._container.append(t)})),p(this,"addCard",(function(t){r._container.prepend(t)})),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close(e.currentTarget)}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._form=n._popup.querySelector(".popup__form"),n._popupInputs=n._form.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelector(".popup__save"),n}return e=u,(n=[{key:"close",value:function(){S(w(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._popupInputs.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var t=this;S(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues())}))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPhoto=e._popup.querySelector(".popup__photo"),e._popupPhotoDescription=e._popup.querySelector(".popup__description"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupPhoto.src=e,this._popupPhoto.alt=t,this._popupPhotoDescription.textContent=t,j(O(u.prototype),"open",this).call(this)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,q(r.key),r)}}function A(t,e,n){return e&&T(t.prototype,e),n&&T(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function B(t,e,n){return(e=q(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q(t){var e=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===I(e)?e:String(e)}var R=A((function t(e){var n=this,r=e.profileNameSelector,o=e.profileJobSelector,i=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),B(this,"getUserInfo",(function(){return{name:n._profileName.textContent,about:n._profileJob.textContent}})),B(this,"setUserInfo",(function(t){var e=t.name,r=t.about;n._profileName.textContent=e,n._profileJob.textContent=r})),B(this,"setUserAvatar",(function(t){n._profileAvatar.src=t.avatar})),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(o),this._profileAvatar=document.querySelector(i)}));function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=r,n._submitButton=n._popup.querySelector(".popup__save"),n}return e=u,(n=[{key:"open",value:function(t,e){this.id=e,this.card=t,D(V(u.prototype),"open",this).call(this)}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var t=this;this._submitButton.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t.cardId,t.card)})),D(V(u.prototype),"setEventListeners",this).call(this)}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkErrors",value:function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))}},{key:"getProfileInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return t._checkErrors(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then((function(e){return t._checkErrors}))}},{key:"editProfileInfo",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkErrors(t)}))}},{key:"editProfileAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._checkErrors(t)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.title,link:t.link})}).then((function(t){return e._checkErrors(t)}))}},{key:"deleteCardApi",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._checkErrors(t)}))}},{key:"likeCardApi",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._checkErrors(t)}))}},{key:"unlikeCardApi",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._checkErrors(t)}))}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}document.querySelectorAll(".form");var G=document.forms["popup__form-profile"],$=document.forms["popup__form-card"],K=document.forms["popup__form-profile"],Q=null,W=new k(".popup_card",(function(t){W.renderLoading(!0),nt.addNewCard(t).then((function(t){var e=et(t,Q,"#element__card",ut,it,at);W.close(),ot.addItemAppend(e)})).catch((function(t){return console.log(t)})).finally((function(){W.renderLoading(!1)}))})),X=new k(".popup_profile",(function(t){X.renderLoading(!0),nt.editProfileInfo(t).then((function(t){rt.setUserInfo(t),X.close()})).catch((function(t){return console.log(t)})).finally((function(){X.renderLoading(!1)}))})),Y=new k(".popup_avatar",(function(t){Y.renderLoading(!0),nt.editProfileAvatar(t).then((function(t){rt.setUserAvatar(t),Y.close()})).catch((function(t){return console.log(t)})).finally((function(){Y.renderLoading(!1)}))})),Z=new U(".popup_delete",(function(t,e){Z.renderLoading(!0),nt.deleteCardApi(t).then((function(){e.deleteCardApi(),Z.close()})).catch((function(t){return console.log(t)})).finally((function(){Z.renderLoading(!1)}))})),tt=new L(".popup_zoom"),et=function(t,e,n,r,o,i){return new c(t,e,n,r,o,i).generateCard()},nt=new M({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"7a2f82a6-78fe-4f1a-86b7-9c43d46e789f","Content-Type":"application/json"}}),rt=new R({profileNameSelector:".profile__name",profileJobSelector:".profile__comment",profileAvatarSelector:".profile__avatar"});Promise.all([nt.getProfileInfo(),nt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=o._id,rt.setUserInfo(o),rt.setUserAvatar(o),ot.renderItems(i,o)})).catch((function(t){return console.log(t)}));var ot=new h((function(t){var e=et(t,Q,"#element__card",ut,it,at);ot.addItemAppend(e)}),".elements");function it(t,e){Z.open(t,e)}function ut(t,e){tt.open(t,e)}function at(t,e,n){n?nt.unlikeCardApi(e).then((function(e){return t.unlikeCards(e)})).catch((function(t){return console.log(t)})):nt.likeCardApi(e).then((function(e){return t.likeCards(e)})).catch((function(t){return console.log(t)}))}document.querySelector(".profile__add-button").addEventListener("click",(function(){W.open(),ct.clearValidationForm()})),W.setEventListeners(),tt.setEventListeners(),document.querySelector(".profile__edit-button").addEventListener("click",(function(){X.open();var t=rt.getUserInfo(),e=t.name,n=t.about;G.name.value=e,G.about.value=n,lt.clearValidationForm()})),X.setEventListeners(),document.querySelector(".profile__avatar-button").addEventListener("click",(function(){Y.open(),st.clearValidationForm()})),Y.setEventListeners(),Z.setEventListeners();var lt=new u(t,G);lt.enableValidation();var ct=new u(t,$);ct.enableValidation();var st=new u(t,K);st.enableValidation()})();