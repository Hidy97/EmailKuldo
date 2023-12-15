import { TODOLIST } from "../Data/adatok.js";
import Adatkezelo from "../Model/Adatkezelo.js";
import Megjelenit from "../View/Megjelenit.js";

class Controller{
    constructor(){
        //const szuloELEM = $(".fajl_kivalaszt")
        //this.FAJLKIVALASZTVIEW = new FajlKivalasztView($(".fajl_kivalaszt"))

        const  szuloELEM = $(".tarolo")
        const adatkezelo = new Adatkezelo(TODOLIST)
        new Megjelenit(TODOLIST, szuloELEM);
        $(window).on("torles", (event) =>{
            adatkezelo.torles(event.detail);
            szuloELEM.empty();
            new Megjelenit(TODOLIST, szuloELEM);
        })
        
    }

}

export default Controller;