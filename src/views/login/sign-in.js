import { html, LitElement } from "lit-element";
import { signform } from "../../styles/signform.js";
export class SignIn extends LitElement{

    static getStyles(){
      return signform;
    }

    static get properties(){
        return {
            email:{type:String},
            password:{type:String}
        };
    }
    constructor(){
        super();
        this.email = '';
        this.password = '';
    }
    render(){
        return [html `<link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">`, html
        `<main class="form-signin">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" .value="${this.email}" @input="${(e)=>{this.email = e.target.value}}">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" .value="${this.password}">
            <label for="floatingPassword">Password</label>
          </div>
          <slot></slot>
        </form>
      </main>`];
    }
}
customElements.define('sign-in', SignIn);