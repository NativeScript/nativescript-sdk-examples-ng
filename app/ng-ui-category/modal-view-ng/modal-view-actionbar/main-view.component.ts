// >> main-view-code
// main-view.component.ts
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "@nativescript/angular";
import { ModalRootComponent } from "./modal-root.component";

@Component({
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./main-view.component.html"
})
export class MainViewComponent implements OnInit {
    constructor(
        private _modalService: ModalDialogService,
        private _vcRef: ViewContainerRef) { }

    ngOnInit(): void { }

    onTap(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: true
        };

        this._modalService.showModal(ModalRootComponent, options)
            .then((result: string) => {
                console.log(result);
            });
    }
}
// << main-view-code
