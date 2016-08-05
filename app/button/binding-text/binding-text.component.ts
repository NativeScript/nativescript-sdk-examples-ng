import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'button-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'button/binding-text/binding-text.component.html'
})

export class ButtonBindingTextComponent {      
   public content : string;

   constructor() {
    this.content = "Test Button";
  }
}