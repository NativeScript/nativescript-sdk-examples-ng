// tslint:disable:max-line-length
export const routes = [
    {
        path: "",
        loadChildren: "./examples-list.module#ExamplesListModule",
        data: { title: "NativeScript Code Samples" }
    },
    {
        path: "action-bar",
        loadChildren: "./ui-category/action-bar/action-bar-examples.module#ActionBarExamplesModule",
        data: { title: "ActionBar" }
    },
    {
        path: "activity-indicator",
        loadChildren: "./ui-category/activity-indicator/activity-indicator-examples.module#ActivityIndicatorExamplesModule",
        data: { title: "ActivityIndicator" }
    },
    {
        path: "animations",
        loadChildren: "./ui-category/animations/animations-examples.module#AnimationsExamplesModule",
        data: { title: "Animations" }
    },
    {
        path: "button",
        loadChildren: "./ui-category/button/button-examples.module#ButtonExamplesModule",
        data: { title: "Button" }
    },
    {
        path: "date-picker",
        loadChildren: "./ui-category/date-picker/date-picker-examples.module#DatePickerExamplesModule",
        data: { title: "DatePicker" }
    },
    {
        path: "dialogs",
        loadChildren: "./ui-category/dialogs/dialogs-examples.module#DialogsExamplesModule",
        data: { title: "Dialogs" }
    },
    {
        path: "formatted-string",
        loadChildren: "./ui-category/formatted-string/formated-string-examples.module#FormattedStringExamplesModule",
        data: { title: "Formatted String" }
    },
    {
        path: "gestures",
        loadChildren: "./ui-category/gestures/gestures-examples.module#GesturesExamplesModule",
        data: { title: "Gestures" }
    },
    {
        path: "html-view",
        loadChildren: "./ui-category/htmlview/htmlview-examples.module#HtmlViewExamplesModule",
        data: { title: "HtmlView" }
    },
    {
        path: "image",
        loadChildren: "./ui-category/image/image-examples.module#ImageExamplesModule",
        data: { title: "Image" }
    },
    {
        path: "label",
        loadChildren: "./ui-category/label/label-examples.module#LabelExamplesModule",
        data: { title: "Label" }
    },
    {
        path: "layouts",
        loadChildren: "./ui-category/layouts/layouts-examples.module#LayoutsExamplesModule",
        data: { title: "Layouts" }
    },
    {
        path: "list-picker",
        loadChildren: "./ui-category/listpicker/listpicker-examples.module#ListPickerExamplesModule",
        data: { title: "ListPicker" }
    },
    {
        path: "list-view",
        loadChildren: "./ui-category/listview/listview-examples.module#ListViewExamplesModule",
        data: { title: "ListView" }
    },
    {
        path: "progress",
        loadChildren: "./ui-category/progress/progress-examples.module#ProgressExamplesModule",
        data: { title: "Progress" }
    },
    {
        path: "scroll-view",
        loadChildren: "./ui-category/scroll-view/scroll-view-examples.module#ScrollViewExamplesModule",
        data: { title: "ScrollView" }
    },
    {
        path: "search-bar",
        loadChildren: "./ui-category/search-bar/search-bar-examples.module#SearchBarExamplesModule",
        data: { title: "SearchBar" }
    },
    {
        path: "segmented-bar",
        loadChildren: "./ui-category/segmented-bar/segmented-bar-examples.module#SegmentedBarExamplesModule",
        data: { title: "SegmentedBar" }
    },
    {
        path: "slider",
        loadChildren: "./ui-category/slider/slider-examples.module#SliderExamplesModule",
        data: { title: "Slider" }
    },
    {
        path: "style",
        loadChildren: "./ui-category/style/style-examples.module#StyleExamplesModule",
        data: { title: "Style" }
    },
    {
        path: "switch",
        loadChildren: "./ui-category/switch/switch-examples.module#SwitchExamplesModule",
        data: { title: "Switch" }
    },
    {
        path: "tab-view",
        loadChildren: "./ui-category/tab-view/tab-view-examples.module#TabViewExamplesModule",
        data: { title: "TabView" }
    },
    {
        path: "text-field",
        loadChildren: "./ui-category/text-field/text-field-examples.module#TextFieldExamplesModule",
        data: { title: "TextField" }
    },
    {
        path: "text-view",
        loadChildren: "./ui-category/text-view/text-view-examples.module#TextViewExamplesModule",
        data: { title: "TextView" }
    },
    {
        path: "time-picker",
        loadChildren: "./ui-category/time-picker/time-picker-examples.module#TimePickerExamplesModule",
        data: { title: "TimePicker" }
    },
    {
        path: "web-view",
        loadChildren: "./ui-category/web-view/web-view-examples.module#WebViewExamplesModule",
        data: { title: "WebView" }
    },
    {
        path: "application",
        loadChildren: "./application/application-examples.module#ApplicationExamplesModule",
        data: { title: "Application" }
    },
    {
        path: "application-settings",
        loadChildren: "./application-settings/application-settings-examples.module#ApplicationSettingsExamplesModule",
        data: { title: "Application Settings" }
    },
    {
        path: "camera",
        loadChildren: "./camera/camera-examples.module#CameraExamplesModule",
        data: { title: "Camera" }
    },
    {
        path: "color",
        loadChildren: "./color/color-examples.module#ColorExamplesModule",
        data: { title: "Color" }
    },
    {
        path: "angular-directives",
        loadChildren: "./ui-category/ng-directives/ng-directives-examples.module#NgDirectivesExamplesModule",
        data: { title: "Angular directives" }
    },
    {
        path: "trace",
        loadChildren: "./trace/trace-examples.module#TraceExamplesModule",
        data: { title: "Trace Module" }
    },
    {
        path: "timer",
        loadChildren: "./timer/timer-examples.module#TimerExamplesModule",
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
        loadChildren: "./connectivity/connectivity-examples.module#ConnectivityExamplesModule",
        data: { title: "Connectivity" }
    },
    {
        path: "file-system",
        loadChildren: "./file-system/file-system-examples.module#FetchExamplesModule",
        data: { title: "File System" }
    },
    {
        path: "location",
        loadChildren: "./location/location-examples.module#LocationExamplesModule",
        data: { title: "Location" }
    },
    {
        path: "modal-page",
        loadChildren: "./modal-page/modal-page-examples.module#ModalPageExamplesModule",
        data: { title: "Modal page" }
    },
    {
        path: "color",
        loadChildren: "./color/color-examples.module#ColorExamplesModule",
        data: { title: "Color" }
    },
    {
        path: "http",
        loadChildren: "./http/http-examples.module#HttpExamplesModule",
        data: { title: "HTTP Module" }
    },
    {
        path: "fps-meter",
        loadChildren: "./fps-meter/fps-meter-examples.module#FpsExamplesModule",
        data: { title: "FPS Meter" }
    },
    {
        path: "platform",
        loadChildren: "./platform/platform-examples.module#PlatformExamplesModule",
        data: { title: "Platform Module" }
    },
    {
        path: "routing",
        loadChildren: "./routing/routing-examples.module#RoutingExamplesModule",
        data: { title: "Angular routing" }
    }
];
