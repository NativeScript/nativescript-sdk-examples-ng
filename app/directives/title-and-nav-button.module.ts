import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ExampleTitleDirective } from "./example.directive";
import { ToggleNavButtonDirective } from "./toggle-nav-button.directive";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [ExampleTitleDirective, ToggleNavButtonDirective],
    exports: [ExampleTitleDirective, ToggleNavButtonDirective]
})
export class TitleAndNavButtonModule { }
