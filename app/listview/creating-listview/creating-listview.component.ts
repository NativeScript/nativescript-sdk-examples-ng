// >> listview-create-code 
import { Component, ChangeDetectionStrategy }  from "@angular/core";

class Country {
    constructor(public name: string) { }
}

var europianCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
"Denmark", "Estonia", "Finland", "France","Germany", "Greece", "Hungary", "Ireland", "Italy", 
"Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands","Poland", "Portugal", "Romania", "Slovakia", 
"Slovenia","Spain", "Sweden", "United Kingdom"];
            
@Component({
    selector: "creating-listview",
    styleUrls:["listview/creating-listview/creating-listview.component.css"],
    templateUrl: "listview/creating-listview/creating-listview.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatingListViewComponent {
    public countries: Array<Country>;

    constructor() {
        this.countries = [];

        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
}
// << listview-create-code 
