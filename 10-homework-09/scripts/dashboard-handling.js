/* **
 * Dashboard manipulations
** */

/* eslint-disable no-unused-vars */
function DashboardHandling(application) {
  this.application = application;
  this.rootElement = document.getElementById('dashboard-lists');

  this.updateLists = () => {
    for (const listElement of this.rootElement.querySelectorAll('li')) {
      this.rootElement.removeChild(listElement);
    }
    for (let i = 0; i < this.application.userData.lists.length; i++) {
      this.drawList(i, this.application.userData.lists[i]);
    }
  };

  this.drawList = (id, list) => {
    const listElement = this.rootElement.appendChild(document.createElement('li'));
    listElement.id = `list-${id}`;
    listElement.classList.add('list-item', 'columns', 'is-mobile');
    listElement.addEventListener('click', this.listClicked);

    const titleElement = listElement.appendChild(document.createElement('span'));
    titleElement.classList.add('column');
    const activeItemsCount = list.items.filter((item) => !item.isDone).length;
    if (activeItemsCount === 0) {
      titleElement.classList.add('list-item-done');
    }
    titleElement.appendChild(document.createTextNode(`${list.title} (${activeItemsCount} / ${list.items.length})`));

    const buttonElement = listElement.appendChild(document.createElement('a'));
    buttonElement.classList.add('icon', 'is-medium', 'has-text-danger', 'dashboard-list-delete-button',
        'column', 'is-1');
    buttonElement.addEventListener('click', this.listDeleteClicked);
    const iconElement = buttonElement.appendChild(document.createElement('i'));
    iconElement.classList.add('fa', 'fa-trash-alt', 'fa-2x');
  };

  this.dashboardAddClicked = () => {
    const listId = this.application.userData.lists.push(new List()) - 1;
    this.goToList(listId);
  };

  this.listClicked = (e) => {
    this.goToList(Number(e.currentTarget.id.substring(5)));
  };

  this.goToList = (id) => {
    this.application.concealAllSections();
    this.application.sections[4].classList.remove('concealed');
    this.application.listHandling.initialize(id);
  };

  this.listDeleteClicked = (e) => {
    e.stopPropagation();
    this.application.messagesHandling.processIfConfirmed('All list data will be lost!',
        'Are you really want to delete this list?', this.doDelete, e.currentTarget.parentNode);
  };

  this.doDelete = (elementToDelete) => {
    this.application.userData.lists.splice(Number(elementToDelete.id.substring(5)), 1);
    this.application.storage.storeUserData(this.application.userData);
    this.rootElement.removeChild(elementToDelete);
  };

  document.getElementById('dashboard-add-button').addEventListener('click', this.dashboardAddClicked);
}

