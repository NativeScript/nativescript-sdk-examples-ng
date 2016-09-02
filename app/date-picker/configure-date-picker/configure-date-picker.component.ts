// >> date-picker-configure-code
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
import { DatePicker } from "ui/date-picker";

@Component({
    selector: 'date-picker-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
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