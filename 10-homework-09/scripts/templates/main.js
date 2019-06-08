/* **
 * <main> template
** */

/* eslint-disable no-unused-vars */
function Main(parentElement) {
  parentElement.innerHTML += `
  <main class="hero">
    <div class="bg-img"></div>

    <section id="start-page-section" class="hero-body has-text-centered has-text-weight-semibold">
      <p class="start-page-text has-text-black limited-width narrow">
        Please <span class="has-text-weight-bold">login</span>
        or <span class="has-text-weight-bold">register</span> for&nbsp;free
        to&nbsp;start using <span class="has-text-weight-bold">To&nbsp;Do&nbsp;Lists</span>
      </p>
    </section>

    <section id="sign-up-section" class="hero-body concealed">
      <h1 class="title has-text-centered has-text-black has-text-weight-semibold">Register</h1>
      <form action="javascript:0" class="limited-width narrow">
        <div class="field">
          <div class="control has-icons-left">
            <input id="sign-up-first-name-input" class="input" type="text" maxlength="64"
                placeholder="First name" required>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input id="sign-up-last-name-input" class="input" type="text" maxlength="64"
              placeholder="Last name" required>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input id="sign-up-password-input" class="input" type="password" maxlength="64"
              placeholder="Password" required>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input id="sign-up-email-input" class="input" type="email" maxlength="64"
              placeholder="Email" required>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="notification is-danger concealed">
          <button class="delete" type="button"></button>
          <span id="sign-up-error"></span>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button id="sign-up-submit-button" class="button is-success">Submit</button>
          </div>
          <div class="control">
            <button id="sign-up-cancel-button" type="button" class="button is-warning">Cancel</button>
          </div>
        </div>
      </form>
    </section>

    <section id="log-in-section" class="hero-body concealed">
      <h1 class="title has-text-centered has-text-black has-text-weight-semibold">Login</h1>
      <form action="javascript:0" class="limited-width narrow">
        <div class="field">
          <div class="control has-icons-left">
            <input id="log-in-email-input" class="input" type="email" maxlength="64"
              placeholder="Email" required>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input id="log-in-password-input" class="input" type="password" maxlength="64"
              placeholder="Password" required>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="notification is-danger concealed">
          <button class="delete" type="button"></button>
          <span id="log-in-error">Wrong email or password!</span>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button id="log-in-submit-button" class="button is-success">Submit</button>
          </div>
          <div class="control">
            <button id="log-in-cancel-button" type="button" class="button is-warning">Cancel</button>
          </div>
      </form>
    </section>

    <section id="settings-section" class="hero-body concealed">
      <h1 class="title has-text-centered has-text-black has-text-weight-semibold">Account settings</h1>
      <form action="javascript:0" class="limited-width narrow">
        <div class="field">
          <div class="control has-icons-left">
            <input id="settings-email-input" class="input" type="email" maxlength="64"
              placeholder="Email" required>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input id="settings-password-input" class="input" type="password" maxlength="64"
              placeholder="Password" required>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input id="settings-first-name-input" class="input" type="text" maxlength="64"
              placeholder="First name" required>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left">
            <input id="settings-last-name-input" class="input" type="text" maxlength="64"
              placeholder="Last name" required>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div class="notification is-danger concealed">
          <button class="delete" type="button"></button>
          <span id="settings-error"></span>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button id="settings-submit-button" class="button is-success">Save</button>
          </div>
          <div class="control">
            <button id="settings-cancel-button" type="button" class="button is-warning">Cancel</button>
          </div>
          <div class="control">
            <button id="settings-delete-button" type="button" class="button is-danger">Delete account</button>
          </div>
        </div>
      </form>
    </section>

    <section id="dashboard-section" class="hero-body concealed">
      <h1 class="title has-text-centered has-text-black has-text-weight-semibold">Dashboard</h1>
      <ul id="dashboard-lists" class="list limited-width"></ul>
      <form action="javascript:0" class="limited-width">
        <button id="dashboard-add-button" class="button is-info">Create New to-do List</button>
      </form>
    </section>

    <section id="list-section" class="hero-body concealed">
      <h1 class="title has-text-centered has-text-black has-text-weight-semibold">Tasks</h1>
      <form action="javascript:0" class="limited-width">
        <div class="field">
          <div class="control has-icons-left">
            <input id="list-title-input" class="input" type="text" maxlength="64"
              placeholder="List name" required>
            <span class="icon is-small is-left">
              <i class="fa fa-tasks"></i>
            </span>
          </div>
        </div>
        <div class="notification is-danger concealed">
          <button class="delete" type="button"></button>
          <span id="list-title-error">List with such title already exists!</span>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button id="list-save-button" class="button is-success">Save</button>
          </div>
          <div class="control">
            <button id="list-cancel-button" type="button" class="button is-warning">Cancel</button>
          </div>
        </div>
      </form>
      <ul id="list-items" class="list limited-width"></ul>
      <form action="javascript:0" class="limited-width">
        <div class="field">
          <div class="control has-icons-left">
            <input id="item-text-input" type="text" class="input" maxlength="1024"
              placeholder="New task text" required>
            <span class="icon is-small is-left">
              <i class="fa fa-check-square"></i>
            </span>
          </div>
        </div>
        <div class="notification is-danger concealed">
          <button class="delete" type="button"></button>
          <span id="item-text-error">Item with such text already exists!</span>
        </div>
        <button id="item-add-button" class="button is-info">Add new to-do item</button>
      </form>
    </section>
  </main>`;
}
