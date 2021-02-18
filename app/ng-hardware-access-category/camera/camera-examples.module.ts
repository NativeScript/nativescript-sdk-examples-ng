import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { CameraExamplesComponent } from "./camera-examples.component";
import { UsingCameraExampleComponent } from "./using-camera/using-camera.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: CameraExamplesComponent
    },
    {
        path: "using-camera",
        component: UsingCameraExampleComponent,
        data: { title: "Using Camera" }
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
    declarations: [CameraExamplesComponent, UsingCameraExampleComponent]
})

export class CameraExamplesModule {
    constructor() { }
}
