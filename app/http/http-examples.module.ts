import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { HttpExamplesComponent } from "./http-examples.component";

import { HttpGetComponent } from "./http-get/http-get";
import { HttpPostComponent } from "./http-post/http-post";

export const routerConfig = [
    {
        path: '',
        component: HttpExamplesComponent
    },
    {
        path: 'http-get',
        component: HttpGetComponent
    },
    {
        path: 'http-post',
        component: HttpPostComponent
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [HttpExamplesComponent, HttpGetComponent, HttpPostComponent]
})

export class HttpExamplesModule {
    constructor() { }
}
