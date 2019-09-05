// >> listview-create-code-component
import { Component } from "@angular/core";
import { ItemService, Item } from "./usage.service";
import { ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class ListViewUsageComponent {
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
