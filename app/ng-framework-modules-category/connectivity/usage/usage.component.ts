// >> connectivity-start-code
import { Component, OnInit, OnDestroy } from "@angular/core";
import { 
    getConnectionType, 
    startMonitoring, 
    stopMonitoring 
} from "tns-core-modules/connectivity";
import * as connectivityModule from "tns-core-modules/connectivity";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})

export class UsageComponent implements OnInit, OnDestroy {
    connectionType: string;

    constructor() {
        let type = getConnectionType();

        switch (type) {
            case connectivityModule.connectionType.none:
                this.connectionType = "None";
                break;
            case connectivityModule.connectionType.wifi:
                this.connectionType = "Wi-Fi";
                break;
            case connectivityModule.connectionType.mobile:
                this.connectionType = "Mobile";
                break;
            case connectivityModule.connectionType.bluetooth:
                this.connectionType = "Bluetooth";
                break;
            default:
                break;
        }
    }

    ngOnInit() {
        startMonitoring((type) => {
            switch (type) {
                case connectivityModule.connectionType.none:
                    this.connectionType = "None";
                    console.log("Connection type changed to none.");
                    break;
                case connectivityModule.connectionType.wifi:
                    this.connectionType = "Wi-Fi";
                    console.log("Connection type changed to WiFi.");
                    break;
                case connectivityModule.connectionType.mobile:
                    this.connectionType = "Mobile";
                    console.log("Connection type changed to mobile.");
                    break;
                case connectivityModule.connectionType.bluetooth:
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
        stopMonitoring();
    }
}
// << connectivity-start-code