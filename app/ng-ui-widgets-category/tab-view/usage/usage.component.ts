// >> tab-view-require
import { Component } from "@angular/core";
import { SelectedIndexChangedEventData } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class BasicTabViewComponent {
    onSelectedIndexchanged(args: SelectedIndexChangedEventData) {
        let newIndex = args.newIndex;
    }
}
// << tab-view-require
