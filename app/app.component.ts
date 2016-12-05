import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "sdk-app",
    template: `
        <GridLayout>
            <page-router-outlet></page-router-outlet>
        </GridLayout>
    `
})

export class AppComponent {
}
