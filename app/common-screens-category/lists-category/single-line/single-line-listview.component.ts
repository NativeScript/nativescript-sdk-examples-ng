import { Component, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { mockedDataArray, Country } from "../mock-dataItems";

// >> ext-listview-basic-code
@Component({
    moduleId: module.id,
    templateUrl: "./single-line-listview.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleLineListViewExampleComponent implements OnInit {
    public countries: Array<Country> = [];

    ngOnInit() {
        for (let i = 0; i < mockedDataArray.length; i++) {
            this.countries.push(mockedDataArray[i]);
        }
    }

    onItemTapFirstList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapSecondList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapThirdList(args: ItemEventData) {
        console.log(args.index);
    }
}
// << ext-listview-basic-code
