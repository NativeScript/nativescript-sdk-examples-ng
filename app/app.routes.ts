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
    },
    {
        path: "color",
        loadChildren: () => require("./color/color-examples.module")["ColorExamplesModule"],
        data: { title: "Color" }
    },
    {
        path: "angular-directives",
        loadChildren: () => require("./ui-category/ng-directives/ng-directives-examples.module")["NgDirectivesExamplesModule"],
        data: { title: "Angular directives" }
    },
    {
        path: "trace",
        loadChildren: () => require("./trace/trace-examples.module")["TraceExamplesModule"],
        data: { title: "Trace" }
    },
    {
        path: "timer",
        loadChildren: () => require("./timer/timer-examples.module")["TimerExamplesModule"],
        data: { title: "Timer" }
    },
    {
        path: "content-screens",
        loadChildren: () => require("./common-screens-category/content-screens/content-screens-examples.module")["ContentScreensExamplesModule"],
        data: { title: "Content screens" }
    },
    {
        path: "dataentry",
        loadChildren: () => require("./common-screens-category/dataentry/extended-dataentry-examples.module")["ExtendedDataentryExamplesModule"],
        data: { title: "Dataentry" }
    },
    {
        path: "extended-listview",
        loadChildren: () => require("./common-screens-category/listview/extended-listview-examples.module")["ExtendedListViewExamplesModule"],
        data: { title: "extended-listview" }
    },
    {
        path: "userprofile",
        loadChildren: () => require("./common-screens-category/userprofile/extended-userprofile-examples.module")["ExtendedUserProfileExamplesModule"],
        data: { title: "User Profile" }
    },
    {
        path: "connectivity",
        loadChildren: () => require("./connectivity/connectivity-examples.module")["ConnectivityExamplesModule"],
        data: { title: "Connectivity" }
    },
    {
        path: "fetch",
        loadChildren: () => require("./fetch/fetch-examples.module")["FetchExamplesModule"],
        data: { title: "Fetch" }
    },
    {
        path: "file-system",
        loadChildren: () => require("./file-system/file-system-examples.module")["FetchExamplesModule"],
        data: { title: "File System" }
    },
    {
        path: "location",
        loadChildren: () => require("./location/location-examples.module")["LocationExamplesModule"],
        data: { title: "Location" }
    },
    {
        path: "modal-page",
        loadChildren: () => require("./modal-page/modal-page-examples.module")["ModalPageExamplesModule"],
        data: { title: "Modal page" }
    },
    {
        path: "color",
        loadChildren: () => require("./color/color-examples.module")["ColorExamplesModule"],
        data: { title: "Color" }
    },
    {
        path: "http",
        loadChildren: () => require("./http/http-examples.module")["HttpExamplesModule"],
        data: { title: "HTTP" }
    },
    {
        path: "fps-meter",
        loadChildren: () => require("./fps-meter/fps-meter-examples.module")["FpsExamplesModule"],
        data: { title: "FPS Meter" }
    },
    {
        path: "platform",
        loadChildren: () => require("./platform/platform-examples.module")["PlatformPageExamplesModule"],
        data: { title: "Platform" }
    }
];