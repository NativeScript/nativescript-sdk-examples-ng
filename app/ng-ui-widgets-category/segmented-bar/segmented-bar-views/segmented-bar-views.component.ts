// >> segmentedbar-items-setting-visibility
import { Component } from "@angular/core";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

@Component({
    moduleId: module.id,
    styleUrls: ["./style.css"],
    templateUrl: "./segmented-bar-views.component.html"
})
export class SegmentedBarViewsComponent {
    public items: Array<SegmentedBarItem>;
    public selectedIndex = 0;
    public visibility1 = true;
    public visibility2 = false;
    public visibility3 = false;

    constructor() {
        this.items = [];
        for (let i = 1; i < 4; i++) {
            let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            segmentedBarItem.title = "View " + i;
            this.items.push(segmentedBarItem);
        }
        this.selectedIndex = 0;
    }

    public onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;
        this.selectedIndex = segmetedBar.selectedIndex;
        switch (this.selectedIndex) {
            case 0:
                this.visibility1 = true;
                this.visibility2 = false;
                this.visibility3 = false;
                break;
            case 1:
                this.visibility1 = false;
                this.visibility2 = true;
                this.visibility3 = false;
                break;
            case 2:
                this.visibility1 = false;
                this.visibility2 = false;
                this.visibility3 = true;
                break;
            default:
                break;
        }
    }

}
// << segmentedbar-items-setting-visibility
