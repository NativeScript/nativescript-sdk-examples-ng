// >> second-modal-view-code
import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    moduleId: module.id,
    templateUrl: "./second-modal-view-content.component.html",
    styleUrls: ["./second-modal-view-content.component.css"]
})
export class SecondModalViewContentComponent  {
    constructor(private _params: ModalDialogParams, private router: RouterExtensions) { }

    onBack(): void {
        this.router.back();
    }
    onClose(): void {
        this._params.closeCallback("return value");
    }
}
// << second-modal-view-code
