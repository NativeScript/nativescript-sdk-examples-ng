import { Component, OnInit, OnDestroy } from "@angular/core";
// >> connectivity-import-code
import * as connectivity from "tns-core-modules/connectivity";
// << connectivity-import-code
@Component({
    moduleId: module.id,
    templateUrl: "./using-connectivity.component.html"
})

export class UsingConnectivityExampleComponent implements OnInit, OnDestroy {
    public connectionType: string;

    constructor() {
        // >> connectivity-gettype-code
        let connectionType = connectivity.getConnectionType();
        switch (connectionType) {
            case connectivity.connectionType.none:
                this.connectionType = "None";
                break;
            case connectivity.connectionType.wifi:
                this.connectionType = "Wi-Fi";
                break;
            case connectivity.connectionType.mobile:
                this.connectionType = "Mobile";
                break;
            // case connectivity.connectionType.bluetooth:
            //     this.connectionType = "Bluetooth"; // Example comng with NativeScript 5.x.x
            //     break;
            default:
                break;
        }
        // << connectivity-gettype-code
    }

    ngOnInit() {
        // >> connectivity-start-code
        connectivity.startMonitoring((newConnectionType: number) => {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    this.connectionType = "None";
                    console.log("Connection type changed to none.");
                    break;
                case connectivity.connectionType.wifi:
                    this.connectionType = "Wi-Fi";
                    console.log("Connection type changed to WiFi.");
                    break;
                case connectivity.connectionType.mobile:
                    this.connectionType = "Mobile";
                    console.log("Connection type changed to mobile.");
                    break;
                default:
                    break;
            }
        });
        // << connectivity-start-code
    }

    ngOnDestroy() {
        // >> connectivity-stop-code
        connectivity.stopMonitoring();
        // << connectivity-stop-code
    }
}
