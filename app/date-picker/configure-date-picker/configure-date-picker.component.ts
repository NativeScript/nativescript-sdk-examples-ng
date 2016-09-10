// >> date-picker-configure-code
import { Component } from "@angular/core";
import { DatePicker } from "ui/date-picker";

@Component({
    selector: 'date-picker-component',
    templateUrl: 'date-picker/configure-date-picker/configure-date-picker.component.html'
})

export class ConfigureDatePickerComponent {
    configure(datePicker: DatePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }
}
// << date-picker-configure-code
