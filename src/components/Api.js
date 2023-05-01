export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
        this._authorization = options.headers['authorization'];
    }

    _checkErrors(res) {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
    }

    getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._authorization
            }
        }).then(res => this._checkErrors(res))
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        }).then(res => this._checkErrors(res))
    }


    editProfileInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        }).then(res => this._checkErrors(res))
    }

    editProfileAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then(res => this._checkErrors(res))
    }

    addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.url,
            })
        }).then(res => this._checkErrors(res))
    }
x
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        }).then(res => this._checkErrors(res))
    }

    likeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        }).then(res => this._checkErrors(res))
    }

    unlikeCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            }
        }).then(res => this._checkErrors(res))
    }
}
