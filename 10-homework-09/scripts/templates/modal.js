/* **
 * modal dialog template
** */

/* eslint-disable no-unused-vars */
function Modal(parentElement) {
  parentElement.innerHTML += `
  <div id="confirm-modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card is-mobile">
      <header class="modal-card-head has-background-danger">
        <p class="modal-card-title has-text-white">Confirm delete</p>
        <button id="confirm-modal-delete-button" class="delete" type="button"></button>
      </header>

      <section class="modal-card-body">
        <div class="content">
          <p id="confirm-modal-warning-text"></p>
          <p id="confirm-modal-question-text"></p>
        </div>
      </section>

      <footer class="modal-card-foot">
        <button id="confirm-modal-ok-button" class="button is-danger">Delete</button>
        <button id="confirm-modal-cancel-button" class="button">Cancel</button>
      </footer>
    </div>
  </div>`;
}
