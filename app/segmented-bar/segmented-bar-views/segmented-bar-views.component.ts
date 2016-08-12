// >> segmentedbar-items-setting-visibility
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: 'segmented-bar-views-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    styleUrls: ['segmented-bar/segmented-bar-views/style.css'],
    templateUrl: 'segmented-bar/segmented-bar-views/segmented-bar-views.component.html'
})

export class SegmentedBarViewsComponent {

    public Items: Array<SegmentedBarItem>;
    public index = 0;
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
    }

    public onChange(value) {
        // >> (hide)
        var that=this;
        console.log("tap");
        if(this.state > 0){
        // << (hide)
        alert("Selected index: " + value);
         // >> (hide)
        }
        this.state++;
        // << (hide)
        this.index = value;
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

    public onTap() {
        
            alert("Selected index " + this.index);
       
    }

}
// << segmentedbar-items-setting-visibility