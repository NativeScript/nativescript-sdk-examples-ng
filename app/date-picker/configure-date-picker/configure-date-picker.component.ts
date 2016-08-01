import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";

@Component({
    selector: 'date-picker-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'date-picker/configure-date-picker/configure-date-picker.component.html'
})

export class ConfigureDatePickerComponent implements OnInit {

    constructor(private page: Page) {
    }

    ngOnInit() {
        let datePicker = this.page.getViewById<DatePicker>("datePicker");
        // >> date-picker-configure-code
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
        // << date-picker-configure-codeФ
    }
}