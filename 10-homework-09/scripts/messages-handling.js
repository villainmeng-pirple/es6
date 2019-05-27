/* **
 * Messages manipulations
** */

/* eslint-disable no-unused-vars */
function MessagesHandling(application) {
  this.application = application;
  this.confirmModalElement = document.getElementById('confirm-modal');
  this.confirmWarningElement = document.getElementById('confirm-modal-warning-text');
  this.confirmQuestionElement = document.getElementById('confirm-modal-question-text');
  this.functionToProcess;
  this.argumentForFunctionToProcess;

  this.processIfConfirmed = (warningText, questionText, functionToProcess, argumentForFunctionToProcess) => {
    this.functionToProcess = functionToProcess;
    this.argumentForFunctionToProcess = argumentForFunctionToProcess;
    this.showConfirmation(warningText, questionText);
  };

  this.showConfirmation = (warningText, questionText) => {
    this.confirmWarningElement.textContent = warningText;
    this.confirmQuestionElement.textContent = questionText;
    this.confirmModalElement.classList.add('is-active');
  };

  this.hideConfirmation = () => {
    this.confirmModalElement.classList.remove('is-active');
    this.confirmWarningElement.textContent = '';
    this.confirmQuestionElement.textContent = '';
  };

  this.cancelClicked = () => {
    this.hideConfirmation();
  };

  this.okClicked = () => {
    this.functionToProcess(this.argumentForFunctionToProcess);
    this.hideConfirmation();
  };

  this.deleteNotificationClicked = (e) => {
    e.currentTarget.parentElement.classList.add('concealed');
  };

  document.getElementById('confirm-modal-delete-button').addEventListener('click', this.cancelClicked);
  document.getElementById('confirm-modal-ok-button').addEventListener('click', this.okClicked);
  document.getElementById('confirm-modal-cancel-button').addEventListener('click', this.cancelClicked);
  for (const element of document.querySelectorAll('div.notification > button.delete')) {
    element.addEventListener('click', this.deleteNotificationClicked);
  }
}
