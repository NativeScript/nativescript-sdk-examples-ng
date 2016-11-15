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
    new Link("TimePicker", "/timePickerExamplesComponent"),
    new Link("ScrollView", "/scrollViewExampleComponent"),
    new Link("SearchBar", "/searchBarExampleComponent"),
    new Link("SegmentedBar", "/segmentedBarExamplesComponent"),
    new Link("Slider", "/sliderExamplesComponent"),
    new Link("Switch", "/switchExamplesComponent"),
    new Link("TabView", "/tabViewExamplesComponent"),
    new Link("TextField", "/textFieldExamplesComponent"),
    new Link("TextView", "/textViewExamplesComponent"),
    new Link("WebView", "/webViewExamplesComponent"),
    new Link("Style", "/styleExamplesComponent"),
    new Link("Gestures", "/gestures"),
    new Link("HtmlView", "/html-view"),
    new Link("Image", "/image"),
    new Link("Label", "/label"),
    new Link("ListPicker", "/list-picker"),
    new Link("ListView", "/list-view"),
    new Link("Progress", "/progressExamplesComponent"),
    new Link("Formatted String", "/formatted-string"),
    new Link("Trace Module", "/traceExampleComponent"),
    new Link("Timer Module", "/timerExamplesComponent"),
    new Link("Platform Module", "/platformExamplesComponent"),
    new Link("Location Module", "/locationExamplesComponent"),
    new Link("FPS Meter", "/fpsExamplesComponent"),
    new Link("HTTP Module", "/httpModuleComponent"),
    new Link("Application", "/applicationExamplesComponent"),
    new Link("Application Settings", "/applicationSettingsExamplesComponent"),
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