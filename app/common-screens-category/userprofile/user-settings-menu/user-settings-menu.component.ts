import { Component, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { mockedDataArray } from "../mock-dataItems";
import { ItemEventData } from "tns-core-modules/ui/list-view";

// >> userprofile-settings-menu-code
@Component({
    moduleId: module.id,
    templateUrl: "./user-settings-menu.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSettingsMenuExampleComponent implements OnInit {
    public countries: ObservableArray<any>;

    ngOnInit() {
        this.countries = new ObservableArray(mockedDataArray);
    }

    public onItemTap(args: ItemEventData) {
        console.log(args.index);
    }
}
// << userprofile-settings-menu-code
