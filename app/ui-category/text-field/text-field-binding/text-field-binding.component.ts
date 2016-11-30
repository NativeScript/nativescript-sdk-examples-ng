// >> textfield-binding-show-result
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/text-field/text-field-binding/text-field-binding.component.html",
    styleUrls: ["ui-category/text-field/text-field.style.css"]
})
export class TextFieldBindingComponent {

  public showAlert(result) {
      alert("Text: " + result);
  }

  submit(result) {
      alert("Text: " + result);
  }

}
// << textfield-binding-show-result
