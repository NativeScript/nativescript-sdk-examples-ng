// >> listview-customize-code 
import { Component, ChangeDetectionStrategy, ElementRef }  from "@angular/core";
import { SetupItemViewArgs } from "nativescript-angular/directives";

class Item {
    constructor(public name: string) { }
}

var items = ["ALL Heroes (header)", "Razor", "Rubick", "Phantom Lancer", "Legion Commander", "Brewmaster", "Outworld Devourer",
"Sniper", "Lina", "Sven", "Visage","Undying", "Tiny", "Tidehunter", "Puck", "Ursa", 
"Magnus", "Earthshaker", "Windrunner", "Techies", "Crystal Maiden","Batrider", "Riki", "Invoker", "Venomancer", 
"Timbersaw","Wraithking", "Anti Mage", "Ancient Apparition", "Troll Warlord", "Lich", "Enchantress", "Bristleback", "Pudge", "(footer)"];

@Component({
    selector: "customizing-listview",
    styleUrls:["listview/customizing-listview/customizing-listview.component.css"],
    templateUrl: "listview/customizing-listview/customizing-listview.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizingListViewComponent {
    public dataItems: Array<Item>;

    constructor(public elementRef: ElementRef) {
        this.dataItems = [];

        for (var i = 0; i < items.length; i++) {
            this.dataItems.push(new Item(items[i]));
        }
    }

    onSetupItemView(args: SetupItemViewArgs) { 
        args.view.context.third = (args.index % 3 === 0);
        args.view.context.header = ((args.index + 1) % items.length === 1);
        args.view.context.footer = (args.index + 1 === items.length);
    }
}
// << listview-customize-code 
