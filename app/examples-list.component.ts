import { Component, ChangeDetectionStrategy }  from "@angular/core";

import { Link } from "./link";

var mainMenuLinks = [
    new Link("ActionBar", "/actionBarExamplesComponent"),
    new Link("ActivityIndicator", "/activityIndicatorExamplesComponent"),
    new Link("Angular directives", "/ngDirectivesExamplesComponent"),
    new Link("Animations", "/animationsExamplesComponent"),
    new Link("Button", "/buttonExamplesComponent"),
    new Link("DatePicker", "/datePickerExamplesComponent"),
    new Link("Dialogs", "/dialogsExamplesComponent"),
    new Link("Layouts", "/layoutsExamplesComponent"),
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
    new Link("Gestures", "/gesturesExamplesComponent"),
    new Link("HtmlView", "/htmlViewExamplesComponent"),
    new Link("Image", "/imageExamplesComponent"),
    new Link("Label", "/labelExamplesComponent"),
    new Link("ListPicker", "/listPickerExamplesComponent"),
    new Link("ListView", "/listViewExamplesComponent"),
    new Link("Progress", "/progressExamplesComponent"),
    new Link("Formatted String", "/formattedStringExamplesComponent")
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
