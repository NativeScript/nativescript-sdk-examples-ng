import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { mockedDataArray } from "../mock-dataItems";

// >> ext-listview-cards-code
@Component({
    moduleId: module.id,
    templateUrl: "./cards-listview.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsListViewExampleComponent {
    public countries: ObservableArray<any>;

    constructor() {
        this.countries = new ObservableArray(mockedDataArray);
    }

    onItemTapFirstList(args) {
        console.log(args.index);
    }

    onItemTapSecondList(args) {
        console.log(args.index);
    }

    onItemTapThirdList(args) {
        console.log(args.index);
    }
}
// << ext-listview-cards-code
