class SerenaElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Serena was here";
    }
}

customElements.define("x-serena", SerenaElement);