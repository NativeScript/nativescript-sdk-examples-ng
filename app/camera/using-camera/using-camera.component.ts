import { Component } from "@angular/core";
// >> camera-module-code
import { ImageAsset } from "image-asset";
import * as camera from "nativescript-camera";

@Component({
    selector: 'using-camera-component',
    templateUrl: 'camera/using-camera/using-camera.component.html'
})
export class UsingCameraExampleComponent {
    public imageTaken: ImageAsset;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = true;
    public width: number = 300;
    public height: number = 300;

    onTakePhoto() {
        var options = { width: this.width, height: this.height, keepAspectRatio: this.keepAspectRatio,  saveToGallery: this.saveToGallery };
        camera.takePicture(options)
            .then(imageAsset => {
                this.imageTaken = imageAsset;
                console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            }).catch(err => {
                console.log(err.message);
            })
    }

    onRequestPermissions() {
        camera.requestPermissions();
    }
}
// << camera-module-code