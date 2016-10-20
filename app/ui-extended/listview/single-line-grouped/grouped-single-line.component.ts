import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ItemEventData } from "ui/list-view";

class GroupTitle {
    constructor(public title: string) { }
}

class Country {
    constructor(public name: string, public imageSrc: string, public continent: string) { }
}

class GroupFooter{
    constructor(public description: string) { }   
}

var mockedDataArray = [
    new GroupTitle("Asia"),
    new Country("Japan", "~/ui-extended/listview/images/flags/jp.png", "Asia"),
    new Country("China", "~/ui-extended/listview/images/flags/cn.png", "Asia"),

    new GroupTitle("Europe"),
    new Country("Belgium", "~/ui-extended/listview/images/flags/be.png", "Europe"),
    new Country("Bulgaria", "~/ui-extended/listview/images/flags/bg.png", "Europe"),
    new Country("Switzerland", "~/ui-extended/listview/images/flags/ch.png", "Europe"),
    new Country("Czech Republic", "~/ui-extended/listview/images/flags/cz.png", "Europe"),
    new Country("Germany", "~/ui-extended/listview/images/flags/de.png", "Europe"),
    new Country("Spain", "~/ui-extended/listview/images/flags/es.png", "Europe"),
    new Country("Croatia", "~/ui-extended/listview/images/flags/hr.png", "Europe"),
    new Country("Hungary", "~/ui-extended/listview/images/flags/hu.png", "Europe"),
    new Country("Italy", "~/ui-extended/listview/images/flags/it.png", "Europe"),
    new Country("Romania", "~/ui-extended/listview/images/flags/ro.png", "Europe"),
    new Country("Russia", "~/ui-extended/listview/images/flags/ru.png", "Europe"),

    new GroupTitle("North America"),
    new Country("Canada", "~/ui-extended/listview/images/flags/ca.png", "North America"),
    new Country("United States", "~/ui-extended/listview/images/flags/us.png", "North America"),
    new Country("Jamaica", "~/ui-extended/listview/images/flags/jm.png", "North America"),

    new GroupFooter("all countries loaded!")
]

// >> grouped-single-listview-basic-code
@Component({
    selector: "grouped-single-line-listview",
    templateUrl: "ui-extended/listview/single-line-grouped/grouped-single-line.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedSingleLineListViewExampleComponent implements OnInit {
    public countries: Array<any> = [];

    ngOnInit() {
        for (var i = 0; i < mockedDataArray.length; i++) {
            this.countries.push(mockedDataArray[i]);
        }
    }

    checkType(value) {
        // get the class name e.g. GroupTitle or Country
        var className = value.constructor.name;
        return className;
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
// << grouped-single-listview-basic-code