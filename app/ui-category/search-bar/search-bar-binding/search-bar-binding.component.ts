import { Component } from "@angular/core";
import { Page } from "ui/page";
import { SearchBar } from "ui/search-bar";
import { isAndroid } from "platform";

@Component({
    moduleId: module.id,
    templateUrl: "./search-bar-binding.component.html"
})
export class SearchBarBindingComponent {
    public searchPhrase = "";

    constructor(private page: Page) { }

    public searchBarLoaded() {
        let searchbarComponent: SearchBar = <SearchBar>this.page.getViewById("searchbar");
        console.log(searchbarComponent);
        searchbarComponent.dismissSoftInput();
        if (isAndroid) {
            searchbarComponent.android.clearFocus();
        }
        searchbarComponent.text = "";
    }
}
