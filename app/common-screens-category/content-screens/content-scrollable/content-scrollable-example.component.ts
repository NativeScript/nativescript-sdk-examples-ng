import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ScrollEventData } from "ui/scroll-view";
import { Page } from "ui/page";
import { Image } from "ui/image";
import { FlexboxLayout } from "ui/layouts/flexbox-layout";

// >> content-paralax-page-code
@Component({
    selector: "content-scrollable-page-listview",
    templateUrl: "common-screens-category/content-screens/content-scrollable/content-scrollable-example.component.html"
})
export class ContentScrollablePageExampleComponent implements OnInit {
    public title: string;
    public desc: string;
    public imageSrc: string;
    public image: Image;
    public flex: FlexboxLayout;

    @ViewChild("img") img: ElementRef;
    @ViewChild("content") content: ElementRef;

    constructor(public page: Page) {
        this.page.backgroundSpanUnderStatusBar = true;
    }

    ngOnInit() {
        this.imageSrc = "~/images/m33.jpg";
        this.title = "The Hydrogen Clouds of M33";
        this.desc = "Gorgeous spiral galaxy M33 seems to have more than its fair share of glowing hydrogen gas." +
            "A prominent member of the local group of galaxies, M33 is also known as the Triangulum Galaxy and" +
            "lies about 3 million light-years distant.The galaxy's inner 30,000 light-years or so are shown in this" +
            "telescopic portrait that enhances its reddish ionized hydrogen clouds or HII regions." +
            "Sprawling along loose spiral arms that wind toward the core, M33's giant HII regions are some" +
            "of the largest known stellar nurseries,sites of the formation of short-lived but very massive stars." +
            "Intense ultraviolet radiation from the luminous, massive stars ionizes" +
            "the surrounding hydrogen gas and ultimately produces the characteristic red glow. To enhance this image," +
            "broadband data was used to produce a color view of the galaxy and combined with narrowband data recorded" +
            "through a hydrogen-alpha filter.That filter transmits the light of the strongest hydrogen emission line.";
        this.image = this.img.nativeElement;
        this.flex = this.content.nativeElement;
    }

    onScroll(args: ScrollEventData) {
        if (args.scrollY <= this.flex.getMeasuredHeight()) {
            this.image.animate({
                translate: { x: 0, y: args.scrollY * 0.3 }
            });
        }
    }
}
// << content-paralax-page-code
