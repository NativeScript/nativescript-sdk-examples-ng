// >> second-modal-page-code
import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    templateUrl: "./second-modal-view-content.component.html",
    styleUrls: ["./second-modal-view-content.component.css"]
})
export class SecondModalViewContentComponent implements OnInit {
    constructor(private _params: ModalDialogParams, private _page: Page, private router: RouterExtensions) { }

    ngOnInit(): void {}

    onBack(): void {
        this.router.back();
    }
    onClose(): void {
        this._params.closeCallback("return value");
    }
}
// << second-modal-page-code
