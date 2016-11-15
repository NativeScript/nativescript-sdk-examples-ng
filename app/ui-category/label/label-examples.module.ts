import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { LabelExamplesComponent } from "./label-examples.component";
import { CreatingLabelComponent } from "./creating-label/creating-label.component";

export const routerConfig = [
    {
        path: '',
        component: LabelExamplesComponent
    },
    {
        path: 'creating-label',
        component: CreatingLabelComponent,
        data: { title: "Create Label" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [LabelExamplesComponent, CreatingLabelComponent]
})

export class LabelExamplesModule {
    constructor() { }
}
