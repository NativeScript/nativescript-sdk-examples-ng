// >> textview-edit-disable-code
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class UsageComponent {

    public editState = true;
    public tvtext = "";
    public buttonText = "Disable editting of TextView";

    disableTextView() {
        if (this.editState) {
            this.editState = false;
            this.buttonText = "Enable editting of TextView";
        } else {
            this.editState = true;
            this.buttonText = "Disable editting of TextView";
        }
    }

    showText() {
        alert("Text: " + this.tvtext);
    }
}
// << textview-edit-disable-code
