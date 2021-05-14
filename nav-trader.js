import { LitElement, html } from 'lit-element';
import './src/views/trader/welcome/nav-user.js';
import './src/views/login/nav-log.js';

export class NavTrader extends LitElement {
  static get properties() {
    return {
      url_location: { type: String, value: '' },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('location.pathname', this.url_location);
  }

  disconnectedCallback() {
    window.removeEventListener('location.pathname', this.url_location);
    super.disconnectedCallback();
  }

  render() {
    return [
      this.url_location === '/'
        ? html`<nav-log></nav-log>`
        : html`<nav-user></nav-user>`,
    ];
  }
}
customElements.define('nav-trader', NavTrader);
