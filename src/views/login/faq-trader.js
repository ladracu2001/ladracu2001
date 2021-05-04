import { html, LitElement } from "lit-element";

export class FaqTrader extends LitElement{

    static get properties(){
        return {
            email:{type:String}
        };
    }
    constructor(){
        super();
        this.email = 'middlewarebhsa@gmail.com';
    }
    
    render(){
        return html
        `<ul>
            <li><strong>¿Necesito cuenta para operar?</strong></li>
            <li>Si. Es importante crear una cuenta si desea operar comprando moneda extranjera.</li>
            <li><strong>¿Que operaciones puedo realizar sin estar registrado?</strong></li>
            <li>Puede consultar la tasa de conversion de moneda desde features.</li>
            <li><strong>¿Cual es el costo de usar Trade-App?</strong></li>
            <li>Es un servicio gratuito y de uso limitado en 1000 consultas mensuales.</li>
            <li><strong>¿Donde puedo dirigirme para consultas y/o sugerencias?</strong></li>
            <li>Tiene a disposicion nuestra casilla de correo: "${this.email}"</li>
        </ul>`;
    }
}
customElements.define('faq-trader', FaqTrader);