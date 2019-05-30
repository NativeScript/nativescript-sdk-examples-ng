// >> ngmodule-config
// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

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

export class AppModule { }
// << ngmodule-config
