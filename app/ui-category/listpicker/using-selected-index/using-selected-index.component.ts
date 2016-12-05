// >> using-selected-index-code
import { Component } from "@angular/core";

let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
"Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    moduleId: module.id,
    templateUrl: "./using-selected-index.component.html"
})
export class UsingSelectedIndexExampleComponent {
    public pokemons: Array<string>;
    public index: number;

    constructor() {
        this.pokemons = [];

        for (let i = 0; i < pokemonList.length; i++) {
            this.pokemons.push(pokemonList[i]);
        }
    }

    public selectedIndexChanged(picker) {
        console.log("picker selection: " + picker.selectedIndex);
    }
}
// << using-selected-index-code
