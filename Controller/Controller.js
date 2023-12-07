import FajlKivalasztView from "../View/FajlKivalasztView.js";
import TablazatView from "../View/TablazatView.js";

class Controller{
    constructor(){
        this.FAJLKIVALASZTVIEW = new FajlKivalasztView($(".fajl_kivalaszt"))
        this.TABLAZATVIEW = new TablazatView();
    }

}

export default Controller;