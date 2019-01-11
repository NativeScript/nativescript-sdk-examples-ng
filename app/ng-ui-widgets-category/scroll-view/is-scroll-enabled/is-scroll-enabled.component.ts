import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./is-scroll-enabled.component.html"
})
export class ScrollViewIsEnabledComponent {
    // >> scroll-view-is-enabled-code
    isScrollEnabledProperty: boolean = true;

    onTap() {
        this.isScrollEnabledProperty = !this.isScrollEnabledProperty;
    }
    // << scroll-view-is-enabled-code
}
