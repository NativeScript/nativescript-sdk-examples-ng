// >> creating-listpicker-code
import { Component } from "@angular/core";
import { ListPicker } from "tns-core-modules/ui/list-picker";

let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    moduleId: module.id,
    templateUrl: "./creating-listpicker.component.html"
})
export class CreatingListPickerComponent {

    public pokemons: Array<string> = [];
    public picked: string;

    constructor() {
        for (let pokemon of pokemonList) {
            this.pokemons.push(pokemon);
        }
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.picked = this.pokemons[picker.selectedIndex];
    }
}
// << creating-listpicker-code
