// tslint:disable:max-line-length
// >> modal-view-actionbar-code
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.component.html",
    styleUrls: ["./modal-view.component.css"]
})
export class ModalViewActionBarComponent implements OnInit {
    constructor(private _params: ModalDialogParams, private _page: Page, private router: RouterExtensions, private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {}
    onClose(): void {
        this._params.closeCallback("return value");
    }
}
// << modal-view-actionbar-code
