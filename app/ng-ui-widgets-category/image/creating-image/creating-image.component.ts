import { Component, OnInit } from "@angular/core";
import { ImageSource, fromBase64, fromFile } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

const IMAGE_URL = "https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/NativeScript_logo.png";

@Component({
    moduleId: module.id,
    styleUrls: ["./creating-image.component.css"],
    templateUrl: "./creating-image.component.html"
})
export class CreatingImageExampleComponent implements OnInit {
    public base64ImageSource: ImageSource;
    public myImageSource: ImageSource = fromFile("~/images/logo.png");
    // >> creating-image-code
    public newImage: Image;
    // >> (hide)
    public newLabel: Label;
    // << (hide)

    onStackLoaded(args) {
        let stack = <StackLayout>args.object;
        // >> (hide)
        this.newLabel = new Label();
        this.newLabel.text = "Image loaded from code behind";
        this.newLabel.className = "h3 p-l-15 p-r-15 p-t-15 text-left";
        stack.addChild(this.newLabel);
        // << (hide)
        this.newImage = new Image();
        this.newImage.src = IMAGE_URL;
        this.newImage.stretch = "none";
        this.newImage.style.margin = "15";
        stack.addChild(this.newImage);
    }
    // << creating-image-code

    ngOnInit() {
        // >> creating-img-from-base
        // import { ImageSource, fromBase64 } from "image-source";
        const IMG_AS_BASE64_STRING = this.myImageSource.toBase64String("png");
        this.base64ImageSource = fromBase64(IMG_AS_BASE64_STRING);
        // << creating-img-from-base
    }
}
