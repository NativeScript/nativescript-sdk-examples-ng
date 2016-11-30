import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { SearchBarExamplesComponent } from "./search-bar-examples.component";
import { BasicSearchBarComponent } from "./basic-search-bar/basic-search-bar.component";
import { ClearSearchBarComponent } from "./clear-search-bar/clear-search-bar.component";
import { SearchBarBindingComponent } from "./search-bar-binding/search-bar-binding.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: SearchBarExamplesComponent
    },
    {
        path: "basic",
        component: BasicSearchBarComponent,
        data: { title: "Basic SearchBar" }
    },
    {
        path: "clear",
        component: ClearSearchBarComponent,
        data: { title: "Clear SearchBar" }
    },
    {
        path: "binding",
        component: SearchBarBindingComponent,
        data: { title: "SearchBar property binding" }
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
        SearchBarExamplesComponent,
        BasicSearchBarComponent,
        ClearSearchBarComponent,
        SearchBarBindingComponent
    ]
})

export class SearchBarExamplesModule {
    constructor() { }
}
