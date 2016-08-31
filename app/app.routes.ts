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
import { NgForRepeatItemsComponent } from "./ng-directives/ngfor-items/repeat-items.component";
import { ImageExamplesComponent } from "./image/image-examples.component";
import { CreatingImageExampleComponent } from "./image/creating-image/creating-image.component";
import { HtmlViewxamplesComponent } from "./htmlview/htmlview-examples.component";
import { CreatingHtmlViewExampleComponent } from "./htmlview/creating-htmlview/creating-htmlview.component";
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
import { BasicTabViewComponent } from "./tab-view/basic-tab-view/basic-tab-view.component";
import { TabViewItemsComponent } from "./tab-view/tab-view-items/tab-view-items.component";
import { TextFieldExamplesComponent } from "./text-field/text-field-examples.component";
import { BasicTextFieldComponent } from "./text-field/basic-text-field/basic-text-field.component";
import { TextFieldBindingComponent } from "./text-field/text-field-binding/text-field-binding.component";
import { TextViewExamplesComponent } from "./text-view/text-view-examples.component";
import { BasicTextViewComponent } from "./text-view/basic-text-view/basic-text-view.component";
import { WebViewExamplesComponent } from "./web-view/web-view-examples.component";
import { BasicWebViewComponent } from "./web-view/basic-web-view/basic-web-view.component";
import { WebViewHtmlComponent } from "./web-view/web-view-html/web-view-html.component";
import { StyleExamplesComponent } from "./style/style-examples.component";
import { StyleCSSFileComponent } from "./style/style-css-file/style-css-file.component";
import { ApplyStyleCodeComponent } from "./style/apply-style-via-code/apply-style-code.component";
import { GesturesExamplesComponent } from "./gestures/gestures-examples.component";
import { TapExampleComponent } from "./gestures/tap/tap.component";
import { DoubleTapExampleComponent } from "./gestures/double-tap/double-tap.component";
import { LongPressExampleComponent } from "./gestures/long-press/long-press.component";
import { SwipeExampleComponent } from "./gestures/swipe/swipe.component";
import { PanExampleComponent } from "./gestures/pan/pan.component";
import { PinchExampleComponent } from "./gestures/pinch/pinch.component";
import { RotationExampleComponent } from "./gestures/rotation/rotation.component";
import { TouchExampleComponent } from "./gestures/touch/touch.component";
import { NgDirectivesExamplesComponent } from "./ng-directives/ng-directives-examples.component";
import { UsingNgIfComponent } from "./ng-directives/using-ngif/using-ngif.component";
import { UsingNgIfForPlatformSpecificComponent } from "./ng-directives/using-ngif-for-platform-specific/using-ngif-for-platform-specific.component";
import { CreateCustomDirectiveExampleComponent } from "./ng-directives/create-custom-directive/create-custom-directive.component";
import { UnlessDirectiveExampleComponent } from "./ng-directives/unless-directive/unless-directive.component";
import { UsingNgSwitchExamplesComponent } from "./ng-directives/ngswitch-usage/ngswitch-usage.component";
import { FormattedStringExamplesComponent } from "./formatted-string/formated-string-examples.component";
import { CreateFormattedStringComponent } from "./formatted-string/create-formatted-string/create-formatted-string.component";

export const routes: RouterConfig = [
  { path: "", component: ExamplesListComponent, data: { title: "NativeScript SDK Examples" } },
  { path: "actionBarExamplesComponent", component: ActionBarExamplesComponent, data: { title: "ActionBar" } },
  { path: "actionItemsComponent", component: ActionItemsComponent, data: { title: "Action items" } },
  { path: "navigationButtonComponent", component: NavigationButtonComponent, data: { title: "Navigation button" } },
  { path: "titleComponent", component: TitleComponent, data: { title: "ActionBar title" } },
  { path: "activityIndicatorExamplesComponent", component: ActivityIndicatorExamplesComponent, data: { title: "ActivityIndicator" } },
  { path: "settingBusyComponent", component: SettingBusyComponent, data: { title: "Set busy property" } },
  { path: "animationsExamplesComponent", component: AnimationsExamplesComponent, data: { title: "Animations" } },
  { path: "animatingPropertiesComponent", component: AnimatingPropertiesComponent, data: { title: "Animate properties" } },
  { path: "chainingAnimationsComponent", component: ChainingAnimationsComponent, data: { title: "Chaining animations" } },
  { path: "multipleViewsComponent", component: MultipleViewsComponent, data: { title: "Animate multiple views" } },
  { path: "scrollViewExampleComponent", component: ScrollViewExamplesComponent, data: { title: "ScrollView" } },
  { path: "scrollViewHorizontalExampleComponent", component: ScrollViewHorizontalComponent, data: { title: "Horizontal orientation" } },
  { path: "scrollViewVertivalExampleComponent", component: ScrollViewVerticalComponent, data: { title: "Vertical orientation" } },
  { path: "scrollEventExampleComponent", component: ScrollEventComponent, data: { title: "Scroll event" } },
  { path: "searchBarExampleComponent", component: SearchBarExamplesComponent, data: { title: "SearchBar" } },
  { path: "basicSearchBarComponent", component: BasicSearchBarComponent, data: { title: "Basic SearchBar" } },
  { path: "clearSearchBarComponent", component: ClearSearchBarComponent, data: { title: "Clear SearchBar" } },
  { path: "searchBarBindingComponent", component: SearchBarBindingComponent, data: { title: "SearchBar property binding" } },
  { path: "segmentedBarExamplesComponent", component: SegmentedBarExamplesComponent, data: { title: "SegmentedBar" } },
  { path: "basicSegmentedBarComponent", component: BasicSegmentedBarComponent, data: { title: "Basic SegmentedBar" } },
  { path: "segmentedBarViewsComponent", component: SegmentedBarViewsComponent, data: { title: "SelectedIndexChange" } },
  { path: "sliderExamplesComponent", component: SliderExamplesComponent, data: { title: "Slider" } },
  { path: "basicSliderComponent", component: BasicSliderComponent, data: { title: "Basic Slider" } },
  { path: "accessSliderValueComponent", component: SliderAccessValueComponent, data: { title: "Slider's value" } },
  { path: "switchExamplesComponent", component: SwitchExamplesComponent, data: { title: "Switch" } },
  { path: "basicSwitchComponent", component: BasicSwitchComponent, data: { title: "Basic Switch" } },
  { path: "diableSwitchComponent", component: DisableSwitchComponent, data: { title: "Disable Switch component" } },
  { path: "stylingSwitchComponent", component: StylingSwitchComponent, data: { title: "Styling Switch component" } },
  { path: "tabViewExamplesComponent", component: TabViewExamplesComponent, data: { title: "TabView" } },
  { path: "basicTabViewExamplesComponent", component: BasicTabViewComponent, data: { title: "Basic TabView" } },
  { path: "tabViewItemsExamplesComponent", component: TabViewItemsComponent, data: { title: "TabView items" } },
  { path: "textFieldExamplesComponent", component: TextFieldExamplesComponent, data: { title: "TextField" } },
  { path: "basicTextFieldComponent", component: BasicTextFieldComponent, data: { title: "Basic TextField" } },
  { path: "textFieldBindingComponent", component: TextFieldBindingComponent, data: { title: "TextField binding" } },
  { path: "textViewExamplesComponent", component: TextViewExamplesComponent, data: { title: "TextView" } },
  { path: "basicTextViewComponent", component: BasicTextViewComponent, data: { title: "Basic TextView" } },
  { path: "webViewExamplesComponent", component: WebViewExamplesComponent, data: { title: "WebView" } },
  { path: "basicWebViewComponent", component: BasicWebViewComponent, data: { title: "Basic WebView" } },
  { path: "webViewHtmlComponent", component: WebViewHtmlComponent, data: { title: "HTML as source of WebView" } },
  { path: "styleExamplesComponent", component: StyleExamplesComponent, data: { title: "Style" } },
  { path: "styleCSSFileComponent", component: StyleCSSFileComponent, data: { title: "Add style via CSS file" } },
  { path: "applyStyleViaCodeComponent", component: ApplyStyleCodeComponent, data: { title: "Apply style using code" } },
  { path: "buttonExamplesComponent", component: ButtonExamplesComponent, data: { title: "Button" } },
  { path: "buttonTextComponent", component: ButtonTextComponent, data: { title: "Text" } },
  { path: "buttonTapEventComponent", component: ButtonTapEventComponent, data: { title: "Tap event" } },
  { path: "buttonBindingTextComponent", component: ButtonBindingTextComponent, data: { title: "Binding text" } },
  { path: "datePickerExamplesComponent", component: DatePickerExamplesComponent, data: { title: "DatePicker" } },
  { path: "configureDatePickerComponent", component: ConfigureDatePickerComponent, data: { title: "Configure DatePicker" } },
  { path: "dialogsExamplesComponent", component: DialogsExamplesComponent, data: { title: "Dialogs" } },
  { path: "displayDialogsComponent", component: DisplayDialogsComponent, data: { title: "Display dialogs" } },
  { path: "layoutsExamplesComponent", component: LayoutsExamplesComponent, data: { title: "Layouts" } },
  { path: "absoluteLayoutComponent", component: AbsoluteLayoutComponent, data: { title: "AbsoluteLayout" } },
  { path: "dockLayoutComponent", component: DockLayoutComponent, data: { title: "DockLayout" } },
  { path: "gridLayoutComponent", component: GridLayoutComponent, data: { title: "GridLayout" } },
  { path: "stackLayoutComponent", component: StackLayoutComponent, data: { title: "StackLayout" } },
  { path: "wrapLayoutComponent", component: WrapLayoutComponent, data: { title: "WrapLayout" } },
  { path: "timePickerExamplesComponent", component: TimePickerExamplesComponent, data: { title: "TimePicker" } },
  { path: "configureTimePickerComponent", component: ConfigureTimePickerComponent, data: { title: "Configure TimePicker" } },
  { path: "imageExamplesComponent", component: ImageExamplesComponent, data: { title: "Image" } },
  { path: "creatingImageExampleComponent", component: CreatingImageExampleComponent, data: { title: "Create Image" } },
  { path: "labelExamplesComponent", component: LabelExamplesComponent, data: { title: "Label" } },
  { path: "creatingLabelExampleComponent", component: CreatingLabelComponent, data: { title: "Create Label" } },
  { path: "listPickerExamplesComponent", component: ListPickerExamplesComponent, data: { title: "ListPicker" } },
  { path: "creatingListPickerExampleComponent", component: CreatingListPickerComponent, data: { title: "Create ListPicker" } },
  { path: "usingSelectedIndexExampleComponent", component: UsingSelectedIndexExampleComponent, data: { title: "Use selected index" } },
  { path: "listViewExamplesComponent", component: ListViewExamplesComponent, data: { title: "ListView" } },
  { path: "creatingListViewExampleComponent", component: CreatingListViewComponent, data: { title: "Create ListView" } },
  { path: "customizingListViewExampleComponent", component: CustomizingListViewComponent, data: { title: "Customize ListView" } },
  { path: "usingItemTemplateExampleComponent", component: UsingItemTemplateComponent, data: { title: "Use ListView item template" } },
  { path: "usingAsyncPipeExampleComponent", component: UsingAsyncPipeComponent, data: { title: "Use async pipe" } },
  { path: "progressExamplesComponent", component: ProgressExamplesComponent, data: { title: "Progress" } },
  { path: "creatingProgressExampleComponent", component: CreatingProgressComponent, data: { title: "Create Progress" } },
  { path: "settingProgressExampleComponent", component: SettingProgressComponent, data: { title: "Set up Progress" } },
  { path: "htmlViewExamplesComponent", component: HtmlViewxamplesComponent, data: { title: "HtmlView" } },
  { path: "creatingHtmlViewExampleComponent", component: CreatingHtmlViewExampleComponent, data: { title: "Create HtmlView" } },

  { path: "gesturesExamplesComponent", component: GesturesExamplesComponent, data: { title: "Gestures" } },
  { path: "tapGestureExampleComponent", component: TapExampleComponent, data: { title: "Tap" } },
  { path: "doubleTapGestureExampleComponent", component: DoubleTapExampleComponent, data: { title: "Double tap" } },
  { path: "longPressGestureExampleComponent", component: LongPressExampleComponent, data: { title: "Long press" } },
  { path: "swipeGestureExampleComponent", component: SwipeExampleComponent, data: { title: "Swipe" } },
  { path: "panGestureExampleComponent", component: PanExampleComponent, data: { title: "Pan" } },
  { path: "pinchGestureExampleComponent", component: PinchExampleComponent, data: { title: "Pinch" } },
  { path: "rotationGestureExampleComponent", component: RotationExampleComponent, data: { title: "Rotation" } },
  { path: "touchGestureExampleComponent", component: TouchExampleComponent, data: { title: "Touch" } },

  { path: "ngDirectivesExamplesComponent", component: NgDirectivesExamplesComponent, data: { title: "Angular directives" } },
  { path: "ngForRepeatItemsComponent", component: NgForRepeatItemsComponent, data: { title: "*ngFor repeat items" } },
  { path: "usingNgIfExampleComponent", component: UsingNgIfComponent, data: { title: "*ngIf basic usage" } },
  { path: "usingNgIfForPlatformSpecificComponent", component: UsingNgIfForPlatformSpecificComponent, data: { title: "*ngIf hiding elements" } },
  { path: "createCustomDirectiveExampleComponent", component: CreateCustomDirectiveExampleComponent, data: { title: "Create custom *ng directive" } },
  { path: "unlessDirectiveExampleComponent", component: UnlessDirectiveExampleComponent, data: { title: "Unless directive example" } },
  { path: "usingNgSwitchExampleComponent", component: UsingNgSwitchExamplesComponent, data: { title: "*ngSwitch basic usage" } },
  
  { path: "formattedStringExamplesComponent", component: FormattedStringExamplesComponent, data: { title: "Formatted String" } },
  { path: "createFormattedStringExampleComponent", component: CreateFormattedStringComponent, data: { title: "Create Formatted String" } },
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];