// >> scroll-view-event-code
import { Component } from "@angular/core";
import { ScrollView, ScrollEventData } from "@nativescript/core";

@Component({
    moduleId: module.id,
    // >> (hide)
    styleUrls: ["./style.css"],
    // << (hide)
    templateUrl: "./tips-and-tricks.component.html"
})
export class TipsAndTricksComponent {

    onScroll(args: ScrollEventData) {
        const scrollView = args.object as ScrollView;

        console.log("scrollX: " + args.scrollX);
        console.log("scrollY: " + args.scrollY);
    }
}
// << scroll-view-event-code
