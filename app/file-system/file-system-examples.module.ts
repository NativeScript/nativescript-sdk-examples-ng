import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { FileSystemExamplesComponent } from "./file-system-examples.component";
import { CreateExampleComponent } from "./create/create.component";
import { DeleteExampleComponent } from "./delete/delete.component";
import { PathsExampleComponent } from "./paths/paths.component";
import { ReadExampleComponent } from "./read/read.component";
import { UpdateExampleComponent } from "./update/update.component";

export const routerConfig = [
    {
        path: '',
        component: FileSystemExamplesComponent
    },
    {
        path: 'create',
        component: CreateExampleComponent,
        data: { title: "Create" }
    },
    {
        path: 'delete',
        component: DeleteExampleComponent,
        data: { title: "Delete" }
    },
    {
        path: 'paths',
        component: PathsExampleComponent,
        data: { title: "Paths" }
    },
    {
        path: 'read',
        component: ReadExampleComponent,
        data: { title: "Read" }
    },
    {
        path: 'update',
        component: UpdateExampleComponent,
        data: { title: "Update" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [FileSystemExamplesComponent, CreateExampleComponent, DeleteExampleComponent,PathsExampleComponent,ReadExampleComponent,UpdateExampleComponent]
})

export class FetchExamplesModule {
    constructor() { }
}
