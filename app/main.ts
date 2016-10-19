// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { routes, routableComponents, examplePipes } from "./app.routes";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// << (hide)
import {ModalDialogService} from "nativescript-angular/modal-dialog";
// >> (hide)
import { IfAndroidDirective, IfIosDirective } from "./ui/ng-directives/create-custom-directive/create-custom-directive.component"
import { UnlessDirective } from "./ui/ng-directives/unless-directive/directive-unless"
import { ToggleNavButtonDirective } from "./directives/toggle-nav-button.directive"
import { ExampleTitleDirective } from "./directives/example.directive"
import { ItemComponent } from "./ui/listview/using-item-template/using-item-template.component";
import { GroupedListviewSingleThumbdComponent } from "./ui-extended/listview/single-line/single-line-listview.component";
// << (hide)
import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";

@NgModule({
    declarations: [
        // >> (hide)
        ItemComponent,
        GroupedListviewSingleThumbdComponent,
        AppComponent,
        IfAndroidDirective,
        IfIosDirective,
        UnlessDirective,
        ToggleNavButtonDirective,
        ExampleTitleDirective,
        ...routableComponents,
        // << (hide)
        ModalViewComponent,
        ...examplePipes
    ],
    // >> (hide)
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
    // << (hide)
    providers:[ModalDialogService],
    entryComponents: [ModalViewComponent]
})
// << ngmodule-config
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
