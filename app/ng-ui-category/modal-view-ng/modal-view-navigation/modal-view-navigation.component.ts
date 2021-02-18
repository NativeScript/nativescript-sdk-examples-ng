// >> opening-modal-view
import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "@nativescript/angular";
import { HomeModalViewComponent } from "./home-modal-view.component";

@Component({
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./modal-view-navigation.component.html"
})
export class ModalViewNavigationComponent {
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
}
// << opening-modal-view
