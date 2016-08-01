import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router"
import { ExamplesListComponent } from "./examples-list.component";

import { ButtonExamplesComponent } from "./button/button-examples.component";
import { ButtonTextComponent } from "./button/text/text.component";
import { ButtonTapEventComponent } from "./button/tap-event/tap-event.component";

import { LabelExamplesComponent } from "./label/label-examples.component";
import { CreatingLabelComponent } from "./label/creating-label/creating-label.component";

import { ListPickerExamplesComponent } from "./listpicker/listpicker-examples.component";
import { CreatingListPickerComponent } from "./listpicker/creating-listpicker/creating-listpicker.component";
import { UsingSelectedIndexExampleComponent } from "./listpicker/using-selected-index/using-selected-index.component";

import { ListViewExamplesComponent } from "./listview/listview-examples.component";
import { CreatingListViewComponent } from "./listview/creating-listview/creating-listview.component";
import { CustomizingListViewComponent } from "./listview/customizing-listview/customizing-listview.component";
import { UsingItemTemplateComponent } from "./listview/using-item-template/using-item-template.component";
import { UsingAsyncPipeComponent } from "./listview/using-async-pipe/using-async-pipe.component";

import { ProgressExamplesComponent } from "./progress/progress-examples.component";
import { CreatingProgressComponent } from "./progress/creating-progress/creating-progress.component";
import { SettingProgressComponent } from "./progress/setting-progress/setting-progress.component";

import { NgForExamplesComponent } from "./ngfor/ngfor-examples.component";
import { NgForRepeatItemsComponent } from "./ngfor/ngfor-items/repeat-items.component";

export const routes: RouterConfig = [
  { path: "", component: ExamplesListComponent, data: { title: "Examples List" } },

  { path: "buttonExamplesComponent", component: ButtonExamplesComponent, data: { title: "Button" } },
  { path: "buttonTextExampleComponent", component: ButtonTextComponent, data: { title: "Text" } },
  { path: "buttonTapEventExampleComponent", component: ButtonTapEventComponent, data: { title: "Tap Event" } },


  { path: "labelExamplesComponent", component: LabelExamplesComponent, data: { title: "Label" } },
  { path: "creatingLabelExampleComponent", component: CreatingLabelComponent, data: { title: "Creating Label" } },

  { path: "listPickerExamplesComponent", component: ListPickerExamplesComponent, data: { title: "ListPicker" } },
  { path: "creatingListPickerExampleComponent", component: CreatingListPickerComponent, data: { title: "Create ListPicker" } },
  { path: "usingSelectedIndexExampleComponent", component: UsingSelectedIndexExampleComponent, data: { title: "Using selectedIndex" } },
  
  { path: "listViewExamplesComponent", component: ListViewExamplesComponent, data: { title: "ListView" } },
  { path: "creatingListViewExampleComponent", component: CreatingListViewComponent, data: { title: "Creating ListView" } },
  { path: "customizingListViewExampleComponent", component: CustomizingListViewComponent, data: { title: "Customizing ListView" } },
  { path: "usingItemTemplateExampleComponent", component: UsingItemTemplateComponent, data: { title: "Using ListView Item Template" } },
  { path: "usingAsyncPipeExampleComponent", component: UsingAsyncPipeComponent, data: { title: "Using Async Pipe" } },

  { path: "progressExamplesComponent", component: ProgressExamplesComponent, data: { title: "Progress" } },
  { path: "creatingProgressExampleComponent", component: CreatingProgressComponent, data: { title: "Creating Progress" } },
  { path: "settingProgressExampleComponent", component: SettingProgressComponent, data: { title: "Setting up Progress" } },   

  { path: "ngForExampleComponent", component: NgForExamplesComponent, data: { title: "*ngFor" } },
  { path: "ngForRepeatItemsComponent", component: NgForRepeatItemsComponent, data: { title: "*ngFor Repeat Items" } }

];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { })
];
  
  