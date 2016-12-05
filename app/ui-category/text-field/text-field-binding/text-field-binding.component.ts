// tslint:disable:no-access-missing-member
// >> textfield-binding-show-result
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./text-field-binding.component.html",
    styleUrls: ["./../text-field.style.css"]
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
