import { Component } from "@angular/core";
import { ListPicker } from "tns-core-modules/ui/list-picker";

@Component({
    moduleId: module.id,
    templateUrl: "./styling.component.html",
    styleUrls: ["./styling.component.css"]
})
export class ListPickerStylingComponent {
    public items: Array<string> = ["Batman", "Joker", "Bane"];

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        console.log(`Selected: ${this.items[picker.selectedIndex]}`);
    }
}
