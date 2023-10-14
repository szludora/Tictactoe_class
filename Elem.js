class Elem{
    constructor(szulo){
        this.szulo = szulo;
        this.#htmlOsszeallit();
        this.divElem=this.szulo.children("div.elem:last-child");
        this.pElem=this.divElem.children();
        this.divElem.on("click",()=>{
            this.#esemenyTrigger("elemKivalaszt");
        })
    
    }
    setErtek(ertek){
        this.pElem.html(ertek)
    }

    #htmlOsszeallit(){
        let txt ="<div class='elem'><p></p></div>";
        this.szulo.append(txt);
    }

    #esemenyTrigger(esemenyNev){
        const esemenyem = new CustomEvent(esemenyNev, {detail:this})
        window.dispatchEvent(esemenyem)

    }
}

export default Elem;