// >> listview-create-code-component
import { Component, OnInit } from "@angular/core";
import { ItemService, Item } from "./usage.service";
import { ItemEventData } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class ListViewUsageComponent implements OnInit {
    items: Array<Item>;

    constructor(private _itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onItemTap(args: ItemEventData) {
        console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.items[args.index]}`);
    }
}
// << listview-create-code-component
