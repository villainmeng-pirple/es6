/* **
 * List manipulations
** */

/* eslint-disable no-unused-vars */
function ListHandling(application) {
  this.application = application;
  this.listIndex;
  this.rootElement = document.getElementById('list-items');
  this.titleInputElement = document.getElementById('list-title-input');
  this.textInputElement = document.getElementById('item-text-input');

  this.initialize = (listIndex) => {
    this.listIndex = listIndex;
    this.showListTitleError(false);
    this.showItemTextError(false);
    this.textInputElement.value = '';

    const listTitle = this.application.userData.lists[this.listIndex].title;
    if (typeof listTitle === 'undefined') {
      this.titleInputElement.value = '';
      this.titleInputElement.focus();
    } else {
      this.titleInputElement.value = listTitle;
      this.textInputElement.focus();
    }

    for (const listElement of this.rootElement.querySelectorAll('li')) {
      this.rootElement.removeChild(listElement);
    }
    for (let i = 0; i < this.application.userData.lists[this.listIndex].items.length; i++) {
      this.drawItem(i, this.application.userData.lists[this.listIndex].items[i]);
    }
  };

  this.drawItem = (id, item) => {
    const itemElement = this.rootElement.appendChild(document.createElement('li'));
    itemElement.id = `item-${id}`;
    itemElement.classList.add('list-item', 'columns', 'is-mobile');

    const textElement = itemElement.appendChild(document.createElement('span'));
    textElement.classList.add('column');
    textElement.appendChild(document.createTextNode(item.text));
    if (item.isDone) {
      textElement.classList.add('list-item-done');
    }

    const buttonDoneElement = itemElement.appendChild(document.createElement('a'));
    buttonDoneElement.classList.add('icon', 'is-medium',
        item.isDone ? 'has-text-warning' : 'has-text-success', 'list-item-done-button', 'column', 'is-1');
    buttonDoneElement.addEventListener('click', this.itemDoneClicked);
    const iconDoneElement = buttonDoneElement.appendChild(document.createElement('i'));
    iconDoneElement.classList.add('fa', item.isDone ? 'fa-undo' : 'fa-check-circle', 'fa-2x');

    const buttonDeleteElement = itemElement.appendChild(document.createElement('a'));
    buttonDeleteElement.classList.add('icon', 'is-medium', 'has-text-danger', 'list-item-delete-button',
        'column', 'is-1');
    buttonDeleteElement.addEventListener('click', this.itemDeleteClicked);
    const iconDeleteElement = buttonDeleteElement.appendChild(document.createElement('i'));
    iconDeleteElement.classList.add('fa', 'fa-trash-alt', 'fa-2x');
  };

  this.itemDoneClicked = (e) => {
    this.showListTitleError(false);
    this.showItemTextError(false);

    e.stopPropagation();
    const element = e.currentTarget;
    const item = this.application.userData.lists[this.listIndex].items[Number(element.parentNode.id.substring(5))];
    item.isDone = !item.isDone;
    element.previousSibling.classList.toggle('list-item-done');
    element.classList.remove(item.isDone ? 'has-text-success' : 'has-text-warning');
    element.classList.add(item.isDone ? 'has-text-warning' : 'has-text-success');
    element.firstElementChild.classList.remove(item.isDone ? 'fa-check-circle' : 'fa-undo');
    element.firstElementChild.classList.add(item.isDone ? 'fa-undo' : 'fa-check-circle');
  };

  this.itemDeleteClicked = (e) => {
    this.showListTitleError(false);
    this.showItemTextError(false);

    e.stopPropagation();
    this.application.messagesHandling.processIfConfirmed('This task will be deleted!',
        'Are you really want to delete this task?', this.doDelete, e.currentTarget.parentNode);
  };

  this.doDelete = (elementToDelete) => {
    this.application.userData.lists[this.listIndex].items.splice(Number(elementToDelete.id.substring(5)), 1);
    this.rootElement.removeChild(elementToDelete);
  };

  this.goToDashboard = () => {
    this.application.concealAllSections();
    this.application.dashboardHandling.updateLists();
    this.application.sections[3].classList.remove('concealed');
  };

  this.listSaveClicked = () => {
    if (!this.titleInputElement.checkValidity()) {
      return;
    }
    const title = this.titleInputElement.value;
    if (this.application.userData.lists.find((list) => {
      return list.title === title && list !== this.application.userData.lists[this.listIndex];
    })) {
      this.showListTitleError(true);
      this.titleInputElement.focus();
      return;
    } else {
      this.showListTitleError(false);
    }
    this.application.userData.lists[this.listIndex].title = title;
    this.application.storage.storeUserData(this.application.userData);
    this.goToDashboard();
  };

  this.discardChangesAndQuit = () => {
    this.application.userData = JSON.parse(this.application.storage.loadUserData(this.application.userData.id));
    this.goToDashboard();
  };

  this.listCancelClicked = () => {
    this.discardChangesAndQuit();
  };

  this.itemAddClicked = (e) => {
    if (!this.textInputElement.checkValidity()) {
      return;
    }
    const text = this.textInputElement.value;
    if (this.application.userData.lists[this.listIndex].items.find((item) => item.text === text)) {
      this.showItemTextError(true);
      this.textInputElement.focus();
      return;
    } else {
      this.showItemTextError(false);
    }
    const itemId = this.application.userData.lists[this.listIndex].items.push(new Item(text)) - 1;
    this.drawItem(itemId, this.application.userData.lists[this.listIndex].items[itemId]);
    this.textInputElement.focus();
    setTimeout(() => {
      this.textInputElement.value = '';
    }, 1);
  };

  this.showListTitleError = (isNeedShow) => {
    const element = document.getElementById('list-title-error');
    if (isNeedShow) {
      element.parentElement.classList.remove('concealed');
    } else {
      element.parentElement.classList.add('concealed');
    }
  };

  this.showItemTextError = (isNeedShow) => {
    const element = document.getElementById('item-text-error');
    if (isNeedShow) {
      element.parentElement.classList.remove('concealed');
    } else {
      element.parentElement.classList.add('concealed');
    }
  };

  document.getElementById('list-save-button').addEventListener('click', this.listSaveClicked);
  document.getElementById('list-cancel-button').addEventListener('click', this.listCancelClicked);
  document.getElementById('item-add-button').addEventListener('click', this.itemAddClicked);
}
