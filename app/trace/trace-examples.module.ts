// tslint:disable:max-line-length
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { TraceExamplesComponent } from "./trace-examples.component";
import { CustomTraceWriterExampleComponent } from "./custom-trace-writer/custom-tracewriter-example.component";
import { TraceSpecificCategoriesExampleComponent } from "./trace-specific-categories/trace-specific-categories-example.component";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: TraceExamplesComponent
    },
    {
        path: "custom-trace-writer",
        component: CustomTraceWriterExampleComponent,
        data: { title: "Custom trace writer" }
    },
    {
        path: "trace-writer-categories",
        component: TraceSpecificCategoriesExampleComponent,
        data: { title: "Trace specific categories" }
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
        TraceExamplesComponent,
        CustomTraceWriterExampleComponent,
        TraceSpecificCategoriesExampleComponent
    ]
})

export class TraceExamplesModule {
    constructor() { }
}
