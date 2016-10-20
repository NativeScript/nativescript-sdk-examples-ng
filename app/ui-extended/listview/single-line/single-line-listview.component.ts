import { Component, ChangeDetectionStrategy, OnInit, Input}  from "@angular/core";
import { ItemEventData } from "ui/list-view";

class Country {
    constructor(public name: string, public imageSrc: string, public continent: string) { }
}

var mockedDataArray = [
    new Country("Australia", "~/ui-extended/listview/images/flags/au.png", "Australia"),
    new Country("Belgium", "~/ui-extended/listview/images/flags/be.png", "Europe"),
    new Country("Bulgaria", "~/ui-extended/listview/images/flags/bg.png", "Europe"),
    new Country("Canada", "~/ui-extended/listview/images/flags/ca.png", "North America"),
    new Country("Switzerland", "~/ui-extended/listview/images/flags/ch.png", "Europe"),
    new Country("China", "~/ui-extended/listview/images/flags/cn.png", "Asia"),
    new Country("Czech Republic", "~/ui-extended/listview/images/flags/cz.png", "Europe"),
    new Country("Germany", "~/ui-extended/listview/images/flags/de.png", "Europe"),
    new Country("Spain", "~/ui-extended/listview/images/flags/es.png", "Europe"),
    new Country("Ethiopia", "~/ui-extended/listview/images/flags/et.png", "Africa"),
    new Country("Croatia", "~/ui-extended/listview/images/flags/hr.png", "Europe"),
    new Country("Hungary", "~/ui-extended/listview/images/flags/hu.png", "Europe"),
    new Country("Italy", "~/ui-extended/listview/images/flags/it.png", "Europe"),
    new Country("Jamaica", "~/ui-extended/listview/images/flags/jm.png", "North America"),
    new Country("Japan", "~/ui-extended/listview/images/flags/jp.png", "Asia"),
    new Country("Romania", "~/ui-extended/listview/images/flags/ro.png", "Europe"),
    new Country("Russia", "~/ui-extended/listview/images/flags/ru.png", "Europe"),
    new Country("United States", "~/ui-extended/listview/images/flags/us.png", "North America"),
]

// >> ext-listview-basic-code
@Component({
    selector: "single-line-listview",
    templateUrl: "ui-extended/listview/single-line/single-line-listview.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleLineListViewExampleComponent implements OnInit {
    public countries: Array<Country> = [];

    ngOnInit() {
        for (var i = 0; i < mockedDataArray.length; i++) {
            this.countries.push(mockedDataArray[i]);
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
}
// << ext-listview-basic-code