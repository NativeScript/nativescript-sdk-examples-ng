// >> add-segmentedbar-items
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: 'basic-segmented-bar-component',
    templateUrl: 'segmented-bar/basic-segmented-bar/basic-segmented-bar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BasicSegmentedBarComponent {
    public myItems: Array<SegmentedBarItem>;
    public prop = "Item " + 0;
    constructor() {
        this.myItems = [];
        for (var i = 1; i < 5; i++) {
            var tmpSegmentedBar: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBar.title = "Tab " + i;

            this.myItems.push(tmpSegmentedBar);
        }
    }

}
// << add-segmentedbar-items
