import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import {setTimeout} from "timer"

@Component({
    selector: 'scroll-event-component',
    directives: [COMMON_DIRECTIVES],
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