// >> bottom-navigation-properties-ng
import { Component } from "@angular/core";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Color } from "tns-core-modules/color/color";
import { EventData } from "tns-core-modules/data/observable";
import { BottomNavigation, TabStrip, TabStripItem, TabContentItem } from "tns-core-modules/ui/bottom-navigation";

@Component({
    moduleId: module.id,
    templateUrl: "./properties.component.html"
})
export class PropertiesComponent {
    onBottomNavLoaded(args: EventData) {
        const bottomNav = args.object as BottomNavigation;

        /*
            Using the items property to assign array of TabContentItem componentns
            Note: The number of TabContentItem components should be equal to the number of TabStripItem components
        */
        const tabContentItemsArray: Array<TabContentItem> = this.createTabsContentArray();
        bottomNav.items = tabContentItemsArray;

        /*
            Using the tabStrip property to createa a TabStrip with multiple TabStripItems (tabs)
            Note: The number of TabStripItem components should be equal to the number of TabContentItem components
        */
        const tabStrip = this.createTabStrip();
        bottomNav.tabStrip = tabStrip;

        /*
            Using the selectedIndex property
        */
        bottomNav.selectedIndex = 1;

        console.log(bottomNav.nativeView); // === bottomNav.android | bottomNav.ios
    }

    createTabStrip() {
        const tabStrip: TabStrip = new TabStrip();
        tabStrip.iosIconRenderingMode = "automatic"; // iOS only (automatic is the default value)
        const tabStripItems: Array<TabStripItem> = [];
        for (let index = 0; index < 3; index++) {
            const item: TabStripItem = new TabStripItem();
            /*
                Using TabStripItem title property
            */
            item.title = `Tab ${index}`;
            /*
                Using TabStripItem title property
            */
            item.iconSource = index === 0
                ? "res://baseline_home_black_24pt"
                : (index === 1
                    ? "res://baseline_account_balance_black_24pt"
                    : "res://baseline_search_black_24pt");
            tabStripItems.push(item);
        }
        tabStrip.items = tabStripItems;

        return tabStrip;
    }

    createTabsContentArray() {
        const arr: Array<TabContentItem> = [];
        for (let index = 0; index < 3; index++) {
            const item: TabContentItem = new TabContentItem();
            // The createContent is a custom method that returns a StackLayout with a Label as a chils
            item.view = this.createContent(index);
            arr.push(item);
        }

        return arr;
    }
    // >> (hide)
    createContent(index: number) {
        const label = new Label();
        label.text = `${index === 0 ? "Home" : (index === 1 ? "Account" : "Search")}`;
        label.className = "h2 text-center";
        label.color = new Color("red");
        const stack = new StackLayout();
        stack.verticalAlignment = "middle";
        stack.addChild(label);

        return stack;
    }
    // << (hide)
}
// << bottom-navigation-properties-ng
