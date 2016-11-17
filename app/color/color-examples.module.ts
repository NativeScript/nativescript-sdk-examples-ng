import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ColorExamplesComponent } from "./color-examples.component";
import { CreatingColorsExampleComponent } from "./creating-colors/creating-colors.component";
import { HexPipe } from "./creating-colors/creating-colors.component";

export const routerConfig = [
    {
        path: '',
        component: ColorExamplesComponent
    },
    {
        path: 'creating-colors',
        component: CreatingColorsExampleComponent,
        data: { title: "Creating colors" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [HexPipe, ColorExamplesComponent, CreatingColorsExampleComponent]
})

export class ColorExamplesModule {
    constructor() { }
}