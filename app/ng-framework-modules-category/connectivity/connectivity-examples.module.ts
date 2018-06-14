import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ConnectivityExamplesComponent } from "./connectivity-examples.component";
import { UsingConnectivityExampleComponent } from "./using-connectivity/using-connectivity.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ConnectivityExamplesComponent
    },
    {
        path: "using-connectivity",
        component: UsingConnectivityExampleComponent,
        data: { title: "Using connectivity" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [ConnectivityExamplesComponent, UsingConnectivityExampleComponent]
})

export class ConnectivityExamplesModule {
    constructor() { }
}
