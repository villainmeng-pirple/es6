/* **
 * templates for <head> content
** */

/* eslint-disable no-unused-vars */
function Head() {
  this.parentElement = document.getElementsByTagName('head')[0];

  const metaElement = this.parentElement.appendChild(document.createElement('meta'));
  metaElement.name = 'keywords';
  metaElement.content = 'todo,task,plan,dashboard';

  this.titleText = 'To Do List';

  this.show = (userName) => {
    const titleElements = document.getElementsByTagName('title');
    const titleElement = titleElements.length === 0
        ? this.parentElement.appendChild(document.createElement('title'))
        : titleElements[0];
    titleElement.textContent = userName ? `${this.titleText} (${userName})` : this.titleText;
  };
}
