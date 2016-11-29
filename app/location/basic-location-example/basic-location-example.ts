import { Component } from "@angular/core";
// >> import-geolocation-plugin
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    styleUrls: ["location/basic-location-example/style.css"],
    templateUrl: "location/basic-location-example/basic-location-example.html"
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
