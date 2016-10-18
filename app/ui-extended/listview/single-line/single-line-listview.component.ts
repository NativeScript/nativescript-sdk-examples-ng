import { Component, ChangeDetectionStrategy, OnInit, Input }  from "@angular/core";

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

@Component({
    selector: 'grouped-listview-single-thumbs-component',
    template: `
        <Label [text]="data.name" class="h2 text-center m-t-10" verticalAlignment="center"></Label>
        <GridLayout *ngFor="let element of data.list" class="list-group-item" rows="*" columns="auto, *">
            <Image row="0" col="0" [src]="element.imageSrc" class="thumb img-circle"></Image>
            <Label row="0" col="1" [text]="element.name" verticalAlignment="center"></Label>
        </GridLayout>
    `
})
export class GroupedListviewSingleThumbdComponent {
    @Input() data: any;
}

@Component({
    selector: "single-line-listview",
    templateUrl: "ui-extended/listview/single-line/single-line-listview.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleLineListViewExampleComponent implements OnInit {
    public countries: Array<Country> = [];
    public continents: Array<any>;

    public europe: Array<Country> = [];
    public northAmerica: Array<Country> = [];
    public asia: Array<Country> = [];
    public australia: Array<Country> = [];

    onCell() {
        console.log("onCell()");
    }
    
    ngOnInit() {

        for (var i = 0; i < mockedDataArray.length; i++) {
            switch (mockedDataArray[i]["continent"].toLowerCase()) {
                case "asia":
                    this.asia.push(mockedDataArray[i]);
                    break;
                case "europe":
                    this.europe.push(mockedDataArray[i]);
                    break;
                case "north america":
                    this.northAmerica.push(mockedDataArray[i]);
                    break;
                case "australia":
                    this.australia.push(mockedDataArray[i]);
                    break;
                default:
                    break;
            }
        }

        this.continents = [ { "list": this.asia, "name": "Asia" }, 
                            { "list": this.europe, "name": "Europe"  }, 
                            { "list": this.northAmerica, "name": "North America"  }, 
                            { "list": this.australia, "name": "Australia"  }];
    }
}