/* eslint-disable no-undef */
import { css, html, LitElement } from 'lit-element';
import './src/views/login/sign-in.js';
import './src/views/login/sign-up.js';
import './src/views/login/login-modal.js';
import './src/views/login/faq-trader.js';
import './src/views/login/features-trader.js';
import './src/views/login/about-trader.js';
import './src/views/login/home-modal.js';
import './src/views/login/nav-log.js';
import './src/views/trader/welcome/nav-user.js';
import './nav-trader.js';
import './src/views/trader/welcome/welcome-user.js';
import './main.js';
import { Router } from '@vaadin/router';

export class LoginTrader extends LitElement {
  static styles() {
    return [
      css`
        .bd-placeholder-img {
          font-size: 1.125rem;
          text-anchor: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        @media (min-width: 768px) {
          .bd-placeholder-img-lg {
            font-size: 3.5rem;
          }
        }
      `,
      mainStyles,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  isAuthorized() {
    Router.go('/welcome');
  }

  render() {
    return [
      html`
        <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <link
          href="./node_modules/bootstrap/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <div>
          <sign-in>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" id="chkRemember" />
                Remember me
              </label>
            </div>
            <button
              class="w-100 btn btn-lg btn-primary"
              type="submit"
              formaction="/welcome"
              @click="${this.isAuthorized}"
            >
              Sign in
            </button>
          </sign-in>
        </div>
      `,
    ];
  }
}
customElements.define('login-trader', LoginTrader);
