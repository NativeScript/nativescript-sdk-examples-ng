import { Component, ChangeDetectionStrategy, OnInit, Input}  from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { mockedDataArray, Country }  from "../mock-dataItems";

// >> multiline-listview-code
@Component({
    selector: "multi-line-listview",
    templateUrl: "common-screens-category/lists-category/multi-line/multi-line.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineListViewExampleComponent implements OnInit {
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

    onSetupItemView(args: SetupItemViewArgs) {
        // further customisation can be achived with SetupItemViewArgs
        // example for creating a variable for each third element
        args.view.context.third = (args.index % 3 === 0);
    }
}
// << multiline-listview-code
