import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ExtendedUserProfileExamplesComponent } from "./extended-userprofile-examples.component";
import { UserFeedExampleComponent } from "./user-feed/user-feed.component";
import { UserFeedImagesExampleComponent } from "./user-feed-images/user-feed-images.component";
import { UserSettingsMenuExampleComponent } from "./user-settings-menu/user-settings-menu.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ExtendedUserProfileExamplesComponent
    },
    {
        path: "user-feed",
        component: UserFeedExampleComponent,
        data: { title: "User feed" }
    },
    {
        path: "user-feed-images",
        component: UserFeedImagesExampleComponent,
        data: { title: "User feed images" }
    },
    {
        path: "user-settings-menu",
        component: UserSettingsMenuExampleComponent,
        data: { title: "User settings menu" }
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
        ExtendedUserProfileExamplesComponent,
        UserFeedExampleComponent,
        UserFeedImagesExampleComponent,
        UserSettingsMenuExampleComponent
    ]
})

export class ExtendedUserProfileExamplesModule {
    constructor() { }
}
