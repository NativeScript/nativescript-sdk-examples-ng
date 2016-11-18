
import { Component } from "@angular/core";
import { fruits } from "./fruits";

// >> ngfor-bind-items-code 
@Component({
    selector: 'ngfor-directive',
    templateUrl: "ui-category/ng-directives/ngfor-directive/ngfor-directive.component.html",
})

export class NgForComponent {
    public fruitList:Array<string> = [];

    constructor(){
        this.fruitList = fruits;
    }
}
// << ngfor-bind-items-code       
