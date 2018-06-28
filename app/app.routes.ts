// tslint:disable:max-line-length
export const routes = [
    {
        path: "",
        loadChildren: "./examples-list.module#ExamplesListModule",
        data: { title: "NativeScript Code Samples" }
    },
    {
        path: "action-bar",
        loadChildren: "./ng-ui-widgets-category/action-bar/action-bar-examples.module#ActionBarExamplesModule",
        data: { title: "ActionBar" }
    },
    {
        path: "activity-indicator",
        loadChildren: "./ng-ui-widgets-category/activity-indicator/activity-indicator-examples.module#ActivityIndicatorExamplesModule",
        data: { title: "ActivityIndicator" }
    },
    {
        path: "animations",
        loadChildren: "./ng-ui-widgets-category/animations/animations-examples.module#AnimationsExamplesModule",
        data: { title: "Animations" }
    },
    {
        path: "button",
        loadChildren: "./ng-ui-widgets-category/button/button-examples.module#ButtonExamplesModule",
        data: { title: "Button" }
    },
    {
        path: "date-picker",
        loadChildren: "./ng-ui-widgets-category/date-picker/date-picker-examples.module#DatePickerExamplesModule",
        data: { title: "DatePicker" }
    },
    {
        path: "dialogs",
        loadChildren: "./ng-ui-widgets-category/dialogs/dialogs-examples.module#DialogsExamplesModule",
        data: { title: "Dialogs" }
    },
    {
        path: "formatted-string",
        loadChildren: "./ng-ui-widgets-category/formatted-string/formated-string-examples.module#FormattedStringExamplesModule",
        data: { title: "Formatted String" }
    },
    {
        path: "gestures",
        loadChildren: "./ng-ui-widgets-category/gestures/gestures-examples.module#GesturesExamplesModule",
        data: { title: "Gestures" }
    },
    {
        path: "html-view",
        loadChildren: "./ng-ui-widgets-category/htmlview/htmlview-examples.module#HtmlViewExamplesModule",
        data: { title: "HtmlView" }
    },
    {
        path: "icon-fonts",
        loadChildren: "./ng-ui-widgets-category/icon-fonts/iconfonts-examples.module#IconFontsExamplesModule",
        data: { title: "IconFonts" }
    },
    {
        path: "image",
        loadChildren: "./ng-ui-widgets-category/image/image-examples.module#ImageExamplesModule",
        data: { title: "Image" }
    },
    {
        path: "label",
        loadChildren: "./ng-ui-widgets-category/label/label-examples.module#LabelExamplesModule",
        data: { title: "Label" }
    },
    {
        path: "layouts",
        loadChildren: "./ng-ui-widgets-category/layouts/layouts-examples.module#LayoutsExamplesModule",
        data: { title: "Layouts" }
    },
    {
        path: "list-picker",
        loadChildren: "./ng-ui-widgets-category/listpicker/listpicker-examples.module#ListPickerExamplesModule",
        data: { title: "ListPicker" }
    },
    {
        path: "list-view",
        loadChildren: "./ng-ui-widgets-category/listview/listview-examples.module#ListViewExamplesModule",
        data: { title: "ListView" }
    },
    {
        path: "progress",
        loadChildren: "./ng-ui-widgets-category/progress/progress-examples.module#ProgressExamplesModule",
        data: { title: "Progress" }
    },
    {
        path: "scroll-view",
        loadChildren: "./ng-ui-widgets-category/scroll-view/scroll-view-examples.module#ScrollViewExamplesModule",
        data: { title: "ScrollView" }
    },
    {
        path: "search-bar",
        loadChildren: "./ng-ui-widgets-category/search-bar/search-bar-examples.module#SearchBarExamplesModule",
        data: { title: "SearchBar" }
    },
    {
        path: "segmented-bar",
        loadChildren: "./ng-ui-widgets-category/segmented-bar/segmented-bar-examples.module#SegmentedBarExamplesModule",
        data: { title: "SegmentedBar" }
    },
    {
        path: "slider",
        loadChildren: "./ng-ui-widgets-category/slider/slider-examples.module#SliderExamplesModule",
        data: { title: "Slider" }
    },
    {
        path: "style",
        loadChildren: "./ng-ui-widgets-category/style/style-examples.module#StyleExamplesModule",
        data: { title: "Style" }
    },
    {
        path: "switch",
        loadChildren: "./ng-ui-widgets-category/switch/switch-examples.module#SwitchExamplesModule",
        data: { title: "Switch" }
    },
    {
        path: "tab-view",
        loadChildren: "./ng-ui-widgets-category/tab-view/tab-view-examples.module#TabViewExamplesModule",
        data: { title: "TabView" }
    },
    {
        path: "text-field",
        loadChildren: "./ng-ui-widgets-category/text-field/text-field-examples.module#TextFieldExamplesModule",
        data: { title: "TextField" }
    },
    {
        path: "text-view",
        loadChildren: "./ng-ui-widgets-category/text-view/text-view-examples.module#TextViewExamplesModule",
        data: { title: "TextView" }
    },
    {
        path: "time-picker",
        loadChildren: "./ng-ui-widgets-category/time-picker/time-picker-examples.module#TimePickerExamplesModule",
        data: { title: "TimePicker" }
    },
    {
        path: "web-view",
        loadChildren: "./ng-ui-widgets-category/web-view/web-view-examples.module#WebViewExamplesModule",
        data: { title: "WebView" }
    },
    {
        path: "application",
        loadChildren: "./ng-framework-modules-category/application/application-examples.module#ApplicationExamplesModule",
        data: { title: "Application" }
    },
    {
        path: "application-settings",
        loadChildren: "./ng-framework-modules-category/application-settings/application-settings-examples.module#ApplicationSettingsExamplesModule",
        data: { title: "Application Settings" }
    },
    {
        path: "camera",
        loadChildren: "./ng-hardware-access-category/camera/camera-examples.module#CameraExamplesModule",
        data: { title: "Camera" }
    },
    {
        path: "color",
        loadChildren: "./ng-framework-modules-category/color/color-examples.module#ColorExamplesModule",
        data: { title: "Color" }
    },
    {
        path: "angular-directives",
        loadChildren: "./ng-ui-widgets-category/ng-directives/ng-directives-examples.module#NgDirectivesExamplesModule",
        data: { title: "Angular directives" }
    },
    {
        path: "trace",
        loadChildren: "./ng-framework-modules-category/trace/trace-examples.module#TraceExamplesModule",
        data: { title: "Trace Module" }
    },
    {
        path: "timer",
        loadChildren: "./ng-framework-modules-category/timer/timer-examples.module#TimerExamplesModule",
        data: { title: "Timer Module" }
    },
    {
        path: "content-screens",
        loadChildren: "./common-screens-category/content-screens/content-screens-examples.module#ContentScreensExamplesModule",
        data: { title: "Content Screens" }
    },
    {
        path: "dataentry",
        loadChildren: "./common-screens-category/dataentry/extended-dataentry-examples.module#ExtendedDataentryExamplesModule",
        data: { title: "Data Entry (extended examples)" }
    },
    {
        path: "extended-listview",
        loadChildren: "./common-screens-category/lists-category/extended-listview-examples.module#ExtendedListViewExamplesModule",
        data: { title: "ListView (extended examples)" }
    },
    {
        path: "userprofile",
        loadChildren: "./common-screens-category/userprofile/extended-userprofile-examples.module#ExtendedUserProfileExamplesModule",
        data: { title: "User Profile (extended examples)" }
    },
    {
        path: "connectivity",
        loadChildren: "./ng-framework-modules-category/connectivity/connectivity-examples.module#ConnectivityExamplesModule",
        data: { title: "Connectivity" }
    },
    {
        path: "file-system",
        loadChildren: "./ng-framework-modules-category/file-system/file-system-examples.module#FetchExamplesModule",
        data: { title: "File System" }
    },
    {
        path: "location",
        loadChildren: "./ng-hardware-access-category/location/location-examples.module#LocationExamplesModule",
        data: { title: "Location" }
    },
    {
        path: "modal-page",
        loadChildren: "./ng-ui-widgets-category/modal-page/modal-page-examples.module#ModalPageExamplesModule",
        data: { title: "Modal page" }
    },
    {
        path: "color",
        loadChildren: "./ng-framework-modules-category/color/color-examples.module#ColorExamplesModule",
        data: { title: "Color" }
    },
    {
        path: "http",
        loadChildren: "./ng-framework-modules-category/http/http-examples.module#HttpExamplesModule",
        data: { title: "HTTP Module" }
    },
    {
        path: "fps-meter",
        loadChildren: "./ng-framework-modules-category/fps-meter/fps-meter-examples.module#FpsExamplesModule",
        data: { title: "FPS Meter" }
    },
    {
        path: "platform",
        loadChildren: "./ng-framework-modules-category/platform/platform-examples.module#PlatformExamplesModule",
        data: { title: "Platform Module" }
    },
    {
        path: "routing",
        loadChildren: "./ng-framework-modules-category/routing/routing-examples.module#RoutingExamplesModule",
        data: { title: "Angular routing" }
    }
];
