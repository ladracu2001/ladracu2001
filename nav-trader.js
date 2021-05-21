import { LitElement, html } from 'lit-element';
import './src/views/trader/welcome/nav-user.js';
import './src/views/login/nav-log.js';

export class NavTrader extends LitElement {
  static get properties() {
    return {
      url_location: { type: String},
    };
  }
  constructor(){
    super();
    this.url_location = '/';
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('popstate', function _ChangeRender(event){
      this.url_location = event.target.self.location.pathname;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate');
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
