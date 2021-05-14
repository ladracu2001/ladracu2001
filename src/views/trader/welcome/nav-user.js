import { LitElement, html } from 'lit-element';

export class NavUser extends LitElement {
  render() {
    return [
      html`<script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link
          href="./node_modules/bootstrap/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />`,
      html`<button
          type="button"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#homeModalCenter"
          href="/"
        >
          Home
        </button>
        <button
          type="button"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#disconectModalCenter"
        >
          Disconect
        </button>
        <button
          type="button"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#myProfileModalCenter"
        >
          My Profile
        </button>
        <button
          type="button"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#supportModalCenter"
        >
          Support
        </button>
        <button
          type="button"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#newsModalCenter"
        >
          News!
        </button>`,
    ];
  }
}
customElements.define('nav-user', NavUser);
