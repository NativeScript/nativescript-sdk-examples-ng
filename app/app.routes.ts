import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router"
import { ExamplesListComponent } from "./examples-list.component";

import { ButtonExamplesComponent } from "./button/button-examples.component";
import { ButtonTextComponent } from "./button/text/text.component";
import { ButtonTapEventComponent } from "./button/tap-event/tap-event.component";

export const routes: RouterConfig = [
  { path: "", component: ExamplesListComponent, data: { title: "Examples List" } },

  { path: "buttonExamplesComponent", component: ButtonExamplesComponent, data: { title: "Button" } },
  { path: "buttonTextExampleComponent", component: ButtonTextComponent, data: { title: "Text" } },
  { path: "buttonTapEventExampleComponent", component: ButtonTapEventComponent, data: { title: "Tap Event" } }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { })
];