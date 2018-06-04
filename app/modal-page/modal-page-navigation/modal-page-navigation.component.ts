import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";

import { HomeModalViewComponent } from "./home-modal-view.component";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./modal-page-navigation.component.html"
})
export class ModalPageNavigationComponent implements OnInit {
    constructor(
        private _modalService: ModalDialogService,
        private _vcRef: ViewContainerRef) { }

    ngOnInit(): void { }
    // >> opening-modal-page
    onTap(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: true
        };

        this._modalService.showModal(HomeModalViewComponent, options)
            .then((result: string) => {
                console.log(result);
            });
    }
    // << opening-modal-page
}
