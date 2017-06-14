import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Component, ViewContainerRef } from "@angular/core";
import { DatePicker } from "ui/date-picker";
import { ModalViewComponent } from "./modal-view";

@Component({
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./sample-modal-page-module-example.html"
})
export class SampleModalPageModuleExampleComponent {
    public startDate: Date;
    public endDate: Date;
    public date: Date;
    public days: number;
    public weekday: string;
    public weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    constructor(private _modalService: ModalDialogService, private vcRef: ViewContainerRef) {
        let oneDay = 24 * 60 * 60 * 1000;
        this.startDate = new Date("2015-12-12");
        this.endDate = new Date();
        this.date = new Date();
        this.days = Math.round(Math.abs((this.startDate.getTime() - this.endDate.getTime()) / (oneDay)));
        this.weekday = this.weekdays[this.date.getDay()];
    }

    createModelView(args) {
        let that = this;
        let currentDate = new Date();
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: currentDate.toDateString(),
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(ModalViewComponent, options)
            .then((dateresult: Date) => {
                console.log("date result " + dateresult);
                // >> (hide)
                if (args === "start") {
                    this.startDate = dateresult;
                } else if (args === "end") {
                    this.endDate = dateresult;
                } else if (args === "findTheDay") {
                    this.date = dateresult;
                    this.weekday = this.weekdays[this.date.getDay()];
                }
                // << (hide)
            });
        // << returning-result
    }

    findDays() {
        let oneDay = 24 * 60 * 60 * 1000;
        if (this.startDate.getTime() > this.endDate.getTime()) {
            alert("Enter correct end date");
        } else {
            let tmpDays = Math.round(Math.abs((this.startDate.getTime() - this.endDate.getTime()) / (oneDay)));
            console.log(tmpDays);
            this.days = tmpDays;
        }
    }
}

