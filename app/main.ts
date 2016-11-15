// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { routes, examplePipes } from "./app.routes";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// << (hide)
import {ModalDialogService} from "nativescript-angular/modal-dialog";
// >> (hide)
import { IfAndroidDirective, IfIosDirective } from "./ui-category/ng-directives/create-custom-directive/create-custom-directive.component"
import { UnlessDirective } from "./ui-category/ng-directives/unless-directive/directive-unless"
import { ToggleNavButtonDirective } from "./directives/toggle-nav-button.directive"
import { ExampleTitleDirective } from "./directives/example.directive"
// << (hide)
import {registerElement} from 'nativescript-angular/element-registry';
import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";
import {TnsGoogleMaps} from "nativescript-googlemaps"
import {isIOS} from "platform"

@NgModule({
    declarations: [
        // >> (hide)
        AppComponent,
        IfAndroidDirective,
        IfIosDirective,
        UnlessDirective,
        ToggleNavButtonDirective,
        ExampleTitleDirective,
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

registerElement("TnsGoogleMaps", () => TnsGoogleMaps);

if (isIOS) {
    GMSServices.provideAPIKey("AIzaSyDQZOuoz1x-bMki_pbb7AYyU9D8Js4ZpKQ");
}


platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
