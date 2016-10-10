import { Component } from "@angular/core";
// >> sample-trace-module-import
import { setCategories, enable, categories } from "trace"
// << sample-trace-module-import
@Component({
    selector: 'basic-trace-example-component',
    templateUrl: 'trace/basic-trace-example/basic-trace-example.component.html'
})

export class BasicTraceExampleComponent {
    constructor() {
        // >> sample-trace-module-set-category
        setCategories(categories.All);
        enable();
        // << sample-trace-module-set-category
    }
}