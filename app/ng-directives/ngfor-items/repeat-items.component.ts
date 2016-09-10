
import { Component } from "@angular/core";
import { fruits } from "./fruits";

// >> ngfor-bind-items-code 
@Component({
    selector: 'ngfor-component',
    styleUrls:["ng-directives/ngfor-items/repeat-items.component.css"],
    templateUrl: "ng-directives/ngfor-items/repeat-items.component.html",
})

export class NgForRepeatItemsComponent {
    public fruitList:Array<string> = [];

    constructor(){
        this.fruitList = fruits;
    }
}
// << ngfor-bind-items-code       
