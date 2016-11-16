import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ApplicationExamplesComponent } from "./application-examples.component";
import { AppCheckingTargetExampleComponent } from "./app-checking-target/app-checking-target.component";
import { AppUsingAndroidExampleComponent } from "./app-using-android-specifics/app-using-android-specifics.component";
import { AppUsingIosExampleComponent } from "./app-using-ios-specifics/app-using-ios-specifics.component";

export const routerConfig = [
    {
        path: '',
        component: ApplicationExamplesComponent
    },
    {
        path: 'check-target',
        component: AppCheckingTargetExampleComponent,
        data: { title: "Check The Target Platform" }
    },
    {
        path: 'using-android',
        component: AppUsingAndroidExampleComponent,
        data: { title: "Using Android Specifics" }
    },
    {
        path: 'using-ios',
        component: AppUsingIosExampleComponent,
        data: { title: "Using iOS Specifics" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ApplicationExamplesComponent, AppCheckingTargetExampleComponent, AppUsingAndroidExampleComponent, AppUsingIosExampleComponent]
})

export class ApplicationExamplesModule {
    constructor() { }
}
