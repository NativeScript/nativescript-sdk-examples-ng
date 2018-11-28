// >> add-segmentedbar-items
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";

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
            const item = new SegmentedBarItem();
            item.title = "Tab " + i;
            this.myItems.push(item);
        }
    }

    public onSelectedIndexChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        this.prop = "Item" + (segmentedBar.selectedIndex + 1);
    }
}
// << add-segmentedbar-items
