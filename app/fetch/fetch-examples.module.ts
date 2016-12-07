import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { FetchExamplesComponent } from "./fetch-examples.component";
import { FetchGetExampleComponent } from "./fetch-get/fetch-get.component";
import { FetchPostExampleComponent } from "./fetch-post/fetch-post.component";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: FetchExamplesComponent
    },
    {
        path: "fetch-get",
        component: FetchGetExampleComponent,
        data: { title: "Fetch get" }
    },
    {
        path: "fetch-post",
        component: FetchPostExampleComponent,
        data: { title: "Fetch post" }
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
        FetchExamplesComponent,
        FetchGetExampleComponent,
        FetchPostExampleComponent
    ]
})

export class FetchExamplesModule {
    constructor() { }
}
