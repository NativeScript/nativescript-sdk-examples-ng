// >> creating-listpicker-code
import { Component } from "@angular/core";
import { ListPicker } from "ui/list-picker";

let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    moduleId: module.id,
    templateUrl: "./creating-listpicker.component.html"
})
export class CreatingListPickerComponent {

    public pokemons: Array<string>;
    public picked: string;

    constructor() {
        this.pokemons = [];

        for (let i = 0; i < pokemonList.length; i++) {
            this.pokemons.push(pokemonList[i]);
        }
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        console.log("picker selection: " + picker.selectedIndex);

        this.picked = this.pokemons[picker.selectedIndex];
    }
}
// << creating-listpicker-code
