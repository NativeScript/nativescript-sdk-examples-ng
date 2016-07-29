import { Component } from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'basic-search-bar-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'search-bar/basic-search-bar/basic-search-bar.component.html'
})

export class BasicSearchBarComponent {
    // >> search-bar-submit-event-code
    public onSubmit(value){
        alert("You are searching for "+value);
    }
    // << search-bar-submit-event-code
}