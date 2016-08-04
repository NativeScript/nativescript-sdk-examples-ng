import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'basic-tab-view-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'tab-view/basic-tab-view/basic-tab-view.component.html'
})

export class BasicTabViewComponent {
   public tabindex = 1;
}