// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import {
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NSModuleFactoryLoader,
    ModalDialogService,
    registerElement
} from "nativescript-angular";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";

import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
// << (hide)
import { NsModuleFactoryLoader } from "./ns-module-factory-loader";
import { TnsGoogleMaps } from "nativescript-googlemaps";
import { isIOS } from "platform";

declare var GMSServices: any;

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
    ],
    providers: [
        ModalDialogService,
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ]
})
// << ngmodule-config
export class AppModule { }

registerElement("TnsGoogleMaps", () => TnsGoogleMaps);

if (isIOS) {
    GMSServices.provideAPIKey("AIzaSyDQZOuoz1x-bMki_pbb7AYyU9D8Js4ZpKQ");
}
