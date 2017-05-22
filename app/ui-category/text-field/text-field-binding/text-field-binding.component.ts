// >> textfield-binding-show-result
import { Component } from "@angular/core";
import { TextField  } from "ui/text-field";

@Component({
    moduleId: module.id,
    templateUrl: "./text-field-binding.component.html",
    styleUrls: ["./../text-field.style.css"]
})
export class TextFieldBindingComponent {
    public firstTx: string = "";

    public onTextChange(args) {
        let textField = <TextField>args.object;

        console.log("onTextChange");
        this.firstTx = textField.text;
    }

    public onReturn(args) {
        let textField = <TextField>args.object;

        console.log("onReturn");
        this.firstTx = textField.text;
    }
}
// << textfield-binding-show-result
