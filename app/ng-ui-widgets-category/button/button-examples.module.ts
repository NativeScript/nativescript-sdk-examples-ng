import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ButtonExamplesComponent } from "./button-examples.component";
import { ButtonTapEventComponent } from "./tap-event/tap-event.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ButtonExamplesComponent
    },
    {
        path: "tap-event",
        component: ButtonTapEventComponent,
        data: { title: "Tap event" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ButtonExamplesComponent,
        ButtonTapEventComponent
    ]
})

export class ButtonExamplesModule {
    constructor() { }
}
