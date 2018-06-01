import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";

@Component({
    selector: "HomeModalViewContent",
    moduleId: module.id,
    templateUrl: "./home-modal-view-content.component.html",
    styleUrls: ["./home-modal-view-content.component.css"]
})
export class HomeModalViewContentComponent implements OnInit {
    constructor(private _params: ModalDialogParams, private _page: Page, private router:RouterExtensions, private _activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
        // if you do not have ActionBar, you can change the status bar background like this
        // this._page.backgroundColor = "chocolate";
    }
    onNavigate(): void {
        this.router.navigate(["../second-modal"], { relativeTo: this._activeRoute })
    }
    onClose(): void {
        this._params.closeCallback("return value");
    }
}