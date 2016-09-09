// >> scroll-view-event-code
import { Component } from "@angular/core";
import {setTimeout} from "timer"

@Component({
    selector: 'scroll-event-component',
    // >> (hide)
    styleUrls: ["scroll-view/scroll-event/style.css"],
    // << (hide)
    templateUrl: 'scroll-view/scroll-event/scroll-event.component.html'
})

export class ScrollEventComponent {
    
    public status = "not scrolling";

    public onscroll(){
        this.status="scrolling";
        var that =this;
        setTimeout(function(){
            that.status="not scrolling";
        },300);
    }
}
// << scroll-view-event-code
