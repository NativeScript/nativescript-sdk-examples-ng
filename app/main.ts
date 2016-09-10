// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { routes, routableComponents } from "./app.routes";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { IfAndroidDirective, IfIosDirective } from "./ng-directives/create-custom-directive/create-custom-directive.component"
import { UnlessDirective } from "./ng-directives/unless-directive/directive-unless"
import { ToggleNavButtonDirective } from "./directives/toggle-nav-button.directive"
import { ExampleTitleDirective } from "./directives/example.directive"

@NgModule({
    declarations: [
        AppComponent,
        IfAndroidDirective,
        IfIosDirective,
        UnlessDirective,
        ToggleNavButtonDirective,
        ExampleTitleDirective,
        ...routableComponents,
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
})
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
