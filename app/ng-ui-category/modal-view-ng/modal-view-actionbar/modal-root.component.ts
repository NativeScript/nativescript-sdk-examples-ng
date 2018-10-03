// >> modal-root-code
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-root.component.html"
})
export class ModalRootComponent implements OnInit {
    constructor(
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this._routerExtensions.navigate(["modal-view"], { relativeTo: this._activeRoute });
    }
}
// << modal-root-code
