/* **
 * <header> template
** */

/* eslint-disable no-unused-vars */
function Header(parentElement) {
  parentElement.innerHTML += `
  <header class="has-background-white-ter">
    <nav class="nav-items columns is-mobile">
      <a id="home-button"
          class="nav-item column is-1 icon is-medium has-text-success" title="Home">
        <i class="fa fa-tasks fa-2x"></i>
      </a>
      <div class="column"></div>
      <a id="log-in-button"
          class="nav-item column is-1 icon is-medium has-text-success has-text-right concealed" title="Login">
        <i class="fa fa-sign-in-alt fa-2x"></i>
      </a>
      <a id="sign-up-button"
          class="nav-item column is-1 icon is-medium has-text-primary has-text-right concealed" title="Register">
        <i class="fa fa-user-plus fa-2x"></i>
      </a>
      <a id="settings-button"
          class="nav-item column is-1 icon is-medium has-text-primary has-text-right concealed"
          title="Account settings">
        <i class="fa fa-user-cog fa-2x"></i>
      </a>
      <a id="log-out-button"
          class="nav-item column is-1 icon is-medium has-text-warning has-text-right concealed" title="Logout">
        <i class="fa fa-sign-out-alt fa-2x"></i>
      </a>
    </nav>
  </header>`;
}
