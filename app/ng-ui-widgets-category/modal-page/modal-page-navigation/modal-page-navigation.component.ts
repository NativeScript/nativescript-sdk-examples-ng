 // >> opening-modal-page
import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { HomeModalViewComponent } from "./home-modal-view.component";

@Component({
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./modal-page-navigation.component.html"
})
export class ModalPageNavigationComponent {
    constructor(private _modalService: ModalDialogService, private _vcRef: ViewContainerRef) { }

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
