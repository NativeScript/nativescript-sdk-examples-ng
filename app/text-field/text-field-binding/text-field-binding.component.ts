import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'text-field-binding-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'text-field/text-field-binding/text-field-binding.component.html',
})

export class TextFieldBindingComponent {
    // >> textfield-binding-show-result
  public showAlert(result){
      alert("Text: "+result);
  }

  submit(result){
      alert("Text: "+result);
  }
  // << textfield-binding-show-result
}