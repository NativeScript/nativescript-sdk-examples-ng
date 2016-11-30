// >> creating-image-code
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Image } from "ui/image";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";

import * as ImageSourceModule from "image-source";

@Component({
    moduleId: module.id,
    styleUrls: ["./creating-image.component.css"],
    templateUrl: "./creating-image.component.html"
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
        this.newImage.style.margin = "15";

        this.newLabel = new Label();
        this.newLabel.text = "Image loaded from code behind";
        this.newLabel.style.margin = "15";

        stackView.addChild(this.newLabel);
        stackView.addChild(this.newImage);
    }
}
// << creating-image-code
