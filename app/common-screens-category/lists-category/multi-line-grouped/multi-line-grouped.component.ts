import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { mockedCounties } from "../mock-dataItems";

// >> multi-line-grouped-code
@Component({
    moduleId: module.id,
    templateUrl: "./multi-line-grouped.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineGroupedListViewExampleComponent implements OnInit {
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
// << multi-line-grouped-code
