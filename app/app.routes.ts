import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router"
import { ExamplesListComponent } from "./examples-list.component";

import { ActionBarExamplesComponent } from "./action-bar/action-bar-examples.component";
import { ActionItemsComponent } from "./action-bar/action-items/action-items.component";
import { NavigationButtonComponent } from "./action-bar/navigation-button/navigation-button.component";
import { TitleComponent } from "./action-bar/title/title.component";

import { ActivityIndicatorExamplesComponent } from "./activity-indicator/activity-indicator-examples.component";
import { SettingBusyComponent } from "./activity-indicator/setting-busy/setting-busy.component";

import { AnimationsExamplesComponent } from "./animations/animations-examples.component";
import { AnimatingPropertiesComponent} from "./animations/animating-properties/animating-properties.component";
import { ChainingAnimationsComponent } from "./animations/chaining-animations/chaining-animations.component";
import { MultipleViewsComponent } from "./animations/multiple-views/multiple-views.component";

import { BorderExamplesComponent } from "./border/border-examples.component";
import { DeclareBorderComponent } from "./border/declare-border/declare-border.component";

import { ButtonExamplesComponent } from "./button/button-examples.component";
import { ButtonTextComponent } from "./button/text/text.component";
import { ButtonTapEventComponent } from "./button/tap-event/tap-event.component";
import { ButtonBindingTextComponent } from "./button/binding-text/binding-text.component";

import { DatePickerExamplesComponent } from "./date-picker/date-picker-examples.component";
import { ConfigureDatePickerComponent } from "./date-picker/configure-date-picker/configure-date-picker.component";

import { DialogsExamplesComponent } from "./dialogs/dialogs-examples.component";
import { DisplayDialogsComponent } from "./dialogs/display-dialogs/display-dialogs.component";

import { LayoutsExamplesComponent } from "./layouts/layouts-examples.component";
import { AbsoluteLayoutComponent } from "./layouts/absolute-layout/absolute-layout.component";
import { DockLayoutComponent } from "./layouts/dock-layout/dock-layout.component";
import { GridLayoutComponent } from "./layouts/grid-layout/grid-layout.component";
import { StackLayoutComponent } from "./layouts/stack-layout/stack-layout.component";
import { WrapLayoutComponent } from "./layouts/wrap-layout/wrap-layout.component";

import { TimePickerExamplesComponent } from "./time-picker/time-picker-examples.component";
import { ConfigureTimePickerComponent } from "./time-picker/configure-time-picker/configure-time-picker.component";

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

  { path: "actionBarExamplesComponent", component: ActionBarExamplesComponent, data: { title: "Action Bar" } },
  { path: "actionItemsComponent", component: ActionItemsComponent, data: { title: "Action Items" } },
  { path: "navigationButtonComponent", component: NavigationButtonComponent, data: { title: "Navigation Button" } },
  { path: "titleComponent", component: TitleComponent, data: { title: "Action Bar Title" } },

  { path: "activityIndicatorExamplesComponent", component: ActivityIndicatorExamplesComponent, data: { title: "Activity Indicator" } },
  { path: "settingBusyComponent", component: SettingBusyComponent, data: { title: "Setting Busy Property" } },

  { path: "animationsExamplesComponent", component: AnimationsExamplesComponent, data: { title: "Animations" } },
  { path: "animatingPropertiesComponent", component: AnimatingPropertiesComponent, data: { title: "Animating Properties" } },
  { path: "chainingAnimationsComponent", component: ChainingAnimationsComponent, data: { title: "Chaining Animations" } },
  { path: "multipleViewsComponent", component: MultipleViewsComponent, data: { title: "Animating Multiple Views Simultaneously" } },

  { path: "borderExamplesComponent", component: BorderExamplesComponent, data: { title: "Border" } },
  { path: "declareBorderComponent", component: DeclareBorderComponent, data: { title: "Declare Border" } },

  { path: "buttonExamplesComponent", component: ButtonExamplesComponent, data: { title: "Button" } },
  { path: "buttonTextComponent", component: ButtonTextComponent, data: { title: "Text" } },
  { path: "buttonTapEventComponent", component: ButtonTapEventComponent, data: { title: "Tap Event" } },
  { path: "buttonBindingTextComponent", component: ButtonBindingTextComponent, data: { title: "Binding Text" } },

  { path: "datePickerExamplesComponent", component: DatePickerExamplesComponent, data: { title: "Date Picker" } },
  { path: "configureDatePickerComponent", component: ConfigureDatePickerComponent, data: { title: "Configure Date Picker" } },

  { path: "dialogsExamplesComponent", component: DialogsExamplesComponent, data: { title: "Dialogs" } },
  { path: "displayDialogsComponent", component: DisplayDialogsComponent, data: { title: "Display Dialogs" } }, 

  { path: "layoutsExamplesComponent", component: LayoutsExamplesComponent, data: { title: "Layouts" } },
  { path: "absoluteLayoutComponent", component: AbsoluteLayoutComponent, data: { title: "Absolute Layout" } },
  { path: "dockLayoutComponent", component: DockLayoutComponent, data: { title: "Dock Layout" } },
  { path: "gridLayoutComponent", component: GridLayoutComponent, data: { title: "Grid Layout" } },
  { path: "stackLayoutComponent", component: StackLayoutComponent, data: { title: "Stack Layout" } },
  { path: "wrapLayoutComponent", component: WrapLayoutComponent, data: { title: "Wrap Layout" } },

  { path: "timePickerExamplesComponent", component: TimePickerExamplesComponent, data: { title: "Time Picker" } },
  { path: "configureTimePickerComponent", component: ConfigureTimePickerComponent, data: { title: "Configure Time Picker" } },

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
  
  