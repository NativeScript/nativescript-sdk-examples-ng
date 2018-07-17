import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "sdk-app",
    template: `
        <page-router-outlet></page-router-outlet>
    `
})

export class AppComponent {
}
