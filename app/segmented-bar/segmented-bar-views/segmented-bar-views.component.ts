// >> segmentedbar-items-setting-visibility
import { Component } from "@angular/core";
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: 'segmented-bar-views-component',
    styleUrls: ['segmented-bar/segmented-bar-views/style.css'],
    templateUrl: 'segmented-bar/segmented-bar-views/segmented-bar-views.component.html'
})

export class SegmentedBarViewsComponent {

    public Items: Array<SegmentedBarItem>;
    public selectedIndex = 0;
    public visibility1 = true;
    public visibility2 = false;
    public visibility3 = false;
    // >> (hide)
    public state = 0;
    // << (hide)
    constructor() {
        this.Items = [];
        for (var i = 1; i < 4; i++) {
            var tmpSegmentedBar: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBar.title = "View " + i;
            this.Items.push(tmpSegmentedBar);
        }
        this.selectedIndex = 0;
    }

    public onChange(value) {
        this.selectedIndex = value;
        switch (value) {
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
