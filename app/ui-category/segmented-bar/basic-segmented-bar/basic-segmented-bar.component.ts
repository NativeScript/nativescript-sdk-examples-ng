// >> add-segmentedbar-items
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

@Component({
    moduleId: module.id,
    templateUrl: "./basic-segmented-bar.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSegmentedBarComponent {
    public myItems: Array<SegmentedBarItem>;
    public prop: string = "Item 1";

    constructor() {
        this.myItems = [];
        for (let i = 1; i < 5; i++) {
            let tmpSegmentedBar: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBar.title = "Tab " + i;

            this.myItems.push(tmpSegmentedBar);
        }
    }

    public onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.prop = "Item" + (segmetedBar.selectedIndex + 1);
    }
}
// << add-segmentedbar-items
