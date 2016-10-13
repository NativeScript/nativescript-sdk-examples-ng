import { Component, NgZone } from "@angular/core";
// >> import-geolocation-plugin
import { Location, getCurrentLocation, isEnabled, distance, enableLocationRequest, watchLocation, clearWatch } from "nativescript-geolocation";
// << import-geolocation-plugin
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: 'location-module-component',
    styleUrls: ['location/location-module-example/style.css'],
    templateUrl: 'location/location-module-example/location-module-example.html'
})

export class LocationModuleExampleComponent {

    public distanceResult: string = "0";
    public distance: number = 0;
    public index: number = 0;
    public units;

    public isMonitoring = false;
    public options;
    public listener;
    public monitor_longitude: string = "0";
    public monitor_latitude: string = "0";
    public monitor_altitude: string = "0";
    public monitor_direction: string = "0";
    public monitor_speed: string = "0";

    public startpoint_longitude: number = 42.696552;
    public startpoint_latitude: number = 23.32601;
    public endpoint_longitude: number = 40.71448;
    public endpoint_latitude: number = -74.00598;

    constructor(private zone: NgZone) {
        this.units = [];
        var item1 = new SegmentedBarItem();
        item1.title = "meters";
        this.units.push(item1);
        var item2 = new SegmentedBarItem();
        item2.title = "kilometers";
        this.units.push(item2);
        // var item3 = new SegmentedBarItem();
        // item3.title = "miles";
        // this.units.push(item3);
        // var item4 = new SegmentedBarItem();
        // item4.title = "inches";
        // this.units.push(item4);

        this.options = {
            updateDistance: 3,
            minimumUpdateTime: 2000,
            maximumAge: 10000,
            timeout: 5000
        }
        // >> enable-location-services
        enableLocationRequest(true);
        // << enable-location-services
    }

    public isLocationEnabled() {
        // >> check-is-service-enabled
        var isEnabledProperty = isEnabled();
        // << check-is-service-enabled
        var message = "Location services are not available";
        if (isEnabledProperty) {
            message = "Location services are available";
        }
        alert(message);
    }

    public getDistance() {
        // >> get-distance
        var startLocation: Location = new Location();
        startLocation.longitude = this.startpoint_longitude;
        startLocation.latitude = this.startpoint_latitude;

        var endLocation: Location = new Location();
        endLocation.longitude = this.endpoint_longitude;
        endLocation.latitude = this.endpoint_latitude;
        this.distance = distance(startLocation, endLocation);
        // << get-distance

        console.log("distance - " + this.distance);
        switch (this.index) {
            case 0:
                this.distanceResult = (this.distance).toFixed(3);
                break;
            case 1:
                this.distanceResult = (this.distance * 0.001).toFixed(3);
                break;
            case 2:
                this.distanceResult = (this.distance * 0.000621371192).toFixed(3);
                break;
            case 3:
                this.distanceResult = (this.distance * 39.3700787).toFixed(3);
                break;

            default:
                break;
        }

    }

    public indexChange(args) {
        switch (args) {
            case 0:
                this.distanceResult = (this.distance).toFixed(3);
                break;
            case 1:
                this.distanceResult = (this.distance * 0.001).toFixed(3);
                break;
            case 2:
                this.distanceResult = (this.distance * 0.000621371192).toFixed(3);
                break;
            case 3:
                this.distanceResult = (this.distance * 39.3700787).toFixed(3);
                break;

            default:
                break;
        }
    }

    public getLocationOnce() {
        // >> get-current-location
        getCurrentLocation({ maximumAge: 10000, timeout: 5000 })
            .then(location => {
                console.log('Location received: ' + location);
                alert("Longitude: " + (location.longitude).toFixed(2) + " - Latitude:" + (location.latitude).toFixed(2))
            }).catch(error => {
                console.log('Location error received: ' + error);
                alert('Location error received: ' + error);
            });
        // << get-current-location
    }

    public monitor() {
        // >> location-monitoring
        if (this.isMonitoring) {
            clearWatch(this.listener);
            this.isMonitoring = false;
        }
        else {
            this.listener = watchLocation((loc: Location) => {
                if (loc) {
                    this.zone.run(() => {
                        console.log(loc.longitude + " " + loc.latitude);
                        this.monitor_longitude = (loc.longitude).toFixed(4);
                        this.monitor_latitude = (loc.latitude).toFixed(4);
                        this.monitor_altitude = (loc.altitude).toFixed(2);
                        this.monitor_direction = (loc.direction).toFixed(2);
                        this.monitor_speed = (loc.speed).toFixed(2);
                    })
                }
            },
                (e) => {
                    console.log("Error: " + e.message);
                }, this.options);
            this.isMonitoring = true;
        }
        // << location-monitoring
    }
}