import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { mockedDataArray, Country } from "../mock-dataItems"

// >> ext-horizontal-lists-code
@Component({
    selector: "horizontal-scrolling-lists-listview",
    templateUrl: "common-screens-category/listview/horizontal-scrolling/horizontal-scrolling.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalScrollingExampleComponent implements OnInit {
    public countries: Array<Country> = [];

    ngOnInit() {
        for (var index = 0; index < mockedDataArray.length; index++) {
            this.countries.push(mockedDataArray[index]);      
        }
    }
}
// << ext-horizontal-lists-code