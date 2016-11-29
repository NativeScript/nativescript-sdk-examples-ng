// tslint:disable:max-line-length
let sampleText = "NativeScript is a free and open source framework for building native iOS and Android apps using JavaScript and CSS. NativeScript renders UIs with the native platform’s rendering engine—no WebViews—resulting in native-like performance and UX.NativeScript provides a best-of-both-worlds development experience. Our cross-platform JavaScript modules give you the convenience of writing iOS and Android apps from a single JavaScript codebase, while our runtimes give you the power of accessing native APIs, SDKs, and frameworks when you need them—all without needing to open Xcode or Android Studio. NativeScript was created and is supported by Telerik.\n\n\n NativeScript doesn’t require Angular, but it’s even better when you use it. You can fully reuse skills and code from the web to build beautiful, high performance native mobile apps without web views. NativeScript features deep integration with Angular 2, the latest and greatest (and fastest) Angular framework. Open source and backed by Telerik.";

import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";

@Component({
    templateUrl: "ui-category/tab-view/basic-tab-view/basic-tab-view.component.html"
})
export class BasicTabViewComponent implements OnInit {

    @ViewChild("tabview") tab: ElementRef;

    public tabindex: number;
    public content: string;
    public tabView: TabView;

    ngOnInit() {
        this.tabindex = 1;
        this.content = sampleText;
        this.tabView = this.tab.nativeElement;

        this.tabView.on("selectedIndexChanged", (args: SelectedIndexChangedEventData) => {
            console.log("old index: " + args.oldIndex);
            console.log("new index: " + args.newIndex);
        });
    }
}

