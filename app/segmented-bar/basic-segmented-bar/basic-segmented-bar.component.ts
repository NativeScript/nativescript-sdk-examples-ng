// >> add-segmentedbar-items
import { Component, ChangeDetectionStrategy } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: 'basic-segmented-bar-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: 'segmented-bar/basic-segmented-bar/basic-segmented-bar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BasicSegmentedBarComponent {

    public myItems: Array<SegmentedBarItem>;

    constructor() {
        this.myItems = [];
        for (var i = 1; i < 5; i++) {
            var tmpSegmentedBar: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBar.title = "Tab " + i;
            this.myItems.push(tmpSegmentedBar);
        }
        console.log("array length" + this.myItems.length);
    }

}
// << add-segmentedbar-items