// >> search-bar-submit-event-code
import { Component } from "@angular/core";
import { SearchBar } from "ui/search-bar";

@Component({
    moduleId: module.id,
    templateUrl: "./basic-search-bar.component.html"
})
export class BasicSearchBarComponent {
    public searchPhrase: string;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }
}
// << search-bar-submit-event-code
