import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { ObservableArray } from "data/observable-array";
import { mockedGroupDataArray, GroupFooter, GroupTitle } from "../mock-dataItems";

// >> grouped-listview-two-lines-code
@Component({
    templateUrl: "common-screens-category/lists-category/two-lines-grouped/grouped-two-lines.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedTwoLinesListViewExampleComponent implements OnInit {
    public countries: Array<any>;

    constructor() {
        this.countries = [];
         for (let i = 0; i < mockedGroupDataArray.length; i++) {
            this.countries.push(mockedGroupDataArray[i]);
        }
    }

    ngOnInit() {}

    checkType(value) {
        // get the class name e.g. GroupTitle or Country
        let className = value.constructor.name;
        return className;
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
// << grouped-listview-two-lines-code
