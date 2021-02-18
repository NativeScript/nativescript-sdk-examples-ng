// >> creating-listpicker-code
import { Component } from "@angular/core";
import { EventData, ListPicker } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class ListPickerUsageComponent {
    public years: Array<number> = [1980, 1990, 2000, 2010, 2020];

    public onSelectedIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${this.years[picker.selectedIndex]}`);
    }
}
// << creating-listpicker-code
