import { Component } from "@angular/core";

// >> camera-module-init-code
import { ImageAsset } from "@nativescript/core";
// TODO: fix nativescript-camera package
// import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
// << camera-module-init-code

@Component({
    moduleId: module.id,
    templateUrl: "./using-camera.component.html"
})
export class UsingCameraExampleComponent {
    // >> camera-module-photo-code
    public imageTaken: ImageAsset;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = true;
    public width: number = 300;
    public height: number = 300;

    onTakePhoto() {
        let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };

        // TODO: fix nativescript-camera package
        // takePicture(options)
        //     .then(imageAsset => {
        //         this.imageTaken = imageAsset;
        //         console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        //     }).catch(err => {
        //         console.log(err.message);
        //     });
    }
    // << camera-module-photo-code

    // >> camera-module-perm-code
    onRequestPermissions() {
        // TODO: fix nativescript-camera package
        // requestPermissions();
    }
    // << camera-module-perm-code

    // >> camera-module-avai-code
    onCheckForCamera() {
        // TODO: fix nativescript-camera package
        // let isCameraAvailable = isAvailable();
        // console.log("Is camera hardware available: " + isCameraAvailable);
    }
    // << camera-module-avai-code
}
