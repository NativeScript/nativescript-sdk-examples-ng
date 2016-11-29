// >> add-items-code
import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";

@Component({
    templateUrl: "ui-category/tab-view/tab-view-items/tab-view-items.component.html",
})
export class TabViewItemsComponent {
    public tabviewitems: Array<any>;

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

        this.tabviewitems.push({ "title": "Tab1", "view": innerFirstStackLayout });
        this.tabviewitems.push({ "title": "Tab2", "view": innerSecondStackLayout });
        this.tabviewitems.push({ "title": "Tab3", "view": innerThirdStackLayout });

    }

    public tabViewIndexChange(res) {
        alert("Tab View selected index: " + res);

    }
}
// << add-items-code
