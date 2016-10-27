import { Component } from "@angular/core";
// >> camera-module-init-code
import { ImageAsset } from "image-asset";
import * as camera from "nativescript-camera";
// << camera-module-init-code
@Component({
    selector: 'using-camera-component',
    templateUrl: 'camera/using-camera/using-camera.component.html'
})
export class UsingCameraExampleComponent {
    // >> camera-module-photo-code
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
    // << camera-module-photo-code

    // >> camera-module-perm-code
    onRequestPermissions() {
        camera.requestPermissions();
    }
    // << camera-module-perm-code

    // >> camera-module-avai-code
    onCheckForCamera() {
        var isCameraAvailable = camera.isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
    }
    // << camera-module-avai-code
}
