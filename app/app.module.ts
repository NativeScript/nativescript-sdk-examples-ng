// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
// << (hide)
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { registerElement } from "nativescript-angular/element-registry";
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
    ]
})
// << ngmodule-config
export class AppModule { }
