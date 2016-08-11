import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './directives';

import { Link } from "./link";

var mainMenuLinks = [
    new Link("ActionBar", "/actionBarExamplesComponent"),
    new Link("ActivityIndicator", "/activityIndicatorExamplesComponent"),
    new Link("Animation", "/animationsExamplesComponent"),
    new Link("Border", "/borderExamplesComponent"),
    new Link("Button", "/buttonExamplesComponent"),
    new Link("DatePicker", "/datePickerExamplesComponent"),
    new Link("Dialogs", "/dialogsExamplesComponent"),
    new Link("Layouts", "/layoutsExamplesComponent"),
    new Link("TimePicker", "/timePickerExamplesComponent"),
    new Link("ScrollView", "/scrollViewExampleComponent"),
    new Link("SearchBar", "/searchBarExampleComponent"),
    new Link("Segmented Bar", "/segmentedBarExamplesComponent"),
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
    new Link("*ngFor Directive", "/ngForExampleComponent"),
    new Link("*ngIf Directive", "/ngIfExampleComponent"),
    new Link("*ng Custom Directive", "/customDirectiveExampleComponent"),
    new Link("*ngSwitch Directive", "/ngSwitchExampleComponent"),
];
     
@Component({
    selector: "menulistview",
    templateUrl: 'examples-list.component.html',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExamplesListComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        mainMenuLinks.sort(function(a, b) {
            var titleA = a.title.toUpperCase();
            var titleB = b.title.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        for (var i = 0; i < mainMenuLinks.length; i++) {
            this.links.push(mainMenuLinks[i]);
        }
    }
}

