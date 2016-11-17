import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { CameraExamplesComponent } from "./camera-examples.component";
import { UsingCameraExampleComponent } from "./using-camera/using-camera.component";

export const routerConfig = [
    {
        path: '',
        component: CameraExamplesComponent
    },
    {
        path: 'using-camera',
        component: UsingCameraExampleComponent,
        data: { title: "Using Camera" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [CameraExamplesComponent, UsingCameraExampleComponent]
})

export class CameraExamplesModule {
    constructor() { }
}