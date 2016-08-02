import { Component, ChangeDetectionStrategy } from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import { SegmentedBarItem } from "ui/segmented-bar";
// >> switch-event-handle-code
@Component({
    selector: 'basic-tab-view-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'tab-view/basic-tab-view/basic-tab-view.component.html'
})

export class BasicTabViewComponent {
   public tabindex = 1;
}
// << switch-event-handle-code