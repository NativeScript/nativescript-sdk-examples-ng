import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { mockedCounties } from "../mock-dataItems";

// >> grouped-listview-two-lines-code
@Component({
    moduleId: module.id,
    templateUrl: "./grouped-two-lines.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedTwoLinesListViewExampleComponent implements OnInit {
    public countries: Array<any>;

    ngOnInit() {
        this.countries = [];
         for (let i = 0; i < mockedCounties.length; i++) {
            this.countries.push(mockedCounties[i]);
        }
    }

    public templateSelector = (item: any, index: number, items: any) => {
        return item.type || "cell";
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
