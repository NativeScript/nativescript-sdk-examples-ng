import { Component } from "@angular/core";

@Component({
    selector: 'button-component',
    templateUrl: 'button/binding-text/binding-text.component.html'
})

export class ButtonBindingTextComponent {      
   public content : string;

   constructor() {
    this.content = "Test button";
  }
}
