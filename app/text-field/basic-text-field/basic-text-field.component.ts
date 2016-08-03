import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import {DatePicker} from "ui/date-picker";
import {TextField} from "ui/text-field";
import {Page} from "ui/page";
import {setTimeout} from "timer"

@Component({
    selector: 'basic-text-field-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'text-field/basic-text-field/basic-text-field.component.html',
    styleUrls:["text-field/basic-text-field/style.css"]
})

export class BasicTextFieldComponent {


    // >> textfield-handle-submit-event
    public birthDate;
    public isButtonVisible = false;
    public isItemVisible = false;

    constructor(private page: Page) {
    }

    ngOnInit() {
        let datePicker = this.page.getViewById<DatePicker>("datePicker");
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }


    enterDate(){
        let datePicker = this.page.getViewById<DatePicker>("datePicker");
        var selectedDate = new Date(datePicker.year, datePicker.month - 1, datePicker.day);
        this.birthDate=selectedDate;
        this.isButtonVisible=false;
        this.isItemVisible=false;
    }

    showDatePicker(){
        let textFielsBDate = this.page.getViewById<TextField>("textFieldBDate");
        this.isButtonVisible=true;
        this.isItemVisible=true;

        setTimeout(function(){
            textFielsBDate.dismissSoftInput();
        },100);
        
    }

    submit(){
        let textFielsBDate = this.page.getViewById<TextField>("textFieldBDate");
        this.isButtonVisible=true;
        this.isItemVisible=true;

        setTimeout(function(){
            textFielsBDate.dismissSoftInput();
        },100);
    }

    // << textfield-handle-submit-event
}