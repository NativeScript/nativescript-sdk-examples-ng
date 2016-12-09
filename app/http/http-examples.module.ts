import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from "nativescript-angular";

import { HttpExamplesComponent } from "./http-examples.component";

import { HttpGetComponent } from "./http-get/http-get";
import { HttpPostComponent } from "./http-post/http-post";
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
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule, NativeScriptRouterModule.forChild(routerConfig)
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
