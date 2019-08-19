// >> tabs-properties-ng
import { Component } from "@angular/core";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Color } from "tns-core-modules/color/color";
import { EventData } from "tns-core-modules/data/observable";
import { Tabs, TabStrip, TabStripItem, TabContentItem } from "tns-core-modules/ui/tabs";

@Component({
    moduleId: module.id,
    templateUrl: "./properties.component.html"
})
export class PropertiesComponent {

    onTabsLoaded(args: EventData) {
        const tabs = args.object as Tabs;

        /*
            Using the items property to assign array of TabContentItem componentns
            Note: The number of TabContentItem components should be equal to the number of TabStripItem components
        */
        const tabContentItemsArray: Array<TabContentItem> = this.createTabsContentArray();
        tabs.items = tabContentItemsArray;

        /*
            Using the tabStrip property to createa a TabStrip with multiple TabStripItems (tabs)
            Note: The number of TabStripItem components should be equal to the number of TabContentItem components
        */
        const tabStrip = this.createTabStrip();
        tabs.tabStrip = tabStrip;

        /*
            Using the Tabs properties
        */
        tabs.selectedIndex = 1;
        tabs.swipeEnabled = true;
        tabs.offscreenTabLimit = 1;
        tabs.tabsPosition = "top";

        console.log(tabs.nativeView);
    }
    // << tabs-properties-tsc

    createTabStrip() {
        const tabStrip: TabStrip = new TabStrip();
        tabStrip.iosIconRenderingMode = "automatic"; // iOS only (automatic is the default value)
        const tabStripItems: Array<TabStripItem> = [];
        for (let index = 0; index < 5; index++) {
            const item: TabStripItem = new TabStripItem();
            /*
                Using TabStripItem title property
            */
            item.title = `Tab ${index + 1}`;
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
        for (let index = 0; index < 5; index++) {
            const item: TabContentItem = new TabContentItem();
            // The createContent is a custom method that returns a StackLayout with a Label as a chils
            item.content = this.createContent(index);
            arr.push(item);
        }

        return arr;
    }

    // >> (hide)
    createContent(index: number) {
        const label = new Label();
        label.text = `Content ${index + 1}`;
        label.className = "h2 text-center";
        label.color = new Color("red");
        label.id = "label";
        const stack = new StackLayout();
        stack.verticalAlignment = "middle";
        stack.addChild(label);

        stack.on("loaded", (args) => {
            console.log(`Loaded [${(<any>args.object).getViewById("label").text}]`);
        });

        stack.on("unloaded", (args) => {
            console.log(`UNLOADED [${(<any>args.object).getViewById("label").text}]`);
        });

        return stack;
    }
    // << (hide)
}
// << tabs-properties-ng
