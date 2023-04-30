export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector)
    }
    
    getUserInfo = () => {
        return {
            name: this._profileName.textContent,
            about: this._profileJob.textContent,
        }
    }

    setUserInfo = ({name, about}) => {
        this._profileName.textContent = name;
        this._profileJob.textContent = about;
    }

    setUserAvatar = (url) => {
        this._profileAvatar.scr = url.avatar
    }
}