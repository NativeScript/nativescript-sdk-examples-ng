import { NgModule } from "@angular/core";
import { ExampleTitleDirective } from "./example.directive";
import { ToggleNavButtonDirective } from "./toggle-nav-button.directive";

@NgModule({
    declarations: [ExampleTitleDirective, ToggleNavButtonDirective],
    exports: [ExampleTitleDirective, ToggleNavButtonDirective]
})

export class TitleAndNavButtonModule { } 
