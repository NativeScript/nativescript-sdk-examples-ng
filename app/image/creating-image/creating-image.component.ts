// >> creating-image-code 
import { Component, OnInit, ViewChild, ElementRef }  from "@angular/core";
import { Image } from "ui/image";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)

import ImageSourceModule = require("image-source");

@Component({
    selector: "creating-image",
    styleUrls:["image/creating-image/creating-image.component.css"],
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: "image/creating-image/creating-image.component.html"
})

export class CreatingImageExampleComponent implements OnInit {
    @ViewChild("st") stack: ElementRef;

    public newImage: Image;
    public newLabel: Label;

    ngOnInit() {
        let stackView: StackLayout = this.stack.nativeElement;

        this.newImage = new Image();
        this.newImage.imageSource = ImageSourceModule.fromResource("icon");
        this.newImage.stretch = "none";
        this.newImage.style.margin = "20";

        this.newLabel = new Label();
        this.newLabel.text = "Image loaded from code behind";
        this.newLabel.style.margin = "10";

        stackView.addChild(this.newImage);
        stackView.addChild(this.newLabel);
    }
}
// << creating-image-code