/* **
 * templates for <head> content
** */

/* eslint-disable no-unused-vars */
function Head() {
  this.titleText = 'To Do List';

  this.show = (userName) => {
    const titleElements = document.getElementsByTagName('title');
    const titleElement = titleElements.length === 0
        ? document.getElementsByTagName('head')[0].appendChild(document.createElement('title'))
        : titleElements[0];
    titleElement.textContent = userName ? `${this.titleText} (${userName})` : this.titleText;
  };
}
