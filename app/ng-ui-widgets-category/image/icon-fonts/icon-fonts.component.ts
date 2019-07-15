import { Component, OnInit } from "@angular/core";
import { ImageSource, fromBase64, fromFile } from "tns-core-modules/image-source";
// >> import-image-module
import { Image } from "tns-core-modules/ui/image";
// << import-image-module
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

const IMAGE_URL = "https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/NativeScript_logo.png";

@Component({
    moduleId: module.id,
    styleUrls: ["./icon-fonts.component.css"],
    templateUrl: "./icon-fonts.component.html"
})
export class IconFontsExampleComponent implements OnInit {
   
    ngOnInit() {
        
    }
}
