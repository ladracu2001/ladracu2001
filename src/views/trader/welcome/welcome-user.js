import { html, LitElement } from "lit-element";
import { PreventAndRedirectCommands, Router, RouterLocation } from "@vaadin/router";

export class WelcomeUser extends LitElement{

    /* onBeforeEnter(location, commands, router){
        commands.redirect('/');
    } */

    render(){
        return html `<p>hola user</p>`;
    }
}
customElements.define('welcome-user', WelcomeUser);