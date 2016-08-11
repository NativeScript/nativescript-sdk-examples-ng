import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { TimePicker } from "ui/time-picker";

@Component({
    selector: 'time-picker-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'time-picker/configure-time-picker/configure-time-picker.component.html'
})

export class ConfigureTimePickerComponent {

    configure(timePicker: TimePicker) {
        // >> time-picker-configure-code
        timePicker.hour = 9;
        timePicker.minute = 25;
        // << time-picker-configure-code
    }
}