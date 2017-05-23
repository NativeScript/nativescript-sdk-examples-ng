import { Component } from "@angular/core";
import { SearchBar } from "ui/search-bar";
import { isAndroid } from "platform";

@Component({
    moduleId: module.id,
    templateUrl: "./search-bar-binding.component.html"
})
export class SearchBarBindingComponent {
    searchPhrase: string = "";

    public searchBarLoaded(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.dismissSoftInput();

        if (isAndroid) {
            searchBar.android.clearFocus();
        }

        searchBar.text = "";
    }

    public onTextChange(args) {
        let searchBar = <SearchBar>args.object;
        this.searchPhrase = "Current search query: " + searchBar.text;
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        this.searchPhrase = "Submited search query: " + searchBar.text;
    }
}
