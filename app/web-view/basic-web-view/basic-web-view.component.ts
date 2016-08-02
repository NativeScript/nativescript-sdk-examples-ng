import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import {DatePicker} from "ui/date-picker";
import {TextField} from "ui/text-field";
import {Page} from "ui/page";
// >> switch-event-handle-code
@Component({
    selector: 'basic-web-view-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'web-view/basic-web-view/basic-web-view.component.html'
})

export class BasicWebViewComponent {
    public url="https://www.nativescript.org";
    public webviewsrc="https://www.nativescript.org";

    loadPage(){
        this.webviewsrc = "https://"+this.url;
    }

}
// << switch-event-handle-code

