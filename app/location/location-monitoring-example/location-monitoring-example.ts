import { Component, NgZone } from "@angular/core";
// >> import-geolocation-plugin-monitoring
import { Location, enableLocationRequest, watchLocation, clearWatch } from "nativescript-geolocation";
// << import-geolocation-plugin-monitoring
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    moduleId: module.id,
    templateUrl: "location/location-monitoring-example/location-monitoring-example.html"
})
export class LocationMonitoringExampleComponent {
    public buttonText = "Start location monitoring";
    public isMonitoring = false;
    public options;
    public listener;
    public monitorLongitude: string = "0";
    public monitorLatitude: string = "0";
    public monitorAltitude: string = "0";
    public monitorDirection: string = "0";
    public monitorSpeed: string = "0";

    constructor(private zone: NgZone) {
        enableLocationRequest(true);
    }

    public monitor() {
        // >> location-monitoring
        if (this.isMonitoring) {
            clearWatch(this.listener);
            this.isMonitoring = false;
            this.buttonText = "Start location monitoring";
        } else {
            this.listener = watchLocation((loc: Location) => {
                if (loc) {
                    this.zone.run(() => {
                        console.log(loc.longitude + " " + loc.latitude);
                        this.monitorLongitude = (loc.longitude).toFixed(4);
                        this.monitorLatitude = (loc.latitude).toFixed(4);
                        this.monitorAltitude = (loc.altitude).toFixed(2);
                        this.monitorDirection = (loc.direction).toFixed(2);
                        this.monitorSpeed = (loc.speed).toFixed(2);
                    });
                }
            }, (e) => {
                console.log("Error: " + e.message);
            }, this.options);

            this.isMonitoring = true;
            this.buttonText = "Stop location monitoring";
        }
        // << location-monitoring
    }
}
