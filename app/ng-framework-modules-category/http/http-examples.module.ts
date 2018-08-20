import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { HttpExamplesComponent } from "./http-examples.component";

import { HttpDeleteComponent } from "./http-delete/http-delete.component";
import { HttpGetComponent } from "./http-get/http-get.component";
import { HttpPutComponent } from "./http-put/http-put.component";
import { HttpPostComponent } from "./http-post/http-post.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: HttpExamplesComponent
    },
    {
        path: "http-delete",
        component: HttpDeleteComponent
    },
    {
        path: "http-get",
        component: HttpGetComponent
    },
    {
        path: "http-post",
        component: HttpPostComponent
    },
    {
        path: "http-put",
        component: HttpPutComponent
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        HttpExamplesComponent,
        HttpDeleteComponent,
        HttpGetComponent,
        HttpPostComponent,
        HttpPutComponent
    ]
})

export class HttpExamplesModule {
    constructor() { }
}
