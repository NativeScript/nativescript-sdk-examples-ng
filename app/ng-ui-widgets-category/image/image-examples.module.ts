import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ImageExamplesComponent } from "./image-examples.component";
import { ImageUsageComponent } from "./usage/usage.component";
import { ImageStylingComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ImageExamplesComponent
    },
    {
        path: "usage",
        component: ImageUsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: ImageStylingComponent,
        data: { title: "Styling" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ImageExamplesComponent,
        ImageUsageComponent,
        ImageStylingComponent
    ]
})

export class ImageExamplesModule {
    constructor() { }
}
