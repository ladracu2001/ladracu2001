import {html, LitElement  } from "lit-element";

const traderPurpose = `Trader es una aplicacion que permite operar con distintas monedas de todo el mundo.
Conectado con cotizaciones de monedas de todo el mundo a traves de la libreria Fixer.IO
Tiene un umbral maximo de invocaciones mensual de 1000 consultas en esta implementacion.`;
export class AboutTrader extends LitElement{

    static get properties(){
        return {
            libreria:{type:String}
        };
    }
    constructor(){
        super();
        this.libreria = 'Fixer.IO';
    }
    render(){
        return html `<p>${traderPurpose}</p>`;
    }
}
customElements.define('about-trader', AboutTrader);