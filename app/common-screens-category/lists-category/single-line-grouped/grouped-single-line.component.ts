import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { mockedGroupDataArray, Country, GroupTitle, GroupFooter } from "../mock-dataItems";


// >> grouped-single-listview-basic-code
@Component({
    templateUrl: "common-screens-category/lists-category/single-line-grouped/grouped-single-line.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedSingleLineListViewExampleComponent implements OnInit {
    public countries: Array<any> = [];

    ngOnInit() {
        for (let i = 0; i < mockedGroupDataArray.length; i++) {
            this.countries.push(mockedGroupDataArray[i]);
        }
    }

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
// << grouped-single-listview-basic-code
