import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ImageExamplesComponent } from "./image-examples.component";
import { CreatingImageExampleComponent } from "./creating-image/creating-image.component";

export const routerConfig = [
    {
        path: '',
        component: ImageExamplesComponent
    },
    {
        path: 'creating-image',
        component: CreatingImageExampleComponent,
        data: { title: "Create Image" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ImageExamplesComponent, CreatingImageExampleComponent]
})

export class ImageExamplesModule {
    constructor() { }
}
