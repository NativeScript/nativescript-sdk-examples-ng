import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { LocationExamplesComponent } from "./location-examples.component";
import { BasicLocationExampleComponent } from "./basic-location-example/basic-location-example";
import { LocationMonitoringExampleComponent } from "./location-monitoring-example/location-monitoring-example";

export const routerConfig = [
    {
        path: '',
        component: LocationExamplesComponent
    },
    {
        path: 'location',
        component: BasicLocationExampleComponent,
        data: { title: "Location" }
    },
    {
        path: 'location-monitoring',
        component: LocationMonitoringExampleComponent,
        data: { title: "Location monitoring" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [LocationExamplesComponent, BasicLocationExampleComponent, LocationMonitoringExampleComponent]
})

export class LocationExamplesModule {
    constructor() { }
}
