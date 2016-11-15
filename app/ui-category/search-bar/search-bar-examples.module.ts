import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { SearchBarExamplesComponent } from "./search-bar-examples.component";
import { BasicSearchBarComponent } from "./basic-search-bar/basic-search-bar.component";
import { ClearSearchBarComponent } from "./clear-search-bar/clear-search-bar.component";
import { SearchBarBindingComponent } from "./search-bar-binding/search-bar-binding.component";

export const routerConfig = [
    {
        path: '',
        component: SearchBarExamplesComponent
    },
    {
        path: 'basic',
        component: BasicSearchBarComponent,
        data: { title: "Basic SearchBar" }
    },
    {
        path: 'clear',
        component: ClearSearchBarComponent,
        data: { title: "Clear SearchBar" }
    },
    {
        path: 'binding',
        component: SearchBarBindingComponent,
        data: { title: "SearchBar property binding" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [SearchBarExamplesComponent, BasicSearchBarComponent, ClearSearchBarComponent, SearchBarBindingComponent]
})

export class SearchBarExamplesModule {
    constructor() { }
}
