import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { LayoutsExamplesComponent } from "./layouts-examples.component";
import { AbsoluteLayoutComponent } from "./absolute-layout/absolute-layout.component";
import { DockLayoutComponent } from "./dock-layout/dock-layout.component";
import { FlexboxLayoutComponentOne } from "./flexbox-layout-one/flexbox-layout.component";
import { FlexboxLayoutComponentTwo } from "./flexbox-layout-two/flexbox-layout.component";
import { FlexboxLayoutComponentThree } from "./flexbox-layout-three/flexbox-layout.component";
import { GridLayoutComponent } from "./grid-layout/grid-layout.component";
import { StackLayoutComponent } from "./stack-layout/stack-layout.component";
import { WrapLayoutComponent } from "./wrap-layout/wrap-layout.component";

export const routerConfig = [
    {
        path: '',
        component: LayoutsExamplesComponent
    },
    {
        path: 'absolute-layout',
        component: AbsoluteLayoutComponent,
        data: { title: "Absolute layout" }
    },
    {
        path: 'dock-layout',
        component: DockLayoutComponent,
        data: { title: "Dock layout" }
    },
    {
        path: 'flexbox-layout-one',
        component: FlexboxLayoutComponentOne,
        data: { title: "Flexbox layout (flexDirection)" }
    },
    {
        path: 'flexbox-layout-two',
        component: FlexboxLayoutComponentTwo,
        data: { title: "Flexbox layout (order, flexGrow and flexShrink)" }
    },
    {
        path: 'flexbox-layout-three',
        component: FlexboxLayoutComponentThree,
        data: { title: "Flexbox layout (flexWrap, justifyContent)" }
    },
    {
        path: 'grid-layout',
        component: GridLayoutComponent,
        data: { title: "Grid layout" }
    },
    {
        path: 'stack-layout',
        component: StackLayoutComponent,
        data: { title: "Stack layout" }
    },
    {
        path: 'wrap-layout',
        component: WrapLayoutComponent,
        data: { title: "Wrap layout" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [LayoutsExamplesComponent, AbsoluteLayoutComponent, DockLayoutComponent, FlexboxLayoutComponentOne, FlexboxLayoutComponentTwo,
    FlexboxLayoutComponentThree, GridLayoutComponent, StackLayoutComponent, WrapLayoutComponent]
})

export class LayoutsExamplesModule {
    constructor() { }
}
