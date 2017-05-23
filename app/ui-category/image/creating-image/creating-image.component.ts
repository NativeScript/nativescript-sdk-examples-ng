// >> creating-image-code
import { Component } from "@angular/core";
import { Image } from "ui/image";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";

const URL = "https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/NativeScript_logo.png";

@Component({
    moduleId: module.id,
    styleUrls: ["./creating-image.component.css"],
    templateUrl: "./creating-image.component.html"
})
export class CreatingImageExampleComponent {

    public newImage: Image;
    public newLabel: Label;

    onStackLoaded(args) {
        let stackView = <StackLayout>args.object;

        this.newImage = new Image();
        this.newImage.src = URL;
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
