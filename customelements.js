class SerenaElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Serena was here";
    }
}

customElements.define("x-serena", SerenaElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    
    }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    
    }
}

customElements.define("x-fullyear", YearElement);

class RightElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:right">${this.innerHTML}</div>`;
    
    }
}

customElements.define("x-right", RightElement);

class BlueElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:blue">${this.innerHTML}</div>`;
    
    }
}

customElements.define("x-blue", BlueElement);