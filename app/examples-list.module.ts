import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ExamplesListComponent } from "./examples-list.component";

export const routerConfig = [{
    path: '',
    component: ExamplesListComponent
}];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ExamplesListComponent]
})

export class ExamplesListModule {
    constructor() { }
}
