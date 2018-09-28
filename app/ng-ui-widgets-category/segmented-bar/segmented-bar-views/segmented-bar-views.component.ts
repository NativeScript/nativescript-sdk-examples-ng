// >> segmentedbar-items-setting-visibility
import { Component } from "@angular/core";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";

@Component({
    moduleId: module.id,
    styleUrls: ["./style.css"],
    templateUrl: "./segmented-bar-views.component.html"
})
export class SegmentedBarViewsComponent {
    public items: Array<SegmentedBarItem>;
    public selectedIndex = 0;

    constructor() {
        this.items = [];
        for (let i = 1; i < 4; i++) {
            let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            segmentedBarItem.title = "View " + i;
            this.items.push(segmentedBarItem);
        }
    }

    public onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.selectedIndex = segmetedBar.selectedIndex;
    }

}
// << segmentedbar-items-setting-visibility
