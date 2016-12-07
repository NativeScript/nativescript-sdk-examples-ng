import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ExtendedDataEntryExamplesComponent } from "./extended-dataentry-examples.component";
import { SignupDataEntryExampleComponent } from "./dataentry-signup/dataentry-signup.component";
import { SocialLoginDataEntryExampleComponent } from "./dataentry-sociallogin/dataentry-sociallogin.component";
import { WelcomeDataEntryExampleComponent } from "./dataentry-welcome/dataentry-welcome.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ExtendedDataEntryExamplesComponent
    },
    {
        path: "dataentry-signup",
        component: SignupDataEntryExampleComponent,
        data: { title: "Dataentry signup" }
    },
    {
        path: "dataentry-social-login",
        component: SocialLoginDataEntryExampleComponent,
        data: { title: "Dataentry social login" }
    },
    {
        path: "dataentry-welcome",
        component: WelcomeDataEntryExampleComponent,
        data: { title: "Dataentry welcome" }
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
        ExtendedDataEntryExamplesComponent,
        SignupDataEntryExampleComponent,
        SocialLoginDataEntryExampleComponent,
        WelcomeDataEntryExampleComponent
    ]
})

export class ExtendedDataentryExamplesModule {
    constructor() { }
}
