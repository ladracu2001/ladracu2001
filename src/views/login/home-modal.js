import { html, LitElement } from "lit-element";

export class HomeModal extends LitElement{

    static get properties(){
        return{
            modalName:{type:String}
        };
    }
    constructor(){
        super();
        this.modalName = 'signupModalCenter';
    }

    render(){
        return [
        html 
        `<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
         <link href="./node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">`,    
        html
        `<div class="modal" id="signupModalCenter" tabindex="-1" role="dialog" aria-labelledby="signupModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <slot name='save-btn'></slot>
            </div>
         </div>
         </div>
         </div>`];
    }
}
customElements.define('home-modal', HomeModal);