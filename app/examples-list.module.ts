import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ExamplesListComponent } from "./examples-list.component";
import { TitleAndNavButtonModule } from "./directives/title-and-nav-button.module";

export const routerConfig = [{
    path: "",
    component: ExamplesListComponent
}];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [ExamplesListComponent]
})

export class ExamplesListModule {
    constructor() { }
}
