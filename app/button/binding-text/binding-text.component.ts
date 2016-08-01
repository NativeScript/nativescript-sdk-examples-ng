import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import observable = require("data/observable");

@Component({
    selector: 'button-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'button/binding-text/binding-text.component.html'
})

export class ButtonBindingTextComponent {      
   model : observable.Observable;

   constructor() {
    this.model = new observable.Observable();
    this.model.set("content", "Button Text");
  }
}