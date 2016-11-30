// >> textview-edit-disable-code
import { Component } from "@angular/core";
import { TextView } from "ui/text-view";
import { isAndroid } from "platform";

@Component({
    moduleId: module.id,
    // >> (hide)
    styleUrls: ["ui-category/text-view/basic-text-view/style.css"],
    // << (hide)
    templateUrl: "ui-category/text-view/basic-text-view/basic-text-view.component.html"
})
export class BasicTextViewComponent {

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

    submit(args) {
        let textview: TextView = <TextView>args.object;
        if (isAndroid) {
            textview.android.clearFocus();
        }
    }
}
// << textview-edit-disable-code
