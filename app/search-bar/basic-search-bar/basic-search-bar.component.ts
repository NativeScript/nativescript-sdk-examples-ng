// >> search-bar-submit-event-code
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)

@Component({
    selector: 'basic-search-bar-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: 'search-bar/basic-search-bar/basic-search-bar.component.html'
})

export class BasicSearchBarComponent {
    
    public onSubmit(value){
        alert("You are searching for "+value);
    }
    
}
// << search-bar-submit-event-code