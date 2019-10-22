import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FileSystemExamplesComponent } from "./file-system-examples.component";
import { CreateExampleComponent } from "./usage/usage.component";
import { DeleteExampleComponent } from "./delete/delete.component";
import { PathsExampleComponent } from "./paths/paths.component";
import { ReadExampleComponent } from "./read/read.component";
import { UpdateExampleComponent } from "./update/update.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: FileSystemExamplesComponent
    },
    {
        path: "usage",
        component: CreateExampleComponent,
        data: { title: "Usage" }
    },
    {
        path: "delete",
        component: DeleteExampleComponent,
        data: { title: "Delete" }
    },
    {
        path: "paths",
        component: PathsExampleComponent,
        data: { title: "Paths" }
    },
    {
        path: "read",
        component: ReadExampleComponent,
        data: { title: "Read" }
    },
    {
        path: "update",
        component: UpdateExampleComponent,
        data: { title: "Update" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        FileSystemExamplesComponent,
        CreateExampleComponent,
        DeleteExampleComponent,
        PathsExampleComponent,
        ReadExampleComponent,
        UpdateExampleComponent
    ]
})

export class FetchExamplesModule {
    constructor() { }
}
