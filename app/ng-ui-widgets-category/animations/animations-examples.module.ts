import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AnimationsExamplesComponent } from "./animations-examples.component";
import { AnimatingPropertiesComponent } from "./animating-properties/animating-properties.component";
import { ChainingAnimationsComponent } from "./chaining-animations/chaining-animations.component";
import { WidthHeightPropertiesComponent } from "./width-height-properties/width-height-properties.component";
import { MultipleViewsComponent } from "./multiple-views/multiple-views.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: AnimationsExamplesComponent
    },
    {
        path: "animating-properties",
        component: AnimatingPropertiesComponent,
        data: { title: "Animate properties" }
    },
    {
        path: "chaining-animations",
        component: ChainingAnimationsComponent,
        data: { title: "Chaining animations" }
    },
    {
        path: "multiple-views",
        component: MultipleViewsComponent,
        data: { title: "Animate multiple views" }
    },
    {
        path: "width-height-properties",
        component: WidthHeightPropertiesComponent,
        data: { title: "Animating Width & Height Properties" }
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
        AnimationsExamplesComponent,
        AnimatingPropertiesComponent,
        ChainingAnimationsComponent, MultipleViewsComponent,
        WidthHeightPropertiesComponent
    ]
})

export class AnimationsExamplesModule {
    constructor() { }
}
