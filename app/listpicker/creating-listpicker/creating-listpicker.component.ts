// >> creating-listpicker-code 
import { Component }  from "@angular/core";

var pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
"Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    selector: "creating-listpicker",
    styleUrls:["listpicker/creating-listpicker/creating-listpicker.component.css"],
    templateUrl: "listpicker/creating-listpicker/creating-listpicker.component.html"
})
export class CreatingListPickerComponent {

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
// << creating-listpicker-code  
