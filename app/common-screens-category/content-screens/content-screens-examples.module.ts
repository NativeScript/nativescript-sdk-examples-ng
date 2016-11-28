import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ContentScreensExamplesComponent } from "./content-screens-examples.component";
import { ContentScrollablePageExampleComponent } from "./content-scrollable/content-scrollable-example.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ContentScreensExamplesComponent
    },
    {
        path: "content-scrollable",
        component: ContentScrollablePageExampleComponent,
        data: { title: "Content scrollable" }
    }
];

@NgModule({
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [ContentScreensExamplesComponent, ContentScrollablePageExampleComponent]
})

export class ContentScreensExamplesModule {
    constructor() { }
}
