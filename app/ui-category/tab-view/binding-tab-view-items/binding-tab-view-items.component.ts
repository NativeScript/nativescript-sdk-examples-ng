
import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

export class DataItem {
    constructor(public itemDesc: string) { }
}

@Component({
    moduleId: module.id,
    templateUrl: "./binding-tab-view-items.component.html",
})
export class BindingTabViewItemsComponent {
    // >> binding-tab-view-code
    public tabSelectedIndex: number;

    constructor() {
        this.tabSelectedIndex = 1;
    }

    changeTab() {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        } else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        } else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    }
    // << binding-tab-view-code
}
