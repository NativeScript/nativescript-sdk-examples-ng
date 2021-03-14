// >> connectivity-start-code
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Connectivity } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})

export class UsageComponent implements OnInit, OnDestroy {
    connectionType: string;

    constructor() {
        let type = Connectivity.getConnectionType();

        switch (type) {
            case Connectivity.connectionType.none:
                this.connectionType = "None";
                break;
            case Connectivity.connectionType.wifi:
                this.connectionType = "Wi-Fi";
                break;
            case Connectivity.connectionType.mobile:
                this.connectionType = "Mobile";
                break;
            case Connectivity.connectionType.bluetooth:
                this.connectionType = "Bluetooth";
                break;
            default:
                break;
        }
    }

    ngOnInit() {
        Connectivity.startMonitoring((type) => {
            switch (type) {
                case Connectivity.connectionType.none:
                    this.connectionType = "None";
                    console.log("Connection type changed to none.");
                    break;
                case Connectivity.connectionType.wifi:
                    this.connectionType = "Wi-Fi";
                    console.log("Connection type changed to WiFi.");
                    break;
                case Connectivity.connectionType.mobile:
                    this.connectionType = "Mobile";
                    console.log("Connection type changed to mobile.");
                    break;
                case Connectivity.connectionType.bluetooth:
                    this.connectionType = "Bluetooth";
                    console.log("Connection type changed to Bluetooth.");
                    break;
                default:
                    break;
            }
        });
    }

    ngOnDestroy() {
        // Stoping the connection monitoring
        Connectivity.stopMonitoring();
    }
}
// << connectivity-start-code
