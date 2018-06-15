NativeScript plugin to empower using device camera.

## Install the camera plugin as dependency

`npm i nativescript-camera --save`  

> Note: On Android 6.0 and above it is neccessary to request permissions for camera (to be able to take picture) and access for Photos (to be able to share the image via Google Photos app).
NativeScript-camera plug-in has a dedicated method called `requestPermissions()` which can be used in that case.