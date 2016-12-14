import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { HttpExamplesComponent } from "./http-examples.component";

import { HttpGetComponent } from "./http-get/http-get.component";
import { HttpPostComponent } from "./http-post/http-post.component";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: HttpExamplesComponent
    },
    {
        path: "http-get",
        component: HttpGetComponent
    },
    {
        path: "http-post",
        component: HttpPostComponent
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        HttpExamplesComponent,
        HttpGetComponent,
        HttpPostComponent
    ]
})

export class HttpExamplesModule {
    constructor() { }
}
