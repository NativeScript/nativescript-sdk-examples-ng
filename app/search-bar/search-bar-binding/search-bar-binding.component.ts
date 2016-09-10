import { Component} from "@angular/core";
import {Page} from "ui/page";
import { SearchBar } from "ui/search-bar";
import { isAndroid } from "platform"

@Component({
    selector: 'search-bar-binding-component',
    templateUrl: 'search-bar/search-bar-binding/search-bar-binding.component.html'
})

export class SearchBarBindingComponent {
    constructor(private page:Page){}
    public searchPhrase = "";
    public searchBarLoaded(){
        let searchbarComponent:SearchBar = <SearchBar>this.page.getViewById("searchbar");
        console.log(searchbarComponent);
        searchbarComponent.dismissSoftInput();
        if(isAndroid){
            searchbarComponent.android.clearFocus();
        }
        searchbarComponent.text=" ";
        searchbarComponent.text="";
    }
}
