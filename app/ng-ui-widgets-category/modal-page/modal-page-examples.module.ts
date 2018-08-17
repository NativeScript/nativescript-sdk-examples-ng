// tslint:disable:max-line-length
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ModalPageExamplesComponent } from "./modal-page-examples.component";
import { SampleModalPageModuleExampleComponent } from "./sample-modal-page-module-example/sample-modal-page-module-example";
import { ModalPageNavigationComponent } from "./modal-page-navigation/modal-page-navigation.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";
import { ModalViewComponent } from "./sample-modal-page-module-example/modal-view";
import { HomeModalViewComponent } from "./modal-page-navigation/home-modal-view.component";
import { HomeModalViewContentComponent } from "./modal-page-navigation/home-modal-view-content.component";
import { SecondModalViewContentComponent } from "./modal-page-navigation/second-modal-view-content.component";
import { MainViewComponent } from "./modal-page-actionbar/main-view.component";
import { ModalRootComponent } from "./modal-page-actionbar/modal-root.component";
import { ModalViewActionBarComponent } from "./modal-page-actionbar/modal-view.component";
export const routerConfig = [
    {
        path: "",
        component: ModalPageExamplesComponent
    },
    {
        path: "sample-modal-page",
        component: SampleModalPageModuleExampleComponent,
        data: { title: "Sample modal page" }
    },
    // >> modal-page-routes
    {
        path: "modal-page-navigation",
        component: ModalPageNavigationComponent,
        data: { title: "Modal page navigation" },
        children: [
            {
                path: "modal", component: HomeModalViewContentComponent
            },
            {
                path: "second-modal", component: SecondModalViewContentComponent
            }
        ]
    },
    // << modal-page-routes
    // >> modal-page-routes-actionbar
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
    // << modal-page-routes-actionbar
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
        ModalPageExamplesComponent,
        SampleModalPageModuleExampleComponent,
        ModalPageNavigationComponent,
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

export class ModalPageExamplesModule {
    constructor() { }
}
