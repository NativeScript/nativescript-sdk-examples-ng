// >> import-image-module
import { Component } from "@angular/core";
import { ImageSource, fromBase64, fromFile } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";

@Component({
    moduleId: module.id,
    styleUrls: ["./usage.component.css"],
    templateUrl: "./usage.component.html"
})
export class ImageUsageComponent { }
// << import-image-module
