import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ConnectivityExamplesComponent } from "./connectivity-examples.component";
import { UsingConnectivityExampleComponent } from "./using-connectivity/using-connectivity.component";

export const routerConfig = [
    {
        path: '',
        component: ConnectivityExamplesComponent
    },
    {
        path: 'using-connectivity',
        component: UsingConnectivityExampleComponent,
        data: { title: "Using connectivity" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ConnectivityExamplesComponent, UsingConnectivityExampleComponent]
})

export class ConnectivityExamplesModule {
    constructor() { }
}
