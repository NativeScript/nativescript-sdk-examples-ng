import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from "nativescript-angular";
import { ColorExamplesComponent } from "./color-examples.component";
import { CreatingColorsExampleComponent } from "./creating-colors/creating-colors.component";
import { HexPipe } from "./creating-colors/creating-colors.component";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ColorExamplesComponent
    },
    {
        path: "creating-colors",
        component: CreatingColorsExampleComponent,
        data: { title: "Creating colors" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [HexPipe, ColorExamplesComponent, CreatingColorsExampleComponent]
})

export class ColorExamplesModule {
    constructor() { }
}
