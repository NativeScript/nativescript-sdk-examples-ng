
import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

import { fruits } from "./fruits";

// >> ngfor-bind-items-code 
@Component({
    selector: 'repeat-items-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: "repeater/repeat-items/repeat-items.component.html",
})

export class NgForRepeatItemsComponent {
    public fruitList:Array<string> = [];

    constructor(){
        this.fruitList = fruits;
    }
}
// << ngfor-bind-items-code       