import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ExtendedListViewExamplesComponent } from "./extended-listview-examples.component";
import { CardsListViewExampleComponent } from "./cards/cards-listview.component";
import { HeaderWithMapExampleComponent } from "./header-with-map/header-with-map.component";
import { HorizontalScrollingExampleComponent } from "./horizontal-scrolling/horizontal-scrolling.component";
import { MultiLineListViewExampleComponent } from "./multi-line/multi-line.component";
import { MultiLineBigListViewExampleComponent } from "./multi-line-big/multi-line-big.component";
import { MultiLineGroupedListViewExampleComponent } from "./multi-line-grouped/multi-line-grouped.component";
import { SingleLineListViewExampleComponent } from "./single-line/single-line-listview.component";
import { GroupedSingleLineListViewExampleComponent } from "./single-line-grouped/grouped-single-line.component";
import { TwoLineListViewExampleComponent } from "./two-line/two-line-listview.component";
import { GroupedTwoLinesListViewExampleComponent } from "./two-lines-grouped/grouped-two-lines.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ExtendedListViewExamplesComponent
    },
    {
        path: "cards-listview",
        component: CardsListViewExampleComponent,
        data: { title: "Cards listview" }
    },
    {
        path: "header-with-map",
        component: HeaderWithMapExampleComponent,
        data: { title: "Header with map" }
    },
    {
        path: "horizontal-scrolling",
        component: HorizontalScrollingExampleComponent,
        data: { title: "Horizontal scrolling" }
    },
    {
        path: "multi-line",
        component: MultiLineListViewExampleComponent,
        data: { title: "Multi line" }
    },
    {
        path: "multi-line-big",
        component: MultiLineBigListViewExampleComponent,
        data: { title: "Multi line big" }
    },
    {
        path: "multi-line-grouped",
        component: MultiLineGroupedListViewExampleComponent,
        data: { title: "Multi line grouped" }
    },
    {
        path: "single-line-listview",
        component: SingleLineListViewExampleComponent,
        data: { title: "Single line listview" }
    },
    {
        path: "grouped-single-line",
        component: GroupedSingleLineListViewExampleComponent,
        data: { title: "Grouped single line" }
    },
    {
        path: "two-line-listview",
        component: TwoLineListViewExampleComponent,
        data: { title: "Two line listview" }
    },
    {
        path: "grouped-two-lines",
        component: GroupedTwoLinesListViewExampleComponent,
        data: { title: "Grouped two lines" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ExtendedListViewExamplesComponent,
        CardsListViewExampleComponent,
        HeaderWithMapExampleComponent,
        HorizontalScrollingExampleComponent,
        MultiLineListViewExampleComponent,
        MultiLineBigListViewExampleComponent,
        MultiLineGroupedListViewExampleComponent,
        SingleLineListViewExampleComponent,
        GroupedSingleLineListViewExampleComponent,
        TwoLineListViewExampleComponent,
        GroupedTwoLinesListViewExampleComponent
    ]
})

export class ExtendedListViewExamplesModule {
    constructor() { }
}
