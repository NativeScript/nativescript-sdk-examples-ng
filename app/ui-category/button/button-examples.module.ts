import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ButtonExamplesComponent } from "./button-examples.component";
import { ButtonBindingTextComponent } from "./binding-text/binding-text.component";
import { ButtonTapEventComponent } from "./tap-event/tap-event.component";
import { ButtonTextComponent } from "./text/text.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ButtonExamplesComponent
    },
    {
        path: "binding-text",
        component: ButtonBindingTextComponent,
        data: { title: "Binding text" }
    },
    {
        path: "tap-event",
        component: ButtonTapEventComponent,
        data: { title: "Tap event" }
    },
    {
        path: "text",
        component: ButtonTextComponent,
        data: { title: "Text" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule, NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ButtonExamplesComponent,
        ButtonBindingTextComponent,
        ButtonTapEventComponent,
        ButtonTextComponent
    ]
})

export class ButtonExamplesModule {
    constructor() { }
}
