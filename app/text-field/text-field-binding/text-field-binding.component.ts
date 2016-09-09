// >> textfield-binding-show-result
import { Component } from "@angular/core";

@Component({
    selector: 'text-field-binding-component',
    templateUrl: 'text-field/text-field-binding/text-field-binding.component.html',    
    styleUrls: ["text-field/text-field.style.css"]
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
