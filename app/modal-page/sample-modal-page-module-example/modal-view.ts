import { Component, OnInit, NgModule } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";

// >> passing-parameters
@Component({
    selector: "modal-view",
    templateUrl: "./modal-page/sample-modal-page-module-example/modal-view.html",
})
export class ModalViewComponent implements OnInit {
    public currentdate: Date;

    constructor(private params: ModalDialogParams, private page: Page) {
        this.currentdate = new Date(params.context);
    }

    ngOnInit() {
        let datePicker: DatePicker = <DatePicker>this.page.getViewById<DatePicker>("datePicker");
        datePicker.year = this.currentdate.getFullYear();
        datePicker.month = this.currentdate.getMonth() + 1;
        datePicker.day = this.currentdate.getDate();
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    public submit() {
        let datePicker: DatePicker = <DatePicker>this.page.getViewById<DatePicker>("datePicker");
        this.params.closeCallback(datePicker.date);
    }
}
// << passing-parameters
