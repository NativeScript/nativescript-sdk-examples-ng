// >> add-items-code
import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { View } from "ui/core/view";

@Component({
    moduleId: module.id,
    templateUrl: "./tab-view-items.component.html",
})
export class TabViewItemsComponent {
    public tabviewitems: Array<TabViewItem>;

    constructor() {
        this.tabviewitems = [];

        let innerFirstStackLayout = new StackLayout();
        let firstLabel = new Label();
        firstLabel.margin = "15";
        firstLabel.text = "Label first page";
        innerFirstStackLayout.addChild(firstLabel);

        let innerSecondStackLayout = new StackLayout();
        let secondLabel = new Label();
        secondLabel.margin = "15";
        secondLabel.text = "Label second page";
        innerSecondStackLayout.addChild(secondLabel);

        let innerThirdStackLayout = new StackLayout();
        let thirdLabel = new Label();
        thirdLabel.margin = "15";
        thirdLabel.text = "Label third page";
        innerThirdStackLayout.addChild(thirdLabel);

        this.tabviewitems.push(this.createTabItem("Tab1", innerFirstStackLayout));
        this.tabviewitems.push(this.createTabItem("Tab2", innerSecondStackLayout));
        this.tabviewitems.push(this.createTabItem("Tab3", innerThirdStackLayout));

    }

    public tabViewIndexChange(res) {
        alert("Tab View selected index: " + res);

    }

    createTabItem(title: string, view: View): TabViewItem {
        const item = new TabViewItem();
        item.title = title;
        item.view = view;
        return item;
    }
}
// << add-items-code
