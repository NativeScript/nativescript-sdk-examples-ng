// >> fps-meter-module-usage
import { Component, NgZone } from "@angular/core";
import { start, removeCallback, addCallback, stop } from "tns-core-modules/fps-meter";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class FpsMeterUsageComponent {
    public status = false;
    public callbackId;

    constructor(private zone: NgZone) { }

    startFPSMeter() {
        this.callbackId = addCallback((fps: number, minFps: number) => {
            this.zone.run(() => {
                console.log(`Frames per seconds: ${fps.toFixed(2)}`);
                console.log(minFps.toFixed(2));
            });
        });
        start();
    }

    stopFPSMeter() {
        removeCallback(this.callbackId);
        stop();
    }
}
// << fps-meter-module-usage
