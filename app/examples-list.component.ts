import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./link";

var mainMenuLinks = [
    new Link("ActionBar", "/action-bar"),
    new Link("ActivityIndicator", "/activity-indicator"),
    new Link("Angular directives", "/ngDirectivesExamplesComponent"),
    new Link("Animations", "/animations"),
    new Link("Button", "/button"),
    new Link("DatePicker", "/date-picker"),
    new Link("Dialogs", "/dialogs"),
    new Link("Layouts", "/layouts"),
    new Link("TimePicker", "/time-picker"),
    new Link("ScrollView", "/scroll-view"),
    new Link("SearchBar", "/search-bar"),
    new Link("SegmentedBar", "/segmented-bar"),
    new Link("Slider", "/slider"),
    new Link("Switch", "/switch"),
    new Link("TabView", "/tab-view"),
    new Link("TextField", "/text-field"),
    new Link("TextView", "/text-view"),
    new Link("WebView", "/web-view"),
    new Link("Style", "/style"),
    new Link("Gestures", "/gestures"),
    new Link("HtmlView", "/html-view"),
    new Link("Image", "/image"),
    new Link("Label", "/label"),
    new Link("ListPicker", "/list-picker"),
    new Link("ListView", "/list-view"),
    new Link("Progress", "/progress"),
    new Link("Formatted String", "/formatted-string"),
    new Link("Trace Module", "/traceExampleComponent"),
    new Link("Timer Module", "/timerExamplesComponent"),
    new Link("Platform Module", "/platformExamplesComponent"),
    new Link("Location Module", "/locationExamplesComponent"),
    new Link("FPS Meter", "/fpsExamplesComponent"),
    new Link("HTTP Module", "/httpModuleComponent"),
    new Link("Application", "/application"),
    new Link("Application Settings", "/application-settings"),
    new Link("Color", "/colorExamplesComponent"),
    new Link("Connectivity", "/connectivityExamplesComponent"),
    new Link("Fetch", "/fetchExamplesComponent"),
    new Link("File System", "/fileSystemxamplesComponent"),
    new Link("Modal page", "/modalPageExamplesComponent"),

    new Link("ListView (extended examples)", "/extendedListViewExamplesComponent"),
    new Link("DataEntry (extended examples)", "/extendedDataEntryExamplesComponent"),
    new Link("User Profile (extended examples)", "/extendedUserProfileExamplesComponent"),
    new Link("Content Screens", "/contentScreensExamplesComponent"),
    new Link("Camera", "/cameraExamplesComponent"),  
];

@Component({
    selector: "menulistview",
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExamplesListComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        mainMenuLinks.sort(function (a, b) {
            var titleA = a.title.toUpperCase();
            var titleB = b.title.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        for (var i = 0; i < mainMenuLinks.length; i++) {
            this.links.push(mainMenuLinks[i]);
        }
    }
}