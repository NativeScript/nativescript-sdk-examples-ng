import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { mockedCounties } from "../mock-dataItems";

// >> grouped-single-listview-basic-code
@Component({
    moduleId: module.id,
    templateUrl: "./grouped-single-line.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedSingleLineListViewExampleComponent implements OnInit {
    public countries: Array<any> = [];

    public templateSelector = (item: any, index: number, items: any) => {
        return item.type || "cell";
    }

    ngOnInit() {
        for (let i = 0; i < mockedCounties.length; i++) {
            this.countries.push(mockedCounties[i]);
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
// << grouped-single-listview-basic-code
