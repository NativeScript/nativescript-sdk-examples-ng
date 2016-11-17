/*
import { LayoutsExamplesComponent } from "./ui-category/layouts/layouts-examples.component";
import { AbsoluteLayoutComponent } from "./ui-category/layouts/absolute-layout/absolute-layout.component";
import { DockLayoutComponent } from "./ui-category/layouts/dock-layout/dock-layout.component";
import { GridLayoutComponent } from "./ui-category/layouts/grid-layout/grid-layout.component";
import { StackLayoutComponent } from "./ui-category/layouts/stack-layout/stack-layout.component";
import { WrapLayoutComponent } from "./ui-category/layouts/wrap-layout/wrap-layout.component";
import { TimePickerExamplesComponent } from "./ui-category/time-picker/time-picker-examples.component";
import { ConfigureTimePickerComponent } from "./ui-category/time-picker/configure-time-picker/configure-time-picker.component";
import { LabelExamplesComponent } from "./ui-category/label/label-examples.component";
import { CreatingLabelComponent } from "./ui-category/label/creating-label/creating-label.component";
import { ListPickerExamplesComponent } from "./ui-category/listpicker/listpicker-examples.component";
import { CreatingListPickerComponent } from "./ui-category/listpicker/creating-listpicker/creating-listpicker.component";
import { UsingSelectedIndexExampleComponent } from "./ui-category/listpicker/using-selected-index/using-selected-index.component";
import { ListViewExamplesComponent } from "./ui-category/listview/listview-examples.component";
import { CreatingListViewComponent } from "./ui-category/listview/creating-listview/creating-listview.component";
import { CustomizingListViewComponent } from "./ui-category/listview/customizing-listview/customizing-listview.component";
import { UsingItemTemplateComponent } from "./ui-category/listview/using-item-template/using-item-template.component";
import { UsingAsyncPipeComponent } from "./ui-category/listview/using-async-pipe/using-async-pipe.component";
import { ProgressExamplesComponent } from "./ui-category/progress/progress-examples.component";
import { CreatingProgressComponent } from "./ui-category/progress/creating-progress/creating-progress.component";
import { SettingProgressComponent } from "./ui-category/progress/setting-progress/setting-progress.component";
import { NgForRepeatItemsComponent } from "./ui-category/ng-directives/ngfor-items/repeat-items.component";
import { ImageExamplesComponent } from "./ui-category/image/image-examples.component";
import { CreatingImageExampleComponent } from "./ui-category/image/creating-image/creating-image.component";
import { HtmlViewxamplesComponent } from "./ui-category/htmlview/htmlview-examples.component";
import { CreatingHtmlViewExampleComponent } from "./ui-category/htmlview/creating-htmlview/creating-htmlview.component";
import { ScrollViewExamplesComponent } from "./ui-category/scroll-view/scroll-view-examples.component";
import { ScrollViewHorizontalComponent } from "./ui-category/scroll-view/horizontal/scroll-view-horizontal.component";
import { ScrollViewVerticalComponent } from "./ui-category/scroll-view/vertical/scroll-view-vertical.component";
import { ScrollEventComponent } from "./ui-category/scroll-view/scroll-event/scroll-event.component";
import { SearchBarExamplesComponent } from "./ui-category/search-bar/search-bar-examples.component";
import { BasicSearchBarComponent } from "./ui-category/search-bar/basic-search-bar/basic-search-bar.component";
import { ClearSearchBarComponent } from "./ui-category/search-bar/clear-search-bar/clear-search-bar.component";
import { SearchBarBindingComponent } from "./ui-category/search-bar/search-bar-binding/search-bar-binding.component";
import { SegmentedBarExamplesComponent } from "./ui-category/segmented-bar/segmented-bar-examples.component";
import { BasicSegmentedBarComponent } from "./ui-category/segmented-bar/basic-segmented-bar/basic-segmented-bar.component";
import { SegmentedBarViewsComponent } from "./ui-category/segmented-bar/segmented-bar-views/segmented-bar-views.component";
import { SliderExamplesComponent } from "./ui-category/slider/slider-examples.component";
import { BasicSliderComponent } from "./ui-category/slider/basic-slider/basic-slider.component";
import { SliderAccessValueComponent } from "./ui-category/slider/slider-access-value-code/slider-access-value.component";
import { SwitchExamplesComponent } from "./ui-category/switch/switch-examples.component";
import { BasicSwitchComponent } from "./ui-category/switch/basic-switch/basic-switch.component";
import { DisableSwitchComponent } from "./ui-category/switch/disable-switch/disable-switch.component";
import { StylingSwitchComponent } from "./ui-category/switch/styling-switch/styling-switch.component";
import { TabViewExamplesComponent } from "./ui-category/tab-view/tab-view-examples.component";
import { BasicTabViewComponent } from "./ui-category/tab-view/basic-tab-view/basic-tab-view.component";
import { TabViewItemsComponent } from "./ui-category/tab-view/tab-view-items/tab-view-items.component";
import { TextFieldExamplesComponent } from "./ui-category/text-field/text-field-examples.component";
import { BasicTextFieldComponent } from "./ui-category/text-field/basic-text-field/basic-text-field.component";
import { TextFieldBindingComponent } from "./ui-category/text-field/text-field-binding/text-field-binding.component";
import { TextViewExamplesComponent } from "./ui-category/text-view/text-view-examples.component";
import { BasicTextViewComponent } from "./ui-category/text-view/basic-text-view/basic-text-view.component";
import { WebViewExamplesComponent } from "./ui-category/web-view/web-view-examples.component";
import { BasicWebViewComponent } from "./ui-category/web-view/basic-web-view/basic-web-view.component";
import { WebViewHtmlComponent } from "./ui-category/web-view/web-view-html/web-view-html.component";
import { StyleExamplesComponent } from "./ui-category/style/style-examples.component";
import { StyleCSSFileComponent } from "./ui-category/style/style-css-file/style-css-file.component";
import { ApplyStyleCodeComponent } from "./ui-category/style/apply-style-via-code/apply-style-code.component";

import { GesturesExamplesComponent } from "./ui-category/gestures/gestures-examples.component";
import { TapExampleComponent } from "./ui-category/gestures/tap/tap.component";
import { DoubleTapExampleComponent } from "./ui-category/gestures/double-tap/double-tap.component";
import { LongPressExampleComponent } from "./ui-category/gestures/long-press/long-press.component";
import { SwipeExampleComponent } from "./ui-category/gestures/swipe/swipe.component";
import { PanExampleComponent } from "./ui-category/gestures/pan/pan.component";
import { PinchExampleComponent } from "./ui-category/gestures/pinch/pinch.component";
import { RotationExampleComponent } from "./ui-category/gestures/rotation/rotation.component";
import { TouchExampleComponent } from "./ui-category/gestures/touch/touch.component";

import { NgDirectivesExamplesComponent } from "./ui-category/ng-directives/ng-directives-examples.component";
import { UsingNgIfComponent } from "./ui-category/ng-directives/using-ngif/using-ngif.component";
import { UsingNgIfForPlatformSpecificComponent } from "./ui-category/ng-directives/using-ngif-for-platform-specific/using-ngif-for-platform-specific.component";
import { CreateCustomDirectiveExampleComponent } from "./ui-category/ng-directives/create-custom-directive/create-custom-directive.component";
import { UnlessDirectiveExampleComponent } from "./ui-category/ng-directives/unless-directive/unless-directive.component";
import { UsingNgSwitchExamplesComponent } from "./ui-category/ng-directives/ngswitch-usage/ngswitch-usage.component";
import { FormattedStringExamplesComponent } from "./ui-category/formatted-string/formated-string-examples.component";
import { CreateFormattedStringComponent } from "./ui-category/formatted-string/create-formatted-string/create-formatted-string.component";
import { TraceExamplesComponent } from "./trace/trace-examples.component";
import { TraceSpecificCategoriesExampleComponent } from "./trace/trace-specific-categories/trace-specific-categories-example.component";
import { CustomTraceWriterExampleComponent } from "./trace/custom-tracewriter/custom-tracewriter-example.component";
import { TimerExamplesComponent } from "./timer/timer-examples.component";
import { SetIntervalTimerModuleExampleComponent } from "./timer/setinterval-timer-module-example/setinterval-timer-module-example";
import { SettimeoutTimerModuleExample } from "./timer/settimeout-timer-module-example/settimeout-timer-module-example";
import { PlatformExamplesComponent } from "./platform/platform-examples.component";
import { PlatformModuleExampleComponent } from "./platform/platform-module-example/platform-module-example";
import { LocationExamplesComponent } from "./location/location-examples.component";
import { BasicLocationExampleComponent } from "./location/basic-location-example/basic-location-example";
import { LocationMonitoringExampleComponent } from "./location/location-monitoring-example/location-monitoring-example";
import { FPSExamplesComponent } from "./fpsMeter/fps-meter-examples.component";
import { FPSMeterModuleExampleComponent } from "./fpsMeter/fps-meter-module-example/fps-meter-module-example";
import { HTTPModuleComponent } from "./httpModule/http-module-examples.component";
import { HTTPModulePostExampleComponent } from "./httpModule/http-module-post/http-module-post";
import { HTTPModuleGetExampleComponent } from "./httpModule/http-module-get/http-module-get";
import { ApplicationExamplesComponent } from "./application/application-examples.component";
import { AppCheckingTargetExampleComponent } from "./application/app-checking-target/app-checking-target.component";
import { AppUsingAndroidExampleComponent } from "./application/app-using-android-specifics/app-using-android-specifics.component";
import { AppUsingIosExampleComponent } from "./application/app-using-ios-specifics/app-using-ios-specifics.component";
import { ApplicationSettingsExamplesComponent } from "./application-settings/application-settings-examples.component"
import { ValuesExampleComponent } from "./application-settings/values/values.component"
import { ColorExamplesComponent } from "./color/color-examples.component";
import { CreatingColorsExampleComponent, HexPipe } from "./color/creating-colors/creating-colors.component";
import { ConnectivityExamplesComponent } from "./connectivity/connectivity-examples.component";
import { UsingConnectivityExampleComponent } from "./connectivity/using-connectivity/using-connectivity.component";
import { FetchExamplesComponent } from "./fetch/fetch-examples.component";
import { FetchGetExampleComponent } from "./fetch/fetch-get/fetch-get.component";
import { FetchPostExampleComponent } from "./fetch/fetch-post/fetch-post.component";
import { FileSystemxamplesComponent } from "./file-system/file-system-examples.component";
import { PathsExampleComponent } from "./file-system/paths/paths.component";
import { CreateExampleComponent } from "./file-system/create/create.component";
import { ReadExampleComponent } from "./file-system/read/read.component";
import { UpdateExampleComponent } from "./file-system/update/update.component";
import { DeleteExampleComponent } from "./file-system/delete/delete.component";
import { ModalPageExamplesComponent } from "./modal-page/modal-page-examples.component";
import { SampleModalPageModuleExampleComponent } from "./modal-page/sample-modal-page-module-example/sample-modal-page-module-example";

import { ExtendedListViewExamplesComponent } from "./common-screens-category/listview/extended-listview-examples.component";
import { SingleLineListViewExampleComponent } from "./common-screens-category/listview/single-line/single-line-listview.component";
import { GroupedSingleLineListViewExampleComponent } from "./common-screens-category/listview/single-line-grouped/grouped-single-line.component";
import { TwoLineListViewExampleComponent } from "./common-screens-category/listview/two-line/two-line-listview.component";
import { MultiLineListViewExampleComponent } from "./common-screens-category/listview/multi-line/multi-line.component";
import { MultiLineGroupedListViewExampleComponent } from "./common-screens-category/listview/multi-line-grouped/multi-line-grouped.component";
import { MultiLineBigListViewExampleComponent } from "./common-screens-category/listview/multi-line-big/multi-line-big.component";
import { GroupedTwoLinesListViewExampleComponent } from "./common-screens-category/listview/two-lines-grouped/grouped-two-lines.component";
import { CardsListViewExampleComponent } from "./common-screens-category/listview/cards/cards-listview.component";
import { HorizontalScrollingExampleComponent } from "./common-screens-category/listview/horizontal-scrolling/horizontal-scrolling.component";
import { HeaderWithMapExampleComponent } from "./common-screens-category/listview/header-with-map/header-with-map.component";

import { ContentScreensExamplesComponent } from "./common-screens-category/content-screens/content-screens-examples.component";
import { ContentScrollablePageExampleComponent } from "./common-screens-category/content-screens/content-scrollable/content-scrollable-example.component";

import { ExtendedDataEntryExamplesComponent } from "./common-screens-category/dataentry/extended-dataentry-examples.component";
import { WelcomeDataEntryExampleComponent } from "./common-screens-category/dataentry/dataentry-welcome/dataentry-welcome.component";
import { SocialLoginDataEntryExampleComponent } from "./common-screens-category/dataentry/dataentry-sociallogin/dataentry-sociallogin.component";
import { SignupDataEntryExampleComponent } from "./common-screens-category/dataentry/dataentry-signup/dataentry-signup.component";
import { ExtendedUserProfileExamplesComponent } from "./common-screens-category/userprofile/extended-userprofile-examples.component";
import { UserFeedImagesExampleComponent } from "./common-screens-category/userprofile/user-feed-images/user-feed-images.component";
import { UserSettingsMenuExampleComponent } from "./common-screens-category/userprofile/user-settings-menu/user-settings-menu.component";
import { UserFeedExampleComponent } from "./common-screens-category/userprofile/user-feed/user-feed.component";

import { FlexboxLayoutComponentOne } from "./ui-category/layouts/flexbox-layout-one/flexbox-layout.component";
import { FlexboxLayoutComponentTwo } from "./ui-category/layouts/flexbox-layout-two/flexbox-layout.component";
import { FlexboxLayoutComponentThree } from "./ui-category/layouts/flexbox-layout-three/flexbox-layout.component";

import { CameraExamplesComponent } from "./camera/camera-examples.component";
import { UsingCameraExampleComponent } from "./camera/using-camera/using-camera.component";
*/

import { HexPipe } from "./color/creating-colors/creating-colors.component";

export var examplePipes = [
    HexPipe
];

export const routes = [
    {
        path: "",
        loadChildren: () => require("./examples-list.module")["ExamplesListModule"],
        data: { title: "NativeScript Code Samples" }
    },
    {
        path: "action-bar",
        loadChildren: () => require("./ui-category/action-bar/action-bar-examples.module")["ActionBarExamplesModule"],
        data: { title: "ActionBar" }
    },
    {
        path: "activity-indicator",
        loadChildren: () => require("./ui-category/activity-indicator/activity-indicator-examples.module")["ActivityIndicatorExamplesModule"],
        data: { title: "ActivityIndicator" }
    },
    {
        path: "animations",
        loadChildren: () => require("./ui-category/animations/animations-examples.module")["AnimationsExamplesModule"],
        data: { title: "Animations" }
    },
    {
        path: "button",
        loadChildren: () => require("./ui-category/button/button-examples.module")["ButtonExamplesModule"],
        data: { title: "Button" }
    },
    {
        path: "date-picker",
        loadChildren: () => require("./ui-category/date-picker/date-picker-examples.module")["DatePickerExamplesModule"],
        data: { title: "DatePicker" }
    },
    {
        path: "dialogs",
        loadChildren: () => require("./ui-category/dialogs/dialogs-examples.module")["DialogsExamplesModule"],
        data: { title: "Dialogs" }
    },
    {
        path: "formatted-string",
        loadChildren: () => require("./ui-category/formatted-string/formated-string-examples.module")["FormattedStringExamplesModule"],
        data: { title: "Formatted String" }
    },
    {
        path: "gestures",
        loadChildren: () => require("./ui-category/gestures/gestures-examples.module")["GesturesExamplesModule"],
        data: { title: "Gestures" }
    },
    {
        path: "html-view",
        loadChildren: () => require("./ui-category/htmlview/htmlview-examples.module")["HtmlViewExamplesModule"],
        data: { title: "HtmlView" }
    },
    {
        path: "image",
        loadChildren: () => require("./ui-category/image/image-examples.module")["ImageExamplesModule"],
        data: { title: "Image" }
    },
    {
        path: "label",
        loadChildren: () => require("./ui-category/label/label-examples.module")["LabelExamplesModule"],
        data: { title: "Label" }
    },
    {
        path: "layouts",
        loadChildren: () => require("./ui-category/layouts/layouts-examples.module")["LayoutsExamplesModule"],
        data: { title: "Layouts" }
    },
    {
        path: "list-picker",
        loadChildren: () => require("./ui-category/listpicker/listpicker-examples.module")["ListPickerExamplesModule"],
        data: { title: "ListPicker" }
    },
    {
        path: "list-view",
        loadChildren: () => require("./ui-category/listview/listview-examples.module")["ListViewExamplesModule"],
        data: { title: "ListView" }
    },
    {
        path: "progress",
        loadChildren: () => require("./ui-category/progress/progress-examples.module")["ProgressExamplesModule"],
        data: { title: "Progress" }
    },
    {
        path: "scroll-view",
        loadChildren: () => require("./ui-category/scroll-view/scroll-view-examples.module")["ScrollViewExamplesModule"],
        data: { title: "ScrollView" }
    },
    {
        path: "search-bar",
        loadChildren: () => require("./ui-category/search-bar/search-bar-examples.module")["SearchBarExamplesModule"],
        data: { title: "SearchBar" }
    },
    {
        path: "segmented-bar",
        loadChildren: () => require("./ui-category/segmented-bar/segmented-bar-examples.module")["SegmentedBarExamplesModule"],
        data: { title: "SegmentedBar" }
    },
    {
        path: "slider",
        loadChildren: () => require("./ui-category/slider/slider-examples.module")["SliderExamplesModule"],
        data: { title: "Slider" }
    },
    {
        path: "style",
        loadChildren: () => require("./ui-category/style/style-examples.module")["StyleExamplesModule"],
        data: { title: "Style" }
    },
    {
        path: "switch",
        loadChildren: () => require("./ui-category/switch/switch-examples.module")["SwitchExamplesModule"],
        data: { title: "Switch" }
    },
    {
        path: "tab-view",
        loadChildren: () => require("./ui-category/tab-view/tab-view-examples.module")["TabViewExamplesModule"],
        data: { title: "TabView" }
    },
    {
        path: "text-field",
        loadChildren: () => require("./ui-category/text-field/text-field-examples.module")["TextFieldExamplesModule"],
        data: { title: "TextField" }
    },
    {
        path: "text-view",
        loadChildren: () => require("./ui-category/text-view/text-view-examples.module")["TextViewExamplesModule"],
        data: { title: "TextView" }
    },
    {
        path: "time-picker",
        loadChildren: () => require("./ui-category/time-picker/time-picker-examples.module")["TimePickerExamplesModule"],
        data: { title: "TimePicker" }
    },
    {
        path: "web-view",
        loadChildren: () => require("./ui-category/web-view/web-view-examples.module")["WebViewExamplesModule"],
        data: { title: "WebView" }
    },
    {
        path: "application",
        loadChildren: () => require("./application/application-examples.module")["ApplicationExamplesModule"],
        data: { title: "Application" }
    },
    {
        path: "application-settings",
        loadChildren: () => require("./application-settings/application-settings-examples.module")["ApplicationSettingsExamplesModule"],
        data: { title: "Application Settings" }
    },
    {
        path: "camera",
        loadChildren: () => require("./camera/camera-examples.module")["CameraExamplesModule"],
        data: { title: "Camera" }
    }


    /*
    routeEntry({ path: "ngDirectivesExamplesComponent", component: NgDirectivesExamplesComponent, data: { title: "Angular directives" } }),
    routeEntry({ path: "ngForRepeatItemsComponent", component: NgForRepeatItemsComponent, data: { title: "*ngFor repeat items" } }),
    routeEntry({ path: "usingNgIfExampleComponent", component: UsingNgIfComponent, data: { title: "*ngIf basic usage" } }),
    routeEntry({ path: "usingNgIfForPlatformSpecificComponent", component: UsingNgIfForPlatformSpecificComponent, data: { title: "*ngIf hiding elements" } }),
    routeEntry({ path: "createCustomDirectiveExampleComponent", component: CreateCustomDirectiveExampleComponent, data: { title: "Create custom *ng directive" } }),
    routeEntry({ path: "unlessDirectiveExampleComponent", component: UnlessDirectiveExampleComponent, data: { title: "Unless directive example" } }),
    routeEntry({ path: "usingNgSwitchExampleComponent", component: UsingNgSwitchExamplesComponent, data: { title: "*ngSwitch basic usage" } }),
    
    routeEntry({ path: "applicationSettingsExamplesComponent", component: ApplicationSettingsExamplesComponent, data: { title: "Application Settings" } }),
    
    routeEntry({ path: "valuesExampleComponent", component: ValuesExampleComponent, data: { title: "Working with values" } }),
    routeEntry({ path: "colorExamplesComponent", component: ColorExamplesComponent, data: { title: "Color" } }),
    routeEntry({ path: "creatingColorsExampleComponent", component: CreatingColorsExampleComponent, data: { title: "Creating Colors" } }),
    routeEntry({ path: "connectivityExamplesComponent", component: ConnectivityExamplesComponent, data: { title: "Connectivity" } }),
    routeEntry({ path: "usingConnectivityExampleComponent", component: UsingConnectivityExampleComponent, data: { title: "Using Connectivity" } }),
    routeEntry({ path: "fetchExamplesComponent", component: FetchExamplesComponent, data: { title: "Fetch" } }),
    routeEntry({ path: "fetchGetExampleComponent", component: FetchGetExampleComponent, data: { title: "Fetch GET" } }),
    routeEntry({ path: "fetchPostExampleComponent", component: FetchPostExampleComponent, data: { title: "Fetch POST" } }),
    routeEntry({ path: "fileSystemxamplesComponent", component: FileSystemxamplesComponent, data: { title: "File System" } }),
    routeEntry({ path: "pathsExampleComponent", component: PathsExampleComponent, data: { title: "Paths" } }),
    routeEntry({ path: "createExampleComponent", component: CreateExampleComponent, data: { title: "Create" } }),
    routeEntry({ path: "readExampleComponent", component: ReadExampleComponent, data: { title: "Read" } }),
    routeEntry({ path: "updateExampleComponent", component: UpdateExampleComponent, data: { title: "Update" } }),
    routeEntry({ path: "deleteExampleComponent", component: DeleteExampleComponent, data: { title: "Delete" } }),
    routeEntry({ path: "traceExampleComponent", component: TraceExamplesComponent, data: { title: "Trace Module" } }),
    routeEntry({ path: "traceSpecificCategoriesExampleComponent", component: TraceSpecificCategoriesExampleComponent, data: { title: "Trace specific categories" } }),
    routeEntry({ path: "customTraceWriterExampleComponent", component: CustomTraceWriterExampleComponent, data: { title: "Writing a custom traceWriter" } }),
    routeEntry({ path: "timerExamplesComponent", component: TimerExamplesComponent, data: { title: "Timer Module" } }),
    routeEntry({ path: "setintervalTimerModuleExampleComponent", component: SetIntervalTimerModuleExampleComponent, data: { title: "setInterval example" } }),
    routeEntry({ path: "settimeoutTimerModuleExample", component: SettimeoutTimerModuleExample, data: { title: "setTimeout example" } }),
    routeEntry({ path: "platformExamplesComponent", component: PlatformExamplesComponent, data: { title: "Platform Module" } }),
    routeEntry({ path: "platformModuleExampleComponent", component: PlatformModuleExampleComponent, data: { title: "Platform module example" } }),
    routeEntry({ path: "locationExamplesComponent", component: LocationExamplesComponent, data: { title: "Location Module" } }),
    routeEntry({ path: "basicLocationExampleComponent", component: BasicLocationExampleComponent, data: { title: "Basic location example" } }),
    routeEntry({ path: "locationMonitoringExampleComponent", component: LocationMonitoringExampleComponent, data: { title: "Location monitoring example" } }),
    routeEntry({ path: "fpsExamplesComponent", component: FPSExamplesComponent, data: { title: "FPS Meter" } }),
    routeEntry({ path: "fpsMeterModuleExampleComponent", component: FPSMeterModuleExampleComponent, data: { title: "FPS meter example" } }),
    routeEntry({ path: "httpModuleComponent", component: HTTPModuleComponent, data: { title: "HTTP Module" } }),
    routeEntry({ path: "httpModulePostExampleComponent", component: HTTPModulePostExampleComponent, data: { title: "HTTP post JSON example" } }),
    routeEntry({ path: "httpModuleGetExampleComponent", component: HTTPModuleGetExampleComponent, data: { title: "HTTP get example" } }),
    routeEntry({ path: "modalPageExamplesComponent", component: ModalPageExamplesComponent, data: { title: "Modal page" } }),
    routeEntry({ path: "sampleModalPageModuleExampleComponent", component: SampleModalPageModuleExampleComponent, data: { title: "Modal page example" } }),

    routeEntry({ path: "extendedListViewExamplesComponent", component: ExtendedListViewExamplesComponent, data: { title: "ListView (extended examples)" } }),
    routeEntry({ path: "singleLineListViewExampleComponent", component: SingleLineListViewExampleComponent, data: { title: "Single line items" } }),
    routeEntry({ path: "groupedSingleLineListViewExampleComponent", component: GroupedSingleLineListViewExampleComponent, data: { title: "Grouped single line items" } }),
    routeEntry({path: "twoLineListViewExampleComponent", component: TwoLineListViewExampleComponent, data:{ title: "Two line items" }}),
    routeEntry({ path: "multiLineListViewExampleComponent", component: MultiLineListViewExampleComponent, data: { title: "Multi line items" } }),
    routeEntry({ path: "multiLineGroupedListViewExampleComponent", component: MultiLineGroupedListViewExampleComponent, data: { title: "Grouped multi line items" } }),
    routeEntry({ path: "multiLineBigListViewExampleComponent", component: MultiLineBigListViewExampleComponent, data: { title: "Multi line items - bigger thumbnails" } }),
    routeEntry({path: "groupedTwoLinesListViewExampleComponent", component: GroupedTwoLinesListViewExampleComponent, data:{ title: "Two line items" }}),
    routeEntry({path:"cardsListViewExampleComponent", component: CardsListViewExampleComponent, data:{ title: "Cards" }}),
    routeEntry({path:"headerWithMapExampleComponent", component: HeaderWithMapExampleComponent, data:{ title: "Header with map" }}),
    routeEntry({path:"horizontalScrollingExampleComponent", component: HorizontalScrollingExampleComponent, data:{ title: "Horizontal scrolling" }}),
    
    routeEntry({ path: "contentScreensExamplesComponent", component: ContentScreensExamplesComponent, data: { title: "Content Screens" } }),    
    routeEntry({ path: "contentScrollablePageExampleComponent", component: ContentScrollablePageExampleComponent, data: { title: "Scrollable content page" } }),  

    routeEntry({path:"extendedDataEntryExamplesComponent", component: ExtendedDataEntryExamplesComponent, data:{ title: "Data entry" }}),
    routeEntry({path:"welcomeDataEntryExampleComponent", component: WelcomeDataEntryExampleComponent, data:{ title: "Welcome data entry" }}),
    routeEntry({path:"socialLoginDataEntryExampleComponent", component: SocialLoginDataEntryExampleComponent, data:{ title: "Social login data entry" }}),
    routeEntry({path:"signupDataEntryExampleComponent", component: SignupDataEntryExampleComponent, data:{ title: "Sign up data entry" }}),
    routeEntry({path:"extendedUserProfileExamplesComponent", component: ExtendedUserProfileExamplesComponent, data:{ title: "User profile" }}),
    routeEntry({path:"userFeedImagesExampleComponent", component: UserFeedImagesExampleComponent, data:{ title: "User feed with images" }}),
    routeEntry({path:"userSettingsMenuExampleComponent", component: UserSettingsMenuExampleComponent, data:{ title: "User settings menu" }}),
    routeEntry({path:"userFeedExampleComponent", component: UserFeedExampleComponent, data:{ title: "User feed" }}),

    routeEntry({ path: "cameraExamplesComponent", component: CameraExamplesComponent, data: { title: "Camera" } }),
    routeEntry({ path: "usingCameraExampleComponent", component: UsingCameraExampleComponent, data: { title: "Using camera" } }),     
    */
];