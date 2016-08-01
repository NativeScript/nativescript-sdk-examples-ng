import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router"
import { ExamplesListComponent } from "./examples-list.component";

import { ButtonExamplesComponent } from "./button/button-examples.component";
import { ButtonTextComponent } from "./button/text/text.component";
import { ButtonTapEventComponent } from "./button/tap-event/tap-event.component";

import { ScrollViewExamplesComponent } from "./scroll-view/scroll-view-examples.component";
import { ScrollViewHorizontalComponent } from "./scroll-view/horizontal/scroll-view-horizontal.component";
import { ScrollViewVerticalComponent } from "./scroll-view/vertical/scroll-view-vertical.component";
import { ScrollEventComponent } from "./scroll-view/scroll-event/scroll-event.component";

import { SearchBarExamplesComponent } from "./search-bar/search-bar-examples.component";
import { BasicSearchBarComponent } from "./search-bar/basic-search-bar/basic-search-bar.component";
import { ClearSearchBarComponent } from "./search-bar/clear-search-bar/clear-search-bar.component";
import { SearchBarBindingComponent } from "./search-bar/search-bar-binding/search-bar-binding.component";


import { SegmentedBarExamplesComponent } from "./segmented-bar/segmented-bar-examples.component";
import { BasicSegmentedBarComponent } from "./segmented-bar/basic-segmented-bar/basic-segmented-bar.component";
import { SegmentedBarViewsComponent } from "./segmented-bar/segmented-bar-views/segmented-bar-views.component";

import { SliderExamplesComponent } from "./slider/slider-examples.component";
import { BasicSliderComponent } from "./slider/basic-slider/basic-slider.component";
import { SliderAccessValueComponent } from "./slider/slider-access-value-code/slider-access-value.component";

import { SwitchExamplesComponent } from "./switch/switch-examples.component";
import { BasicSwitchComponent } from "./switch/basic-switch/basic-switch.component";
import { DisableSwitchComponent } from "./switch/disable-switch/disable-switch.component";
import { StylingSwitchComponent } from "./switch/styling-switch/styling-switch.component";

import { TabViewExamplesComponent } from "./tab-view/tab-view-examples.component";
import { BacisTabViewComponent } from "./tab-view/basic-tab-view/basic-tab-view.component";

export const routes: RouterConfig = [
  { path: "", component: ExamplesListComponent, data: { title: "Examples List" } },

  { path: "buttonExamplesComponent", component: ButtonExamplesComponent, data: { title: "Button" } },
  { path: "buttonTextExampleComponent", component: ButtonTextComponent, data: { title: "Text" } },
  { path: "buttonTapEventExampleComponent", component: ButtonTapEventComponent, data: { title: "Tap Event" } },
  { path: "scrollViewExampleComponent", component: ScrollViewExamplesComponent, data: { title: "Scroll View" } },
  { path: "scrollViewHorizontalExampleComponent", component: ScrollViewHorizontalComponent, data: { title: "Horizontal Orientation" } },
  { path: "scrollViewVertivalExampleComponent", component: ScrollViewVerticalComponent, data: { title: "Vertical Orientation" } },
  { path: "scrollEventExampleComponent", component: ScrollEventComponent, data: { title: "Scroll Event" } },
  { path: "searchBarExampleComponent", component: SearchBarExamplesComponent, data: { title: "Search Bar" } },
  { path: "basicSearchBarComponent", component: BasicSearchBarComponent, data: { title: "Basic Search Bar" } },
  { path: "clearSearchBarComponent", component: ClearSearchBarComponent, data: { title: "Clear Search Bar" } },
  { path: "searchBarBindingComponent", component: SearchBarBindingComponent, data: { title: "Search Bar Property Binding" } },
  { path: "segmentedBarExamplesComponent", component: SegmentedBarExamplesComponent, data: { title: "Segmented Bar" } },
  { path: "basicSegmentedBarComponent", component: BasicSegmentedBarComponent, data: { title: "Basic Segmented Bar" } },
  { path: "segmentedBarViewsComponent", component: SegmentedBarViewsComponent, data: { title: "Segmented Bar View Change" } },
  { path: "sliderExamplesComponent", component: SliderExamplesComponent, data: { title: "Slider" } },
  { path: "basicSliderComponent", component: BasicSliderComponent, data: { title: "Basic Slider" } },
  { path: "accessSliderValueComponent", component: SliderAccessValueComponent, data: { title: "Slider Value Slider" } },
  { path: "switchExamplesComponent", component: SwitchExamplesComponent, data: { title: "Switch" } },
  { path: "basicSwitchComponent", component: BasicSwitchComponent, data: { title: "Basic Switch" } },
  { path: "diableSwitchComponent", component: DisableSwitchComponent, data: { title: "Disable Switch Component" } },
  { path: "stylingSwitchComponent", component: StylingSwitchComponent, data: { title: "Styling Switch Component" } },
  { path: "tabViewExamplesComponent", component: TabViewExamplesComponent, data: { title: "Tab View" } },
  { path: "basicTabViewExamplesComponent", component: BacisTabViewComponent, data: { title: "Basic Tab View" } }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { })
];