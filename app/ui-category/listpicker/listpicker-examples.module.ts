import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ListPickerExamplesComponent } from "./listpicker-examples.component";
import { CreatingListPickerComponent } from "./creating-listpicker/creating-listpicker.component";
import { UsingSelectedIndexExampleComponent } from "./using-selected-index/using-selected-index.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ListPickerExamplesComponent
    },
    {
        path: "creating-list-picker",
        component: CreatingListPickerComponent,
        data: { title: "Create ListPicker" }
    },
    {
        path: "using-selected-index",
        component: UsingSelectedIndexExampleComponent,
        data: { title: "Using selected index" }
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
    declarations: [
        ListPickerExamplesComponent,
        CreatingListPickerComponent,
        UsingSelectedIndexExampleComponent
    ]
})

export class ListPickerExamplesModule {
    constructor() { }
}
