
// >> clear-search-bar-submit
import { Component, ChangeDetectionStrategy } from "@angular/core";
// >> (hide)
import { ObservableArray } from "data/observable-array";
// << (hide)
class DataItem {
    constructor(public name: string) { }
}

@Component({
    moduleId: module.id,
    templateUrl: "./clear-search-bar.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClearSearchBarComponent {
    private arrayItems: Array<DataItem>;
    public myItems: ObservableArray<DataItem>;
    public searchPhrase: string;

    constructor() {
        this.searchPhrase = "";
        this.arrayItems = [];
        this.myItems = new ObservableArray<DataItem>();

        this.arrayItems.push(new DataItem("United States"));
        this.arrayItems.push(new DataItem("Bulgaria"));
        this.arrayItems.push(new DataItem("Germany"));
        this.arrayItems.push(new DataItem("Denmark"));
        this.arrayItems.push(new DataItem("India"));
        this.arrayItems.push(new DataItem("Spain"));
        this.arrayItems.push(new DataItem("Italy"));

        this.myItems = new ObservableArray<DataItem>(this.arrayItems);
    }

    public onSubmit(value) {
        this.myItems = new ObservableArray<DataItem>();
        let searchValue = value.toLowerCase();
        if (value !== "") {
            for (let i = 0; i < this.arrayItems.length; i++) {
                if (this.arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                    this.myItems.push(this.arrayItems[i]);
                }
            }
        }
    }

    public onClear() {
        this.searchPhrase = "";
        this.myItems = new ObservableArray<DataItem>();

        this.arrayItems.forEach(item => {
            this.myItems.push(item);
        });
    }

}
// << clear-search-bar-submit
