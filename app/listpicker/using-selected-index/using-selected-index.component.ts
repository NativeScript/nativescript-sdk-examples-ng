// >> using-selected-index-code 
import { Component }  from "@angular/core";

var pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
"Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    selector: "creating-listpicker",
    styleUrls:["listpicker/using-selected-index/using-selected-index.component.css"],
    templateUrl: "listpicker/using-selected-index/using-selected-index.component.html"
})

export class UsingSelectedIndexExampleComponent {

    public pokemons: Array<string>;

    constructor() {
        this.pokemons = [];

        for (var i = 0; i < pokemonList.length; i++) {
            this.pokemons.push(pokemonList[i]);
        }
    }

    public selectedIndexChanged(picker) {
        console.log('picker selection: ' + picker.selectedIndex);
    }
}
// << using-selected-index-code  
