import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { GesturesExamplesComponent } from "./gestures-examples.component";
import { DoubleTapExampleComponent } from "./double-tap/double-tap.component";
import { LongPressExampleComponent } from "./long-press/long-press.component";
import { PanExampleComponent } from "./pan/pan.component";
import { PinchExampleComponent } from "./pinch/pinch.component";
import { RotationExampleComponent } from "./rotation/rotation.component";
import { SwipeExampleComponent } from "./swipe/swipe.component";
import { TapExampleComponent } from "./tap/tap.component";
import { TouchExampleComponent } from "./touch/touch.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: GesturesExamplesComponent
    },
    {
        path: "double-tap",
        component: DoubleTapExampleComponent,
        data: { title: "Double tap" }
    },
    {
        path: "long-press",
        component: LongPressExampleComponent,
        data: { title: "Long press" }
    },
    {
        path: "pan",
        component: PanExampleComponent,
        data: { title: "Pan" }
    },
    {
        path: "pinch",
        component: PinchExampleComponent,
        data: { title: "Pinch" }
    },
    {
        path: "rotation",
        component: RotationExampleComponent,
        data: { title: "Rotation" }
    },
    {
        path: "swipe",
        component: SwipeExampleComponent,
        data: { title: "Swipe" }
    },
    {
        path: "tap",
        component: TapExampleComponent,
        data: { title: "Tap" }
    },
    {
        path: "touch",
        component: TouchExampleComponent,
        data: { title: "Touch" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        GesturesExamplesComponent,
        DoubleTapExampleComponent,
        LongPressExampleComponent,
        PanExampleComponent,
        PinchExampleComponent,
        RotationExampleComponent,
        SwipeExampleComponent,
        TapExampleComponent,
        TouchExampleComponent
    ]
})

export class GesturesExamplesModule {
    constructor() { }
}
