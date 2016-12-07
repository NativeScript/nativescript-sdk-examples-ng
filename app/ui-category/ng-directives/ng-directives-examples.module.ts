import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgDirectivesExamplesComponent } from "./ng-directives-examples.component";
import {
    CreateCustomDirectiveExampleComponent,
    IfIosDirective,
    IfAndroidDirective
} from "./create-custom-directive/create-custom-directive.component";
import { NgForComponent } from "./ngfor-directive/ngfor-directive.component";
import { NgSwitchComponent } from "./ngswitch-directive/ngswitch-directive.component";
import { CustomUnlessComponent } from "./custom-unless-directive/unless-directive.component";
import { UnlessDirective } from "./custom-unless-directive/directive-unless";
import { NgIfComponent } from "./ngif-directive/ngif-directive.component";
import { NgIfAdvancedComponent } from "./ngif-directive-advanced/ngif-directive-advanced.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: NgDirectivesExamplesComponent
    },
    {
        path: "create-custom-directive",
        component: CreateCustomDirectiveExampleComponent,
        data: { title: "Create custom directive" }
    },
    {
        path: "ngfor-directive",
        component: NgForComponent,
        data: { title: "*ngFor directive" }
    },
    {
        path: "ngswitch-directive",
        component: NgSwitchComponent,
        data: { title: "*ngSwitch directive" }
    },
    {
        path: "custom-unless-directive",
        component: CustomUnlessComponent,
        data: { title: "Custom *unless directive" }
    },
    {
        path: "ngif-directive",
        component: NgIfComponent,
        data: { title: "*ngIf directive" }
    },
    {
        path: "ngif-directive-advanced",
        component: NgIfAdvancedComponent,
        data: { title: "*ngIf directive (platform specific)" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        NgDirectivesExamplesComponent,
        CreateCustomDirectiveExampleComponent,
        NgIfComponent,
        NgIfAdvancedComponent,
        NgForComponent,
        NgSwitchComponent,
        CustomUnlessComponent,
        IfIosDirective,
        IfAndroidDirective,
        UnlessDirective
    ]
})
export class NgDirectivesExamplesModule {
    constructor() { }
}
