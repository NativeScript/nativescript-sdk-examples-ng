
import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

import { fruits } from "./fruits";

// >> ngfor-bind-items-code 
@Component({
    selector: 'ngfor-component',
    styleUrls:["ngfor/ngfor-items/repeat-items.component.css"],
    directives: [COMMON_DIRECTIVES],
    templateUrl: "ngfor/ngfor-items/repeat-items.component.html",
})

export class NgForRepeatItemsComponent {
    public fruitList:Array<string> = [];

    constructor(){
        this.fruitList = fruits;
    }
}
// << ngfor-bind-items-code       