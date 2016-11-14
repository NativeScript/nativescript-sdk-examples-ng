import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ActivityIndicatorExamplesComponent } from "./activity-indicator-examples.component";
import { SettingBusyComponent } from "./setting-busy/setting-busy.component";

export const routerConfig = [
    {
        path: '',
        component: ActivityIndicatorExamplesComponent
    },
    {
        path: 'setting-busy',
        component: SettingBusyComponent,
        data: { title: "Set busy property" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ActivityIndicatorExamplesComponent, SettingBusyComponent]
})

export class ActivityIndicatorExamplesModule {
    constructor() { }
}
