import { Component } from "@angular/core";

@Component({
    selector: "sdk-app",
    template: `
        <GridLayout>
            <page-router-outlet></page-router-outlet>
        </GridLayout>
    `
})

export class AppComponent {
}
