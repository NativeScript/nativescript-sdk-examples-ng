
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
import { fruits } from "./fruits";

// >> ngfor-bind-items-code 
@Component({
    selector: 'ngfor-component',
    styleUrls:["ng-directives/ngfor-items/repeat-items.component.css"],
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: "ng-directives/ngfor-items/repeat-items.component.html",
})

export class NgForRepeatItemsComponent {
    public fruitList:Array<string> = [];

    constructor(){
        this.fruitList = fruits;
    }
}
// << ngfor-bind-items-code       