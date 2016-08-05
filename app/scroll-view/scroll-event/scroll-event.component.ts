// >> scroll-view-event-code
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
import {setTimeout} from "timer"

@Component({
    selector: 'scroll-event-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
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