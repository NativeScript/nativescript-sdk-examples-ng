import { Component, ChangeDetectionStrategy, OnInit, Input}  from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { mockedDataArray }  from "../mock-dataItems";

// >> ext-listview-basic-code
@Component({
    selector: "two-line-listview",
    templateUrl: "ui-extended/listview/two-line/two-line-listview.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoLineListViewExampleComponent implements OnInit {
    public countries:ObservableArray<any>;

    constructor(){
        this.countries = new ObservableArray(mockedDataArray)
    }

    ngOnInit(){}

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
// << ext-listview-basic-code