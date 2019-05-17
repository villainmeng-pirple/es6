/* **
 * Remote storage
** */

/* eslint-disable no-unused-vars */
function RemoteStorage() {
  this.url = 'http://10.100.6.66/todowebapi/api/data';

  this.loadUserLogins = () => {
    const userLogins = new Map();

    const request = new XMLHttpRequest();
    request.open('GET', this.url, false);
    request.send();
    for (login of JSON.parse(request.response)) {
      userLogins.set(login.email, {password: login.password, id: login.id});
    }

    return userLogins;
  };

  this.loadUserData = (id) => {
    const request = new XMLHttpRequest();
    request.open('GET', `${this.url}/${id}`, false);
    request.send();

    return request.response;
  };

  this.storeUserData = (userData) => {
    const request = new XMLHttpRequest();
    request.open('POST', this.url, false);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(userData));
  };

  this.deleteUserData = (userData) => {
    const request = new XMLHttpRequest();
    request.open('DELETE', `${this.url}/${userData.id}`, false);
    request.send();
  };
}
