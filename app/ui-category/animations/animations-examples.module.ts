import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { AnimationsExamplesComponent } from "./animations-examples.component";
import { AnimatingPropertiesComponent } from "./animating-properties/animating-properties.component";
import { ChainingAnimationsComponent } from "./chaining-animations/chaining-animations.component";
import { MultipleViewsComponent } from "./multiple-views/multiple-views.component";

export const routerConfig = [
    {
        path: '',
        component: AnimationsExamplesComponent
    },
    {
        path: 'animating-properties',
        component: AnimatingPropertiesComponent,
        data: { title: "Animate properties" }
    },
    {
        path: 'chaining-animations',
        component: ChainingAnimationsComponent,
        data: { title: "Chaining animations" }
    },
    {
        path: 'multiple-views',
        component: MultipleViewsComponent,
        data: { title: "Animate multiple views" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [AnimationsExamplesComponent, AnimatingPropertiesComponent, ChainingAnimationsComponent, MultipleViewsComponent]
})

export class AnimationsExamplesModule {
    constructor() { }
}
