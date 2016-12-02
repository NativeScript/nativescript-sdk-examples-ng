// >> search-bar-submit-event-code
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./basic-search-bar.component.html"
})
export class BasicSearchBarComponent {

    public onSubmit(value) {
        alert("You are searching for " + value);
    }

}
// << search-bar-submit-event-code
