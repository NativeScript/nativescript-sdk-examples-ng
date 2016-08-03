import { Component, ChangeDetectionStrategy } from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';

class DataItem {
    constructor(public name: string) { }
}

@Component({
    selector: 'clear-search-bar-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'search-bar/clear-search-bar/clear-search-bar.component.html',
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class ClearSearchBarComponent {
    // >> clear-search-bar-submit
    private arrayItem:Array<DataItem>;
    public myItems: Array<DataItem>;
    public searchPhrase:string;

    constructor() {
        this.searchPhrase="";
        this.arrayItem=[];
        this.myItems=[];
        this.arrayItem.push(new DataItem("United States"));
        this.arrayItem.push(new DataItem("Bulgaria"));
        this.arrayItem.push(new DataItem("Germany"));
        this.arrayItem.push(new DataItem("Denmark"));
        this.arrayItem.push(new DataItem("India"));
        this.arrayItem.push(new DataItem("Spain"));
        this.arrayItem.push(new DataItem("Italy"));
        this.myItems=this.arrayItem;
    }

    public onSubmit(value){
        alert("You are searching for "+value);
        this.myItems=[];
        var searchValue = value.toLowerCase();
        if(value !== "" ){
            for(var i=0; i<this.arrayItem.length; i++){
                if(this.arrayItem[i].name.toLowerCase().indexOf(value) !== -1){
                    this.myItems.push(this.arrayItem[i]);
                }
            }
        }
    }

    public onClear(){
        this.searchPhrase="";
    }
    // << clear-search-bar-submit
}