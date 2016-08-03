import {Component, ViewChild, ElementRef} from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label"

@Component({
    selector: 'text-field-binding-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'text-field/text-field-binding/text-field-binding.component.html',
})

export class TextFieldBindingComponent {
  public showAlert(result){
      alert("Text: "+result);
  }
  submit(result){
      alert("Text: "+result);
  }
}