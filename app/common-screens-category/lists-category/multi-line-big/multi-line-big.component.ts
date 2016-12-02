// >> multi-line-big-code
import { Component, ChangeDetectionStrategy, OnInit, Input } from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { mockedDataArray, mockedGroupDataArray, Country } from "../mock-dataItems";

@Component({
    moduleId: module.id,
    templateUrl: "./multi-line-big.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineBigListViewExampleComponent implements OnInit {
    public countries: Array<Country> = [];

    public groupedCountries: Array<any> = [];

    ngOnInit() {
        for (let i = 0; i < mockedDataArray.length; i++) {
            this.countries.push(mockedDataArray[i]);
        }

        for (let i = 0; i < mockedGroupDataArray.length; i++) {
            this.groupedCountries.push(mockedGroupDataArray[i]);
        }
    }

    onItemTapFirstList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapSecondList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapThirdList(args: ItemEventData) {
        console.log(args.index);
    }

    onSetupItemView(args: SetupItemViewArgs) {
        // further customisation can be achived with SetupItemViewArgs
        // example for creating a variable for each third element
        args.view.context.third = (args.index % 3 === 0);
    }

    checkType(value) {
        // get the class name e.g. GroupTitle or Country
        let className = value.constructor.name;
        return className;
    }
}
// << multi-line-big-code
