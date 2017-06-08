import { Component } from "@angular/core";
// >> import-geolocation-plugin
import {  getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    moduleId: module.id,
    styleUrls: ["./style.css"],
    templateUrl: "./basic-location-example.html"
})
export class BasicLocationExampleComponent {

    public distanceResult: string = "0";
    public distance: number = 0;
    public index: number = 0;

    public startpointLongitude: number = 42.696552;
    public startpointLatitude: number = 23.32601;
    public endpointLongitude: number = 40.71448;
    public endpointLatitude: number = -74.00598;

    constructor() {
        // >> enable-location-services
        enableLocationRequest(true);
        // << enable-location-services
    }

    public isLocationEnabled() {
        // >> check-is-service-enabled
        let isEnabledProperty = isEnabled();
        // << check-is-service-enabled
        let message = "Location services are not available";
        if (isEnabledProperty) {
            message = "Location services are available";
        }
        alert(message);
    }

    public getDistance() {
        // >> get-distance
        let startLocation: Location = new Location();
        startLocation.longitude = this.startpointLongitude;
        startLocation.latitude = this.startpointLatitude;

        let endLocation: Location = new Location();
        endLocation.longitude = this.endpointLongitude;
        endLocation.latitude = this.endpointLatitude;
        this.distance = distance(startLocation, endLocation);
        // << get-distance

        console.log("distance - " + this.distance);
        this.distanceResult = (this.distance * 0.001).toFixed(3);
    }

    public getLocationOnce() {
        // >> get-current-location
        getCurrentLocation({ timeout: 500 })
            .then(location => {
                console.log("Location received: " + location);
                this.startpointLatitude = location.latitude;
                this.startpointLongitude = location.longitude;
            }).catch(error => {
                console.log("Location error received: " + error);
                alert("Location error received: " + error);
            });
        // << get-current-location
    }

}

class Location {
   /**
    * The latitude of the geolocation, in degrees.
    */
    latitude: number;

   /**
    * The longitude of the geolocation, in degrees.
    */
    longitude: number;

   /**
    * The altitude (if available), in meters above sea level.
    */
    altitude: number;

   /**
    * The horizontal accuracy, in meters.
    */
    horizontalAccuracy: number;

   /**
    * The vertical accuracy, in meters.
    */
    verticalAccuracy: number;

   /**
    * The speed, in meters/second over ground.
    */
    speed: number;

   /**
    * The direction (course), in degrees.
    */
    direction: number;

   /**
    * The time at which this location was determined.
    */
    timestamp: Date;

   /**
    * The android-specific [location](http://developer.android.com/reference/android/location/Location.html) object.
    */
    android: any;

   /**
    * The ios-specific [CLLocation](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocation_Class/) object.
    */
    ios: any;
    constructor(){}
}