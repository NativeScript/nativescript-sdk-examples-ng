import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";

@Component({
    selector: "SecondModalViewContent",
    moduleId: module.id,
    templateUrl: "./second-modal-view-content.component.html",
    styleUrls: ["./second-modal-view-content.component.css"]
})
export class SecondModalViewContentComponent implements OnInit {
    constructor(private _params: ModalDialogParams, private _page: Page, private router:RouterExtensions) { }

    ngOnInit(): void {
        // if you do not have ActionBar, you can change the status bar background like this
        // this._page.backgroundColor = "chocolate";
    }
    onBack(): void{
        this.router.back();
    }
    onClose(): void {
        this._params.closeCallback("return value");
    }
}