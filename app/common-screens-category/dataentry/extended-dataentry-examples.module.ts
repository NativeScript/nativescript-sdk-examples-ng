import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ExtendedDataEntryExamplesComponent } from "./extended-dataentry-examples.component";
import { SignupDataEntryExampleComponent } from "./dataentry-signup/dataentry-signup.component";
import { SocialLoginDataEntryExampleComponent } from "./dataentry-sociallogin/dataentry-sociallogin.component";
import { WelcomeDataEntryExampleComponent } from "./dataentry-welcome/dataentry-welcome.component";

export const routerConfig = [
    {
        path: '',
        component: ExtendedDataEntryExamplesComponent
    },
    {
        path: 'dataentry-signup',
        component: SignupDataEntryExampleComponent,
        data: { title: "Dataentry signup" }
    },
    {
        path: 'dataentry-social-login',
        component: SocialLoginDataEntryExampleComponent,
        data: { title: "Dataentry social login" }
    },
    {
        path: 'dataentry-welcome',
        component: WelcomeDataEntryExampleComponent,
        data: { title: "Dataentry welcome" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ExtendedDataEntryExamplesComponent, SignupDataEntryExampleComponent, SocialLoginDataEntryExampleComponent, WelcomeDataEntryExampleComponent]
})

export class ExtendedDataentryExamplesModule {
    constructor() { }
}
