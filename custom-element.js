class MyCustomElement extends HTMLElement{
    constructor(){
        super();
        console.log("custom element constructor2");
    }
    connectedCallback(){
        console.log("now connected");
    }
    static get observedAttributes(){
        return ["demo"];
    }

    attributeChangedCallback(name, oldValue, newValue){
        console.log("Attribute Changed!", name, oldValue, newValue);
    }
    disconnectedCallback(){
        console.log("now disconnected");
    }
    
}
window.customElements.define("my-custom-element", MyCustomElement);
