import { html, LitElement } from 'lit-element';

export class LoginModal extends LitElement {
  static get properties() {
    return {
      modalName: { type: String },
    };
  }

  constructor() {
    super();
    this.modalName = 'signupModalCenter';
  }

  render() {
    return [
      html`<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link
          href="./node_modules/bootstrap/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />`,
      html`
        <div class="modal-content">
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="closebtn"></slot>
            <slot name="savebtn"></slot>
          </div>
        </div>
      `,
    ];
  }
}
customElements.define('login-modal', LoginModal);
