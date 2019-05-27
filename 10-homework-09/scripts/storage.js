/* **
 * Internal storage
** */

/* eslint-disable no-unused-vars */
function Storage() {
  this.storage = window['localStorage'];
  this.keyPrefix = 'tdl-user-';

  this.loadUserLogins = () => {
    const userLogins = new Map();
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key) && key.indexOf(this.keyPrefix) >= 0) {
        const userData = JSON.parse(localStorage.getItem(key));
        userLogins.set(userData.email, {password: userData.password, id: userData.id});
      }
    }
    return userLogins;
  };

  this.loadUserData = (id) => {
    return this.storage.getItem(this.getKeyById(id));
  };

  this.storeUserData = (userData) => {
    this.storage.setItem(this.getKeyById(userData.id), JSON.stringify(userData));
  };

  this.deleteUserData = (userData) => {
    this.storage.removeItem(this.getKeyById(userData.id));
  };

  this.getKeyById = (id) => {
    return `${this.keyPrefix}${id.toString().padStart(5, '0')}`;
  };
}
