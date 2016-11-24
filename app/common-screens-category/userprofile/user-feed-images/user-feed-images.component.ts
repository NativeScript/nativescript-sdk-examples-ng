import { Component, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { mockedDataArray } from "../mock-dataItems"

// >> ext-listview-cards-code
@Component({
    selector: "user-feed-images",
    templateUrl: "common-screens-category/userprofile/user-feed-images/user-feed-images.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFeedImagesExampleComponent {
    public countries: ObservableArray<any>;

    constructor() {
        this.countries = new ObservableArray(mockedDataArray)
    }

    public followTap() {
        console.log("follow button")
    }

    public onItemTapFirstList(args) {
        console.log(args.index);
    }

    public onItemTapSecondList(args) {
        console.log(args.index);
    }
}
// << ext-listview-cards-code