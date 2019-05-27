let application;

document.addEventListener('DOMContentLoaded', () => {
  application = new Application();
  application.switchLoggedInState();
  for (const button of application.navButtons) {
    button.addEventListener('click', application.navButtonClicked);
  }
  application.addFormSubmitListener('sign-up');
  application.addFormSubmitListener('log-in');
  application.addFormSubmitListener('settings');
});

function Application() {
  this.isLoggedIn = false;
  this.userData;
  this.messagesHandling = new MessagesHandling(this);
  this.storage = new Storage();
  // this.remoteStorage = new RemoteStorage();
  this.usersHandling = new UsersHandling(this);
  this.dashboardHandling = new DashboardHandling(this);
  this.listHandling = new ListHandling(this);

  this.users = this.usersHandling.readAllUsers();

  this.logInEmailInput = document.getElementById('log-in-email-input');
  this.logInPasswordInput = document.getElementById('log-in-password-input');

  this.head = new Head();

  this.navButtons = [
    document.getElementById('sign-up-button'), // 0
    document.getElementById('log-in-button'), // 1
    document.getElementById('settings-button'), // 2
    document.getElementById('log-out-button'), // 3
    document.getElementById('sign-up-submit-button'), // 4
    document.getElementById('sign-up-cancel-button'), // 5
    document.getElementById('log-in-submit-button'), // 6
    document.getElementById('log-in-cancel-button'), // 7
    document.getElementById('settings-submit-button'), // 8
    document.getElementById('settings-cancel-button'), // 9
    document.getElementById('settings-delete-button'), // 10
    document.getElementById('home-button'), // 11
  ];

  this.sections = [
    document.getElementById('start-page-section'), // 0
    document.getElementById('sign-up-section'), // 1
    document.getElementById('log-in-section'), // 2
    document.getElementById('dashboard-section'), // 3
    document.getElementById('list-section'), // 4
    document.getElementById('settings-section'), // 5
  ];

  this.routes = new Map([
    [this.navButtons[0], this.sections[1]],
    [this.navButtons[1], this.sections[2]],
    [this.navButtons[2], this.sections[5]],
    [this.navButtons[3], this.sections[0]],
    [this.navButtons[4], this.sections[3]],
    [this.navButtons[5], this.sections[0]],
    [this.navButtons[6], this.sections[3]],
    [this.navButtons[7], this.sections[0]],
    [this.navButtons[8], this.sections[3]],
    [this.navButtons[9], this.sections[3]],
    [this.navButtons[10], this.sections[0]],
  ]);

  this.goByRoute = (buttonId) => {
    this.concealAllSections();
    if (buttonId === 'home-button') {
      if (this.isLoggedIn) {
        this.listHandling.discardChangesAndQuit();
      } else {
        this.sections[0].classList.remove('concealed');
      }
      return;
    }
    const button = this.navButtons.find((item) => item.id === buttonId);
    this.routes.get(button).classList.remove('concealed');
  };

  this.switchLoggedInState = () => {
    if (this.isLoggedIn) {
      this.navButtons[0].classList.add('concealed');
      this.navButtons[1].classList.add('concealed');
      this.navButtons[2].classList.remove('concealed');
      this.navButtons[3].classList.remove('concealed');
      this.head.show(`${this.userData.firstName} ${this.userData.lastName}`);
    } else {
      this.navButtons[0].classList.remove('concealed');
      this.navButtons[1].classList.remove('concealed');
      this.navButtons[2].classList.add('concealed');
      this.navButtons[3].classList.add('concealed');
      this.head.show();
    }
  };

  this.navButtonClicked = (eventOrButtonId) => {
    const buttonId = typeof eventOrButtonId === 'string' ? eventOrButtonId : eventOrButtonId.currentTarget.id;
    switch (buttonId) {
      case 'log-in-button':
        this.showLogInError(false);
        this.goByRoute(buttonId);
        break;
      case 'sign-up-button':
        this.fillSignUp();
        this.goByRoute(buttonId);
        break;
      case 'sign-up-submit-button':
        if (this.submitSignUp()) {
          this.goByRoute(buttonId);
        }
        break;
      case 'log-in-submit-button':
        if (this.submitLogIn()) {
          this.goByRoute(buttonId);
        }
        break;
      case 'log-in-cancel-button':
        this.cancelLogIn();
        this.goByRoute(buttonId);
        break;
      case 'settings-button':
        this.fillSettings();
        this.goByRoute(buttonId);
        break;
      case 'log-out-button':
        this.usersHandling.doUserLogIn(false);
        this.goByRoute(buttonId);
        break;
      case 'settings-submit-button':
        if (this.submitSettings()) {
          this.goByRoute(buttonId);
        }
        break;
      case 'settings-delete-button':
        this.usersHandling.deleteLoggedInUser(buttonId);
        break;
      default:
        this.goByRoute(buttonId);
    }
  };

  this.concealAllSections = () => {
    for (const section of this.sections) {
      section.classList.add('concealed');
    }
  };

  this.fillSettings = () => {
    this.showSettingsError(false, 'settings-error');
    document.getElementById('settings-first-name-input').value = this.userData.firstName;
    document.getElementById('settings-last-name-input').value = this.userData.lastName;
    document.getElementById('settings-email-input').value = this.userData.email;
  };

  this.fillSignUp = () => {
    this.showSettingsError(false, 'sign-up-error');
    document.getElementById('sign-up-first-name-input').value = '';
    document.getElementById('sign-up-last-name-input').value = '';
    document.getElementById('sign-up-email-input').value = '';
    document.getElementById('sign-up-password-input').value = '';
  };

  this.submitSettings = () => {
    const emailInput = document.getElementById('settings-email-input');
    const passwordInput = document.getElementById('settings-password-input');
    const firstNameInput = document.getElementById('settings-first-name-input');
    const lastNameInput = document.getElementById('settings-last-name-input');
    if (!firstNameInput.checkValidity() || !lastNameInput.checkValidity() ||
        !passwordInput.checkValidity() || !emailInput.checkValidity()) {
      return false;
    }
    if (emailInput.value !== this.userData.email) {
      if (this.users.has(emailInput.value)) {
        this.showSettingsError(true, 'settings-error', emailInput.value);
        return false;
      }
      this.users.delete(this.userData.email);
    }
    this.userData.email = emailInput.value;
    this.userData.password = createHash(passwordInput.value);
    this.userData.firstName = firstNameInput.value;
    this.userData.lastName = lastNameInput.value;
    this.users.set(this.userData.email, {password: this.userData.password, id: this.userData.id});
    // this.remoteStorage.storeUserData(this.userData);
    this.storage.storeUserData(this.userData);
    return true;
  };

  this.submitSignUp = () => {
    const firstNameInput = document.getElementById('sign-up-first-name-input');
    const lastNameInput = document.getElementById('sign-up-last-name-input');
    const passwordInput = document.getElementById('sign-up-password-input');
    const emailInput = document.getElementById('sign-up-email-input');
    if (!firstNameInput.checkValidity() || !lastNameInput.checkValidity() ||
        !passwordInput.checkValidity() || !emailInput.checkValidity()) {
      return false;
    }
    if (this.users.has(emailInput.value)) {
      this.showSettingsError(true, 'sign-up-error', emailInput.value);
      return false;
    }
    const lastUserId = this.users.size === 0 ? 0 : Array.from(this.users)[this.users.size - 1][1].id;
    this.userData = new UserData(lastUserId + 1, emailInput.value, createHash(passwordInput.value),
        firstNameInput.value, lastNameInput.value);
    this.users.set(this.userData.email, {password: this.userData.password, id: this.userData.id});
    // this.remoteStorage.storeUserData(this.userData);
    this.storage.storeUserData(this.userData);
    this.usersHandling.doUserLogIn(true);
    return true;
  };

  this.submitLogIn = () => {
    if (!this.logInEmailInput.checkValidity() || !this.logInPasswordInput.checkValidity()) {
      return false;
    }
    const email = this.logInEmailInput.value;
    const password = createHash(this.logInPasswordInput.value);
    if (this.usersHandling.tryLogInUser(email, password)) {
      // this.remoteStorage.loadUserData(this.users.get(email).id);
      this.userData = JSON.parse(this.storage.loadUserData(this.users.get(email).id));
      this.usersHandling.doUserLogIn(true);

      setTimeout(() => {
        this.logInEmailInput.value = '';
        this.logInPasswordInput.value = '';
      }, 1);
      return true;
    }
    this.showLogInError(true);
    return false;
  };

  this.showLogInError = (isNeedShow) => {
    const element = document.getElementById('log-in-error');
    if (isNeedShow) {
      element.parentElement.classList.remove('concealed');
    } else {
      element.parentElement.classList.add('concealed');
    }
  };

  this.showSettingsError = (isNeedShow, elementId, email) => {
    const element = document.getElementById(elementId);
    if (isNeedShow) {
      element.textContent = `User with login "${email}" already exists!`;
      element.parentElement.classList.remove('concealed');
    } else {
      element.textContent = '';
      element.parentElement.classList.add('concealed');
    }
  };

  this.cancelLogIn = () => {
    setTimeout(() => {
      this.logInEmailInput.value = '';
      this.logInPasswordInput.value = '';
    }, 1);
  };

  this.addFormSubmitListener = (sectionPrefix) => {
    document.querySelector(`#${sectionPrefix}-section > form`).
        addEventListener('submit', () => application.navButtonClicked(`${sectionPrefix}-submit-button`));
  };
}
