// >> textfield-binding-show-result
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)

@Component({
    selector: 'text-field-binding-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
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
// << textfield-binding-show-result