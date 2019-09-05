// >> listview-customize-code
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ItemService, Item } from "../usage/usage.service";
import { ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
    moduleId: module.id,
    templateUrl: "./tips-and-tricks.component.html"
})
export class ListViewTipsComponent {
    items: Array<Item>;

    constructor(private _itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onItemTap(args: ItemEventData) {
        console.log(`Index: ${args.index}; View: ${args.view} ; Name: ${this.items[args.index].name}`);
    }

    templateSelector(item: Item, index: number, items: any) {
        return index % 2 === 0 ? "red" : "green";
    }
}
// << listview-customize-code

// >> listview-child-comp-code
// import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "sdk-child-component",
    moduleId: module.id,
    template: `
        <StackLayout orientation="horizontal" class="list-group-item">
            <Label text="This is item with ID: " textWrap="true"></Label>
            <Label [text]="myData.id" textWrap="true"></Label>
        </StackLayout>
    `
})
export class SdkChildComponent implements OnChanges {
    @Input() data: any;
    public myData: any;

    ngOnChanges(changes: SimpleChanges) {
        this.myData = changes["data"].currentValue;
    }
}
// << listview-child-comp-code
