import { Component, NgZone } from "@angular/core";
// >> import-geolocation-plugin-monitoring
import { Location, enableLocationRequest, watchLocation, clearWatch } from "nativescript-geolocation";
// << import-geolocation-plugin-monitoring
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: 'location-monitoring-example',
    templateUrl: 'location/location-monitoring-example/location-monitoring-example.html'
})

export class LocationMonitoringExampleComponent {
    public buttonText = "Start location monitoring";
    public isMonitoring = false;
    public options;
    public listener;
    public monitor_longitude: string = "0";
    public monitor_latitude: string = "0";
    public monitor_altitude: string = "0";
    public monitor_direction: string = "0";
    public monitor_speed: string = "0";

    constructor(private zone: NgZone) {
        enableLocationRequest(true);
    }

    public monitor() {
        // >> location-monitoring
        if (this.isMonitoring) {
            clearWatch(this.listener);
            this.isMonitoring = false;
            this.buttonText = "Start location monitoring";
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
                    });
                }
            },(e) => {
                console.log("Error: " + e.message);
            }, this.options);

            this.isMonitoring = true;
            this.buttonText = "Stop location monitoring";
        }
        // << location-monitoring
    }
}