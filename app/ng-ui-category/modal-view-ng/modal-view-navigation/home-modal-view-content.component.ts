// tslint:disable:max-line-length
// >> first-modal-view-code
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./home-modal-view-content.component.html",
    styleUrls: ["./home-modal-view-content.component.css"]
})
export class HomeModalViewContentComponent implements OnInit {
    constructor(private _params: ModalDialogParams, private _page: Page, private router: RouterExtensions, private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {}
    onNavigate(): void {
        this.router.navigate(["../second-modal"], { relativeTo: this._activeRoute });
    }
    onClose(): void {
        this._params.closeCallback("return value");
    }
}
// << first-modal-view-code
