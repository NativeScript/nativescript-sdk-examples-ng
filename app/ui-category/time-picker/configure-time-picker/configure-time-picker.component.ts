// >> time-picker-configure-code
import { Component } from "@angular/core";
import { TimePicker } from "ui/time-picker";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/time-picker/configure-time-picker/configure-time-picker.component.html"
})
export class ConfigureTimePickerComponent {

    configure(timePicker: TimePicker) {
        timePicker.hour = 9;
        timePicker.minute = 25;
    }
}
// << time-picker-configure-code
