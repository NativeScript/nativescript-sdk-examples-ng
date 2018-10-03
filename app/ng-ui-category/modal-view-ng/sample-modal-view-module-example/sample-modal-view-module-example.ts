import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Component, ViewContainerRef } from "@angular/core";
import { ModalViewComponent } from "./modal-view";

const millisecondsInADay = 24 * 60 * 60 * 1000;
const dayDiff = (firstDate, secondDate) =>
    Math.round((secondDate - firstDate) / millisecondsInADay);

@Component({
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./sample-modal-view-module-example.html"
})
export class SampleModalViewModuleExampleComponent {
    public startDate: Date;
    public endDate: Date;
    public selectedDate: Date;
    public days: number;

    constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
        this.resetDates();
    }

    getStartDate() {
        this.createModelView().then(result => {
            if (this.validate(result)) {
                this.startDate = result;
            }
        }).catch(error => this.handleError(error));
    }

    getEndDate() {
        this.createModelView().then(result => {
            if (this.validate(result)) {
                this.endDate = result;
            }
        }).catch(error => this.handleError(error));
    }

    // >> returning-result
    getDate() {
        this.createModelView().then(result => {
            if (this.validate(result)) {
                this.selectedDate = result;
            }
        }).catch(error => this.handleError(error));
    }

    private createModelView(): Promise<any> {
        const today = new Date();
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: today.toDateString(),
            fullscreen: false,
        };

        return this.modalService.showModal(ModalViewComponent, options);
    }
    // << returning-result

    countDays() {
        if (this.startDate.getTime() > this.endDate.getTime()) {
            alert("Enter correct end date");
        } else {
            this.days = dayDiff(this.startDate, this.endDate);
        }
    }

    private resetDates() {
        this.startDate = new Date("2015-12-12");
        this.endDate = new Date();
        this.selectedDate = new Date();
        this.days = dayDiff(this.startDate, this.endDate);
    }

    private validate(result: any) {
        return !!result;
    }

    private handleError(error: any) {
        this.resetDates();
        alert("Please try again!");
        console.dir(error);
    }
}
