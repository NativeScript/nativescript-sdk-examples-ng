// >> multi-line-big-code
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import { mockedDataArray, mockedCounties, Country } from "../mock-dataItems";

@Component({
    moduleId: module.id,
    templateUrl: "./multi-line-big.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineBigListViewExampleComponent implements OnInit {
    public countries: Array<Country> = [];
    public groupedCountries: Array<any> = [];
    public templateSelector = (item: any, index: number, items: any) => {
        return item.type || "cell";
    }

    ngOnInit() {
        for (let i = 0; i < mockedDataArray.length; i++) {
            this.countries.push(mockedDataArray[i]);
        }

        for (let i = 0; i < mockedCounties.length; i++) {
            this.groupedCountries.push(mockedCounties[i]);
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
}
// << multi-line-big-code
