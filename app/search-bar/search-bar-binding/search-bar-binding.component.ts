import { Component} from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';

class DataItem {
    constructor(public name: string) { }
}

@Component({
    selector: 'search-bar-binding-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'search-bar/search-bar-binding/search-bar-binding.component.html'
})

export class SearchBarBindingComponent {

}