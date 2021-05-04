import { LitElement, html } from "lit-element";
import { signform } from "../../styles/signform.js";

export class SignUp extends LitElement{

    static getStyles(){
      return signform;
    }
    
    static get properties(){
        return {
            email:{type:String},
            email_verif:{type:String},
            password:{type:String},
            password_verif:{type:String}
        };
    }
    constructor(){
        super();
        this.email = '';
        this.email_verif = '';
        this.password = '';
        this.password_verif = '';
    }
    render(){
        return [html `<link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css">`,
        html
        `<main class="form-signin">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" .value="${this.email}" @input="${(e)=>{this.email = e.target.value}}">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="email" class="form-control" id="confirmEmail" placeholder="name@example.com" .value="${this.email_verif}" @input="${(e)=>{this.email_verif = e.target.value}}">
            <label for="confirmEmail">Confirm Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" .value="${this.password}">
            <label for="floatingPassword">Password</label>  
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" .value="${this.password_verif}">
            <label for="floatingPassword">Confirm Password</label>
          </div>
        </form>
      </main>`];
    }
}
customElements.define('sign-up', SignUp);