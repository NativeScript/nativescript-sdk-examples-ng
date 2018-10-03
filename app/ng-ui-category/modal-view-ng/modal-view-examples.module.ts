// tslint:disable:max-line-length
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ModalViewExamplesComponent } from "./modal-view-examples.component";
import { SampleModalViewModuleExampleComponent } from "./sample-modal-view-module-example/sample-modal-view-module-example";
import { ModalViewNavigationComponent } from "./modal-view-navigation/modal-view-navigation.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";
import { ModalViewComponent } from "./sample-modal-view-module-example/modal-view";
import { HomeModalViewComponent } from "./modal-view-navigation/home-modal-view.component";
import { HomeModalViewContentComponent } from "./modal-view-navigation/home-modal-view-content.component";
import { SecondModalViewContentComponent } from "./modal-view-navigation/second-modal-view-content.component";
import { MainViewComponent } from "./modal-view-actionbar/main-view.component";
import { ModalRootComponent } from "./modal-view-actionbar/modal-root.component";
import { ModalViewActionBarComponent } from "./modal-view-actionbar/modal-view.component";
export const routerConfig = [
    {
        path: "",
        component: ModalViewExamplesComponent
    },
    {
        path: "sample-modal-view",
        component: SampleModalViewModuleExampleComponent,
        data: { title: "Sample modal view" }
    },
    // >> modal-view-routes
    {
        path: "modal-view-navigation",
        component: ModalViewNavigationComponent,
        data: { title: "Modal view navigation" },
        children: [
            {
                path: "modal", component: HomeModalViewContentComponent
            },
            {
                path: "second-modal", component: SecondModalViewContentComponent
            }
        ]
    },
    // << modal-view-routes
    // >> modal-view-routes-actionbar
    {
        path: "modal-view-actionbar",
        component: MainViewComponent,
        data: { title: "Main page" },
        children: [
            {
                path: "modal-view", component: ModalViewActionBarComponent
            }
        ]
    }
    // << modal-view-routes-actionbar
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
        ModalViewExamplesComponent,
        SampleModalViewModuleExampleComponent,
        ModalViewNavigationComponent,
        ModalViewComponent,
        HomeModalViewComponent,
        HomeModalViewContentComponent,
        SecondModalViewContentComponent,
        MainViewComponent,
        ModalRootComponent,
        ModalViewActionBarComponent
    ],
    entryComponents: [ModalViewComponent, HomeModalViewComponent, ModalRootComponent]
})

export class ModalViewExamplesModule {
    constructor() { }
}
