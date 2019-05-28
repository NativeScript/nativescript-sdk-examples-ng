// >> passing-parameters
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "tns-core-modules/ui/date-picker";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.html",
})
export class ModalViewComponent implements OnInit {
    public currentdate: Date;
    @ViewChild("datepicker", { read: ElementRef, static: true }) datePickerElement: ElementRef;

    constructor(private params: ModalDialogParams) {
        this.currentdate = new Date(params.context);
    }

    ngOnInit() {
        let datePicker: DatePicker = <DatePicker>this.datePickerElement.nativeElement;
        datePicker.year = this.currentdate.getFullYear();
        datePicker.month = this.currentdate.getMonth() + 1;
        datePicker.day = this.currentdate.getDate();
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    public submit() {
        let datePicker: DatePicker = <DatePicker>this.datePickerElement.nativeElement;
        console.log("date result");
        console.log(datePicker.date);
        this.params.closeCallback(datePicker.date);
    }
}
// << passing-parameters
