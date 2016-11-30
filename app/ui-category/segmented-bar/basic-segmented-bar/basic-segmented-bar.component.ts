// >> add-segmentedbar-items
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/segmented-bar/basic-segmented-bar/basic-segmented-bar.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSegmentedBarComponent {
    public myItems: Array<SegmentedBarItem>;
    public prop = "Item " + 0;

    constructor() {
        this.myItems = [];
        for (let i = 1; i < 5; i++) {
            let tmpSegmentedBar: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBar.title = "Tab " + i;

            this.myItems.push(tmpSegmentedBar);
        }
    }
}
// << add-segmentedbar-items
