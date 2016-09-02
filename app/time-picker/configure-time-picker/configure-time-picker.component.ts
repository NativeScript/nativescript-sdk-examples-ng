// >> time-picker-configure-code
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
import { TimePicker } from "ui/time-picker";

@Component({
    selector: 'time-picker-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: 'time-picker/configure-time-picker/configure-time-picker.component.html'
})

export class ConfigureTimePickerComponent {

    configure(timePicker: TimePicker) {
        timePicker.hour = 9;
        timePicker.minute = 25;  
    }
}
// << time-picker-configure-code