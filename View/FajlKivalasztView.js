class FajlKivalasztView{
    
    constructor(szuloElem){
        this.divElem = szuloElem
        this.#megjelenit();
        this.fajlElem = this.divElem.children("last-child");
        //console.log(this)
        this.#fajlnev();
        
    }

    #megjelenit(){
        //<label for="myfile">Itt kiválaszthatja a fájlt: </label>
        let txt = "";
        txt += `<div id="kivalaszt_egyes">
        <label for="myfile"></label>
        <input type="file" id="myfile" name="myfile">`
        txt+= "</div>"
        this.divElem.append(txt);
    }

    #fajlnev(){
        $("#myfile").change(function(event) {
            //console.log(event.target.files[0].name)
            let x = (event.target.files[0].name)
            let feldolgozottFajl = x.split(' ')
            let kod = "";
            //ez végig fut a keletkezett tömbön, ami a 'feldolgozottFajl'
            for (let index = 0; index < feldolgozottFajl.length; index++) {
                //itt megnézi, hogy az adott elem tartalmazza-e a karaktert
                //bízunk benne, hogy mindenkinek az egyedi kódja lesz csak zárójelben :D
                if (feldolgozottFajl[index].indexOf("(") > -1) {
                    //console.log(feldolgozottFajl[index])
                    kod += feldolgozottFajl[index]
                }
                
            }
            $("#kiiras").text(kod)
        })
    }

    #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail: this});
        window.dispatchEvent(esemenyem);
    }
}

export default FajlKivalasztView;