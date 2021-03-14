// >> add-segmentedbar-items
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSegmentedBarComponent {
    mySegmentedBarItems: Array<SegmentedBarItem> = [];

    constructor() {
        for (let i = 1; i < 5; i++) {
            const item = new SegmentedBarItem();
            item.title = "Item " + i;
            this.mySegmentedBarItems.push(item);
        }
    }

    public onSelectedIndexChange(args: SelectedIndexChangedEventData) {
        const segmentedBar = args.object as SegmentedBar;
        const oldIndex = args.oldIndex;
        const newIndex = args.newIndex;
    }
}
// << add-segmentedbar-items
