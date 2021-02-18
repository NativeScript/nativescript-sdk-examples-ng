// >> search-bar-submit-event-code
import { Component } from "@angular/core";
import { SearchBar } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class UsageComponent {
    searchPhrase: string;

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
}
// << search-bar-submit-event-code
