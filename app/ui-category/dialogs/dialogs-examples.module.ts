import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { DialogsExamplesComponent } from "./dialogs-examples.component";
import { ActionDialogComponent } from "./action-dialog/action-dialog.component";
import { AlertDialogComponent } from "./alert-dialog/alert-dialog.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { LoginDialogComponent } from "./login-dialog/login-dialog.component";
import { PromptDialogComponent } from "./prompt-dialog/prompt-dialog.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: DialogsExamplesComponent
    },
    {
        path: "action",
        component: ActionDialogComponent,
        data: { title: "Action dialogs" }
    },
    {
        path: "alert",
        component: AlertDialogComponent,
        data: { title: "Alert dialogs" }
    },
    {
        path: "confirm",
        component: ConfirmDialogComponent,
        data: { title: "Confirm dialogs" }
    },
    {
        path: "login",
        component: LoginDialogComponent,
        data: { title: "Login dialogs" }
    },
    {
        path: "prompt",
        component: PromptDialogComponent,
        data: { title: "Prompt dialogs" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        DialogsExamplesComponent,
        ActionDialogComponent,
        AlertDialogComponent,
        ConfirmDialogComponent,
        LoginDialogComponent,
        PromptDialogComponent
    ]
})

export class DialogsExamplesModule {
    constructor() { }
}
