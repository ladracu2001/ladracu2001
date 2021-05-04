import { html, LitElement } from "lit-element";

export class FeaturesTrader extends LitElement{

    static get properties(){
        return {
            monedas:{type:Array},
            cotizaciones:{type:Array, reflect:true},
            tablero:{type:Array}
        };
    }
    constructor(){
        super();
        this.cotizaciones = [];
    }
    connectedCallback(){
        super.connectedCallback();
    }
    async firstUpdated(){
        var url = "http://data.fixer.io/api/symbols?access_key=f27882693a6fbb990ba006822320e2c9&base=EUR";
        await fetch(url).then(response => response.json())
        .then(async data => {
            this.cotizaciones = data.symbols;
        });
    }
    render(){
            return html `
                <ul>${Object.entries(this.cotizaciones).map(item=>html `<li>"${item[1]}"</li>`)}</ul>
            `;
    }
}
customElements.define('features-trader', FeaturesTrader);