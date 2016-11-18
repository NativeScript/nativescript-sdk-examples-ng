// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// << (hide)
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { registerElement } from 'nativescript-angular/element-registry';
import { ModalViewComponent } from "./modal-page/sample-modal-page-module-example/modal-view";
import { TnsGoogleMaps } from "nativescript-googlemaps"
import { isIOS } from "platform"

@NgModule({
    declarations: [
        AppComponent,
        IfAndroidDirective,
        IfIosDirective,
        UnlessDirective,
        // << (hide)
        ModalViewComponent
    ],

    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
    providers: [ModalDialogService],
    entryComponents: [ModalViewComponent]
})
// << ngmodule-config
class AppComponentModule { }

registerElement("TnsGoogleMaps", () => TnsGoogleMaps);

if (isIOS) {
    GMSServices.provideAPIKey("AIzaSyDQZOuoz1x-bMki_pbb7AYyU9D8Js4ZpKQ");
}


platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
