import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";

import { RoutingExamplesComponent } from "./routing-examples.component";
import { NestedRoutersComponent } from "./nested-routers/nested-routers.component";

import { SubRouteOneComponent } from "./nested-routers/sub-route-one.component";
import { SubRouteTwoComponent } from "./nested-routers/sub-route-two.component";

import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: RoutingExamplesComponent
    },
    {
        path: "nested-routers",
        component: NestedRoutersComponent,
        children: [
            { path: "first", component: SubRouteOneComponent },
            { path: "second", component: SubRouteTwoComponent }
        ]
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        RoutingExamplesComponent,
        NestedRoutersComponent,
        SubRouteOneComponent,
        SubRouteTwoComponent
    ]
})

export class RoutingExamplesModule { }
