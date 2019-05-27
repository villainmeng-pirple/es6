/* **
 * Users manipulations
** */

/* eslint-disable no-unused-vars */
function UsersHandling(application) {
  this.application = application;

  this.readAllUsers = () => {
    // this.application.remoteStorage.loadUserLogins();
    return this.application.storage.loadUserLogins();
  };

  this.doUserLogIn = (isLogIn) => {
    this.application.isLoggedIn = isLogIn;
    this.application.switchLoggedInState();
    this.application.dashboardHandling.updateLists();
  };

  this.tryLogInUser = (email, password) => {
    const user = this.application.users.get(email);
    return typeof user !== 'undefined' && user.password === password;
  };

  this.deleteLoggedInUser = (buttonId) => {
    this.application.messagesHandling.processIfConfirmed('All your data will be lost!',
        'Are you really want to delete your account?', this.doDelete, buttonId);
  };

  this.doDelete = (buttonId) => {
    this.application.users.delete(this.application.userData.email);
    // this.application.remoteStorage.deleteUserData(this.application.userData);
    this.application.storage.deleteUserData(this.application.userData);
    this.application.isLoggedIn = false;
    this.application.switchLoggedInState();
    this.application.goByRoute(buttonId);
  };
}
