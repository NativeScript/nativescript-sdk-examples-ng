import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { IconFontsExamplesComponent } from "./iconfonts-examples.component";
import { BasicIconFontsExampleComponent } from "./basics/basic.component";
import { CodeBehindFontsExampleComponent } from "./code-behind/codebehind.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: IconFontsExamplesComponent
    },
    {
        path: "basics-icon-fonts",
        component: BasicIconFontsExampleComponent,
        data: { title: "Basics" }
    },
    {
        path: "code-behind-icon-fonts",
        component: CodeBehindFontsExampleComponent,
        data: { title: "Code Behind" }
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
    declarations: [IconFontsExamplesComponent, BasicIconFontsExampleComponent, CodeBehindFontsExampleComponent]
})

export class IconFontsExamplesModule {
    constructor() { }
}
