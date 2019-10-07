import { Component } from "@angular/core";
import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";

@Component({
    moduleId: module.id,
    styleUrls: ["./styling.component.css"],
    templateUrl: "./styling.component.html"
})
export class SegmentedBarViewsComponent {
    public items: Array<SegmentedBarItem> = [];

    constructor() {
        for (let i = 1; i < 4; i++) {
            let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            segmentedBarItem.title = "View " + i;
            this.items.push(segmentedBarItem);
        }
    }
}