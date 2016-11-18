import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { TextViewExamplesComponent } from "./text-view-examples.component";
import { BasicTextViewComponent } from "./basic-text-view/basic-text-view.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: '',
        component: TextViewExamplesComponent
    },
    {
        path: 'basic',
        component: BasicTextViewComponent,
        data: { title: "Basic TextView" }
    }
];

@NgModule({
    imports: [TitleAndNavButtonModule, NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [TextViewExamplesComponent, BasicTextViewComponent]
})

export class TextViewExamplesModule {
    constructor() { }
}
