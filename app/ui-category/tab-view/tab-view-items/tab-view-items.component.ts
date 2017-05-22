// >> add-items-code
import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

@Component({
    moduleId: module.id,
    templateUrl: "./tab-view-items.component.html",
})
export class TabViewItemsComponent {
    public titleAndIcon: any = { title: 'Icon', iconSource: 'res://icon' };

    public onIndexChanged(args) {
        let tabView = <TabView>args.object;
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
    }
}
// << add-items-code
