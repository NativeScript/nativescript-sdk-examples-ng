import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { StyleExamplesComponent } from "./style-examples.component";
import { ApplyStyleCodeComponent } from "./apply-style-via-code/apply-style-code.component";
import { StyleCSSFileComponent } from "./style-css-file/style-css-file.component";

export const routerConfig = [
    {
        path: '',
        component: StyleExamplesComponent
    },
    {
        path: 'apply-style',
        component: ApplyStyleCodeComponent,
        data: { title: "Apply style using code" }
    },
    {
        path: 'css-file',
        component: StyleCSSFileComponent,
        data: { title: "Add style via CSS file" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [StyleExamplesComponent, ApplyStyleCodeComponent, StyleCSSFileComponent]
})

export class StyleExamplesModule {
    constructor() { }
}
