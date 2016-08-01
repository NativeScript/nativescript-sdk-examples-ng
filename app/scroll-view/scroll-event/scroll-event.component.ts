import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'scroll-event-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'scroll-view/scroll-event/scroll-event.component.html'
})

export class ScrollEventComponent {
    public status = "not scrolling";
    public onscroll(){
        this.status="scrolling";
    }
}

