// tslint:disable:max-line-length
export const routes = [
    {
        path: "",
        loadChildren: () => import("./examples-list.module").then(m => m.ExamplesListModule),
        data: { title: "NativeScript Code Samples" }
    },
    {
        path: "action-bar",
        loadChildren: () => import("./ng-ui-widgets-category/action-bar/action-bar-examples.module").then(m => m.ActionBarExamplesModule),
        data: { title: "ActionBar" }
    },
    {
        path: "activity-indicator",
        loadChildren: () => import("./ng-ui-widgets-category/activity-indicator/activity-indicator-examples.module").then(m => m.ActivityIndicatorExamplesModule),
        data: { title: "ActivityIndicator" }
    },
    {
        path: "animations",
        loadChildren: () => import("./ng-ui-widgets-category/animations/animations-examples.module").then(m => m.AnimationsExamplesModule),
        data: { title: "Animations" }
    },
    {
        path: "button",
        loadChildren: () => import("./ng-ui-widgets-category/button/button-examples.module").then(m => m.ButtonExamplesModule),
        data: { title: "Button" }
    },
    {
        path: "date-picker",
        loadChildren: () => import("./ng-ui-widgets-category/date-picker/date-picker-examples.module").then(m => m.DatePickerExamplesModule),
        data: { title: "DatePicker" }
    },
    {
        path: "dialogs",
        loadChildren: () => import("./ng-ui-widgets-category/dialogs/dialogs-examples.module").then(m => m.DialogsExamplesModule),
        data: { title: "Dialogs" }
    },
    {
        path: "formatted-string",
        loadChildren: () => import("./ng-ui-widgets-category/formatted-string/formated-string-examples.module").then(m => m.FormattedStringExamplesModule),
        data: { title: "Formatted String" }
    },
    {
        path: "gestures",
        loadChildren: () => import("./ng-ui-widgets-category/gestures/gestures-examples.module").then(m => m.GesturesExamplesModule),
        data: { title: "Gestures" }
    },
    {
        path: "html-view",
        loadChildren: () => import("./ng-ui-widgets-category/htmlview/htmlview-examples.module").then(m => m.HtmlViewExamplesModule),
        data: { title: "HtmlView" }
    },
    {
        path: "icon-fonts",
        loadChildren: () => import("./ng-ui-category/icon-fonts/iconfonts-examples.module").then(m => m.IconFontsExamplesModule),
        data: { title: "IconFonts" }
    },
    {
        path: "image",
        loadChildren: () => import("./ng-ui-widgets-category/image/image-examples.module").then(m => m.ImageExamplesModule),
        data: { title: "Image" }
    },
    {
        path: "label",
        loadChildren: () => import("./ng-ui-widgets-category/label/label-examples.module").then(m => m.LabelExamplesModule),
        data: { title: "Label" }
    },
    {
        path: "layouts",
        loadChildren: () => import("./ng-ui-widgets-category/layouts/layouts-examples.module").then(m => m.LayoutsExamplesModule),
        data: { title: "Layouts" }
    },
    {
        path: "list-picker",
        loadChildren: () => import("./ng-ui-widgets-category/listpicker/listpicker-examples.module").then(m => m.ListPickerExamplesModule),
        data: { title: "ListPicker" }
    },
    {
        path: "list-view",
        loadChildren: () => import("./ng-ui-widgets-category/listview/listview-examples.module").then(m => m.ListViewExamplesModule),
        data: { title: "ListView" }
    },
    {
        path: "progress",
        loadChildren: () => import("./ng-ui-widgets-category/progress/progress-examples.module").then(m => m.ProgressExamplesModule),
        data: { title: "Progress" }
    },
    {
        path: "scroll-view",
        loadChildren: () => import("./ng-ui-widgets-category/scroll-view/scroll-view-examples.module").then(m => m.ScrollViewExamplesModule),
        data: { title: "ScrollView" }
    },
    {
        path: "search-bar",
        loadChildren: () => import("./ng-ui-widgets-category/search-bar/search-bar-examples.module").then(m => m.SearchBarExamplesModule),
        data: { title: "SearchBar" }
    },
    {
        path: "segmented-bar",
        loadChildren: () => import("./ng-ui-widgets-category/segmented-bar/segmented-bar-examples.module").then(m => m.SegmentedBarExamplesModule),
        data: { title: "SegmentedBar" }
    },
    {
        path: "slider",
        loadChildren: () => import("./ng-ui-widgets-category/slider/slider-examples.module").then(m => m.SliderExamplesModule),
        data: { title: "Slider" }
    },
    {
        path: "style",
        loadChildren: () => import("./ng-ui-widgets-category/style/style-examples.module").then(m => m.StyleExamplesModule),
        data: { title: "Style" }
    },
    {
        path: "switch",
        loadChildren: () => import("./ng-ui-widgets-category/switch/switch-examples.module").then(m => m.SwitchExamplesModule),
        data: { title: "Switch" }
    },
    {
        path: "tab-view",
        loadChildren: () => import("./ng-ui-widgets-category/tab-view/tab-view-examples.module").then(m => m.TabViewExamplesModule),
        data: { title: "TabView" }
    },
    {
        path: "bottom-navigation",
        loadChildren: () => import("./ng-ui-widgets-category/bottom-navigation/bottom-navigation-examples.module").then(m => m.BottomNavigationExamplesModule),
        data: { title: "Bottom Navigation" }
    },
    {
        path: "tabs",
        loadChildren: () => import("./ng-ui-widgets-category/tabs/tabs-examples.module").then(m => m.TabsExamplesModule),
        data: { title: "Tabs" }
    },
    {
        path: "text-field",
        loadChildren: () => import("./ng-ui-widgets-category/text-field/text-field-examples.module").then(m => m.TextFieldExamplesModule),
        data: { title: "TextField" }
    },
    {
        path: "text-view",
        loadChildren: () => import("./ng-ui-widgets-category/text-view/text-view-examples.module").then(m => m.TextViewExamplesModule),
        data: { title: "TextView" }
    },
    {
        path: "time-picker",
        loadChildren: () => import("./ng-ui-widgets-category/time-picker/time-picker-examples.module").then(m => m.TimePickerExamplesModule),
        data: { title: "TimePicker" }
    },
    {
        path: "web-view",
        loadChildren: () => import("./ng-ui-widgets-category/web-view/web-view-examples.module").then(m => m.WebViewExamplesModule),
        data: { title: "WebView" }
    },
    {
        path: "application",
        loadChildren: () => import("./ng-framework-modules-category/application/application-examples.module").then(m => m.ApplicationExamplesModule),
        data: { title: "Application" }
    },
    {
        path: "application-settings",
        loadChildren: () => import("./ng-framework-modules-category/application-settings/application-settings-examples.module").then(m => m.ApplicationSettingsExamplesModule),
        data: { title: "Application Settings" }
    },
    {
        path: "camera",
        loadChildren: () => import("./ng-hardware-access-category/camera/camera-examples.module").then(m => m.CameraExamplesModule),
        data: { title: "Camera" }
    },
    {
        path: "color",
        loadChildren: () => import("./ng-framework-modules-category/color/color-examples.module").then(m => m.ColorExamplesModule),
        data: { title: "Color" }
    },
    {
        path: "angular-directives",
        loadChildren: () => import("./ng-ui-widgets-category/ng-directives/ng-directives-examples.module").then(m => m.NgDirectivesExamplesModule),
        data: { title: "Angular directives" }
    },
    {
        path: "trace",
        loadChildren: () => import("./ng-framework-modules-category/trace/trace-examples.module").then(m => m.TraceExamplesModule),
        data: { title: "Trace Module" }
    },
    {
        path: "timer",
        loadChildren: () => import("./ng-framework-modules-category/timer/timer-examples.module").then(m => m.TimerExamplesModule),
        data: { title: "Timer Module" }
    },
    {
        path: "content-screens",
        loadChildren: () => import("./common-screens-category/content-screens/content-screens-examples.module").then(m => m.ContentScreensExamplesModule),
        data: { title: "Content Screens" }
    },
    {
        path: "dataentry",
        loadChildren: () => import("./common-screens-category/dataentry/extended-dataentry-examples.module").then(m => m.ExtendedDataentryExamplesModule),
        data: { title: "Data Entry (extended examples)" }
    },
    {
        path: "extended-listview",
        loadChildren: () => import("./common-screens-category/lists-category/extended-listview-examples.module").then(m => m.ExtendedListViewExamplesModule),
        data: { title: "ListView (extended examples)" }
    },
    {
        path: "userprofile",
        loadChildren: () => import("./common-screens-category/userprofile/extended-userprofile-examples.module").then(m => m.ExtendedUserProfileExamplesModule),
        data: { title: "User Profile (extended examples)" }
    },
    {
        path: "connectivity",
        loadChildren: () => import("./ng-framework-modules-category/connectivity/connectivity-examples.module").then(m => m.ConnectivityExamplesModule),
        data: { title: "Connectivity" }
    },
    {
        path: "file-system",
        loadChildren: () => import("./ng-framework-modules-category/file-system/file-system-examples.module").then(m => m.FetchExamplesModule),
        data: { title: "File System" }
    },
    {
        path: "location",
        loadChildren: () => import("./ng-hardware-access-category/location/location-examples.module").then(m => m.LocationExamplesModule),
        data: { title: "Location" }
    },
    {
        path: "modal-view",
        loadChildren: () => import("./ng-ui-category/modal-view-ng/modal-view-examples.module").then(m => m.ModalViewExamplesModule),
        data: { title: "Modal view" }
    },
    {
        path: "color",
        loadChildren: () => import("./ng-framework-modules-category/color/color-examples.module").then(m => m.ColorExamplesModule),
        data: { title: "Color" }
    },
    {
        path: "http",
        loadChildren: () => import("./ng-framework-modules-category/http/http-examples.module").then(m => m.HttpExamplesModule),
        data: { title: "HTTP Module" }
    },
    {
        path: "fps-meter",
        loadChildren: () => import("./ng-framework-modules-category/fps-meter/fps-meter-examples.module").then(m => m.FpsExamplesModule),
        data: { title: "FPS Meter" }
    },
    {
        path: "platform",
        loadChildren: () => import("./ng-framework-modules-category/platform/platform-examples.module").then(m => m.PlatformExamplesModule),
        data: { title: "Platform Module" }
    },
    {
        path: "routing",
        loadChildren: () => import("./ng-framework-modules-category/routing/routing-examples.module").then(m => m.RoutingExamplesModule),
        data: { title: "Angular routing" }
    }
];
