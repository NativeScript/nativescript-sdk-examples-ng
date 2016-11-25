// >> using-item-template-code 
import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";

@Component({
    selector: 'item-component',
    template: `
        <StackLayout class="list-group-item" *ngFor="let element of data.list">
            <Label [text]="element.model"></Label>
            <Label [text]="element.speed +'mph'"></Label>
        </StackLayout>
    `
})
export class ItemComponent {
    @Input() data: any;
}

@Component({
    selector: 'using-item-template',
    templateUrl: "ui-category/listview/using-item-template/using-item-template.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingItemTemplateComponent {
    public manufacturers: Array<any>;

    constructor() {
        let bugatti = [{ "model": "Bugatti Chiron", "speed": "261" }, { "model": "Bugatti Veyron Super Sport", "speed": "268" }];
        let mclaren = [{ "model": "McLaren P1", "speed": "211" }, { "model": "McLaren F1", "speed": "242" }];
        let jaguar = [{ "model": "Jaguar XJ220", "speed": 217 }];
        let bmw = [{ "model": "BMW M6 Huricane RR", "speed": 230 }, { "model": "BMW X5 M G-Power Typhon", "speed": 260 }];
        this.manufacturers = [{ "list": bugatti }, { "list": mclaren }, { "list": jaguar }, { "list": bmw }];
    }
}
// << using-item-template-code 
