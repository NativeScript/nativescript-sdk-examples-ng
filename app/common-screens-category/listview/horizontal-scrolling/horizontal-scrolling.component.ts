import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { mockedDataArray } from "../mock-dataItems"
import { EventData } from "data/observable";
import { ScrollView, ScrollEventData } from "ui/scroll-view";

// >> ext-horizontal-lists-code
@Component({
    selector: "horizontal-scrolling-lists-listview",
    templateUrl: "common-screens-category/listview/horizontal-scrolling/horizontal-scrolling.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalScrollingExampleComponent implements OnInit {
    public countries: Array<any> = [];

    ngOnInit() {
        for (var index = 0; index < mockedDataArray.length; index++) {
            // creating an object with additional id key to re-use as unique id
            this.countries.push({ "data" : mockedDataArray[index], id: index});      
        }
    }

    onTap(args: EventData) {
        // using the unique id assigned via the view-model
        console.log(args.object.get("id"));
    }

    onScroll(args: ScrollEventData) {
        console.log("scrollX: " + args.scrollX + "; scrollY: " + args.scrollY);
    }

    onScrollLoaded(args) {
        // scroll to specific position of the horizontal scroll list
        var scrollOffset = 330;
        (<ScrollView>args.object).scrollToHorizontalOffset(scrollOffset, true);
    }
}
// << ext-horizontal-lists-code