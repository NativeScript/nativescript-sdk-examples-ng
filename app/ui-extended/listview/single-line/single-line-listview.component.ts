import { Component, ChangeDetectionStrategy, OnInit, Input}  from "@angular/core";

class Country {
    constructor(public name: string, public imageSrc: string, public continent: string) { }
}

var mockedDataArray = [
    new Country("Australia", "~/ui-extended/listview/single-line/images/flags/au.png", "Australia"),
    new Country("Belgium", "~/ui-extended/listview/single-line/images/flags/be.png", "Europe"),
    new Country("Bulgaria", "~/ui-extended/listview/single-line/images/flags/bg.png", "Europe"),
    new Country("Canada", "~/ui-extended/listview/single-line/images/flags/ca.png", "North America"),
    new Country("Switzerland", "~/ui-extended/listview/single-line/images/flags/ch.png", "Europe"),
    new Country("China", "~/ui-extended/listview/single-line/images/flags/cn.png", "Asia"),
    new Country("Czech Republic", "~/ui-extended/listview/single-line/images/flags/cz.png", "Europe"),
    new Country("Germany", "~/ui-extended/listview/single-line/images/flags/de.png", "Europe"),
    new Country("Spain", "~/ui-extended/listview/single-line/images/flags/es.png", "Europe"),
    new Country("Ethiopia", "~/ui-extended/listview/single-line/images/flags/et.png", "Africa"),
    new Country("Croatia", "~/ui-extended/listview/single-line/images/flags/hr.png", "Europe"),
    new Country("Hungary", "~/ui-extended/listview/single-line/images/flags/hu.png", "Europe"),
    new Country("Italy", "~/ui-extended/listview/single-line/images/flags/it.png", "Europe"),
    new Country("Jamaica", "~/ui-extended/listview/single-line/images/flags/jm.png", "North America"),
    new Country("Japan", "~/ui-extended/listview/single-line/images/flags/jp.png", "Asia"),
    new Country("Romania", "~/ui-extended/listview/single-line/images/flags/ro.png", "Europe"),
    new Country("Russia", "~/ui-extended/listview/single-line/images/flags/ru.png", "Europe"),
    new Country("United States", "~/ui-extended/listview/single-line/images/flags/us.png", "North America"),
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

    onItemTapFirstList(args) {
        console.log(args.index);
    }

    onItemTapSecondList(args) {
        console.log(args.index);
    }

    onItemTapThirdList(args) {
        console.log(args.index);
    }   
}
// << ext-listview-basic-code