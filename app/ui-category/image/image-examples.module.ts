import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ImageExamplesComponent } from "./image-examples.component";
import { CreatingImageExampleComponent } from "./creating-image/creating-image.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ImageExamplesComponent
    },
    {
        path: "creating-image",
        component: CreatingImageExampleComponent,
        data: { title: "Create Image" }
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
        CreatingImageExampleComponent
    ]
})

export class ImageExamplesModule {
    constructor() { }
}
