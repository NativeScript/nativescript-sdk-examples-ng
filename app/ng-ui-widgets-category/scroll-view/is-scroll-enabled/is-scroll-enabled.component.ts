import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./is-scroll-enabled.component.html"
})
export class ScrollViewIsEnabledComponent {
    // >> scroll-view-is-enabled-code
    scrollEnabled: boolean = true;

    onTap() {
        this.scrollEnabled = !this.scrollEnabled;
    }
    // << scroll-view-is-enabled-code
}
