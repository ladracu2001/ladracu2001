import { html, LitElement } from 'lit-element';

export class WelcomeUser extends LitElement {
  render() {
    return html`<p>hola user</p>`;
  }
}
customElements.define('welcome-user', WelcomeUser);
