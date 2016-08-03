// >> using-item-template-code 
import { Component, ChangeDetectionStrategy, Input, ElementRef }  from "@angular/core";
import { SetupItemViewArgs, ListViewComponent } from "nativescript-angular/directives";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)

@Component({
    selector: 'item-component',
    styleUrls:["listview/using-item-template/using-item-template.component.css"],
    template: `
        <StackLayout *ngFor="let element of data.list" class="model">
            <Label [text]="element.model" class="name"></Label>
            <Label [text]="element.speed +'mph'" class="speed"></Label>
        </StackLayout>
    `
})
export class ItemComponent {
    @Input() data: any;
    constructor() { }
}

@Component({
    selector: 'using-item-template',
    styleUrls:["listview/using-item-template/using-item-template.component.css"],
    directives: [COMMON_DIRECTIVES, ItemComponent],
    template: `
        <GridLayout rows="50, *" exampleTitle>
            <Label text="Top Cars" row="0" class="title" textWrap="true"></Label>
            <ListView [items]="manufacturers" row="1" >
                <template let-item="item">
                    <item-component [data]="item"></item-component>
                </template>
            </ListView>
        </GridLayout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingItemTemplateComponent {
    public manufacturers: Array<any>;
    private counter: number;

    constructor() {
        var bugatti = [{"model": "Bugatti Chiron", "speed" : "261"}, {"model": "Bugatti Veyron Super Sport", "speed" : "268"}];
        var mclaren = [{"model": "McLaren P1", "speed" : "211"}, {"model": "McLaren F1", "speed" : "242"}];
        var jaguar = [{"model": "Jaguar XJ220", "speed": 217}];
        this.manufacturers = [{"list": bugatti}, {"list": mclaren}, {"list": jaguar}];
    }
}
// << using-item-template-code 


