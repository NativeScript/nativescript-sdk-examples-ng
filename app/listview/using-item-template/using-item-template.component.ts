// >> using-item-template-code 
import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";

@Component({
    selector: 'item-component',
    styleUrls: ["listview/using-item-template/using-item-template.component.css"],
    template: `
        <StackLayout *ngFor="let element of data.list" class="model">
            <Label [text]="element.model" class="name"></Label>
            <Label [text]="element.speed +'mph'" class="speed"></Label>
        </StackLayout>
    `
})
export class ItemComponent {
    @Input() data: any;
}

@Component({
    selector: 'using-item-template',
    styleUrls: ["listview/using-item-template/using-item-template.component.css"],
    templateUrl: "listview/using-item-template/using-item-template.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingItemTemplateComponent {
    public manufacturers: Array<any>;

    constructor() {
        var bugatti = [{ "model": "Bugatti Chiron", "speed": "261" }, { "model": "Bugatti Veyron Super Sport", "speed": "268" }];
        var mclaren = [{ "model": "McLaren P1", "speed": "211" }, { "model": "McLaren F1", "speed": "242" }];
        var jaguar = [{ "model": "Jaguar XJ220", "speed": 217 }];
        this.manufacturers = [{ "list": bugatti }, { "list": mclaren }, { "list": jaguar }];
    }
}
// << using-item-template-code 
