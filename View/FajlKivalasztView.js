class FajlKivalasztView{
    
    constructor(szuloElem){
        this.divElem = szuloElem
        this.#megjelenit();
        this.fajlElem = this.divElem.children("last-child");
        console.log(this)
    }

    #megjelenit(){
        let txt = "";
        txt += `<div id="kivalaszt_egyes">
        <label for="myfile">Itt kiválaszthatja a fájlt: </label>
        <input type="file" id="myfile" name="myfile">`
        txt+= "</div>"
        this.divElem.append(txt);
    }

    #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail: this});
        window.dispatchEvent(esemenyem);
    }
}

export default FajlKivalasztView;