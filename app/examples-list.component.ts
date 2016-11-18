import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./link";

var mainMenuLinks = [
    new Link("ActionBar", "/action-bar"),
    new Link("ActivityIndicator", "/activity-indicator"),
    new Link("Angular directives", "/angular-directives"),
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
    new Link("Trace Module", "/trace"),
    new Link("Timer Module", "/timer"),
    new Link("Platform Module", "/platformExamplesComponent"),
    new Link("Location", "/location"),
    new Link("FPS Meter", "/fpsExamplesComponent"),
    new Link("HTTP Module", "/httpModuleComponent"),
    new Link("Application", "/application"),
    new Link("Application Settings", "/application-settings"),
    new Link("Color", "/color"),
    new Link("Connectivity", "/connectivity"),
    new Link("Fetch", "/fetch"),
    new Link("File System", "/file-system"),
    new Link("Modal page", "/modal-page"),

    new Link("ListView (extended examples)", "/extended-listview"),
    new Link("DataEntry (extended examples)", "/dataentry"),
    new Link("User Profile (extended examples)", "/userprofile"),
    new Link("Content Screens", "/content-screens"),
    new Link("Camera", "/camera"),  
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