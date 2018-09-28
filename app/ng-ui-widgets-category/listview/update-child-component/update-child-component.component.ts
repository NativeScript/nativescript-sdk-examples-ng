// >> update-child-component-code
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "sdk-child-component",
    moduleId: module.id,
    template: `
        <StackLayout orientation="horizontal">
            <Label text="This is item with ID: " class="m-16" textWrap="true"></Label>
            <Label [text]="myData.id" textWrap="true"></Label>
        </StackLayout>
    `
})
export class ItemComponent implements OnChanges {
    @Input() data: any;
    public myData: any;

    ngOnChanges(changes: SimpleChanges) {
        this.myData = changes["data"].currentValue;
    }
}

@Component({
    styleUrls: ["./update-child-component.component.css"],
    moduleId: module.id,
    templateUrl: "./update-child-component.component.html"
})
export class UpdateChildComponent {
    public items: Array<any> = [];

    constructor() {
        for (let index = 0; index < 20; index++) {
            this.items.push({ "id": index + 1 });
        }
    }
}
// << update-child-component-code
