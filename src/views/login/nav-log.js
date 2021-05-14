import { LitElement, html } from 'lit-element';

export class NavLog extends LitElement {
  render() {
    return [
      html`<script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link
          href="./node_modules/bootstrap/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />`,
      html`
        <button
          type="button"
          id="homeModalCenter"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#homeModalCenter"
          href="/"
        >
          Home
        </button>
        <button
          type="button"
          id="signupModalCenter"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#signupModalCenter"
        >
          Sign-up
        </button>
        <button
          type="button"
          id="featuresModalCenter"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#featuresModalCenter"
        >
          Features
        </button>
        <button
          type="button"
          id="faqsModalCenter"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#FAQsModalCenter"
        >
          FAQs
        </button>
        <button
          type="button"
          id="aboutModalCenter"
          class="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#aboutModalCenter"
        >
          About
        </button>
      `,
    ];
  }
}
customElements.define('nav-log', NavLog);
