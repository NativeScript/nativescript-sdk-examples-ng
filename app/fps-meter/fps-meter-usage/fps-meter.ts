import { Component, NgZone } from "@angular/core";
// >> fps-meter-module-import
import {start, removeCallback, addCallback, stop} from "fps-meter"
// << fps-meter-module-import

@Component({
    selector: 'fps-meter-usage',
    styleUrls:['fps-meter/fps-meter-usage/fps-meter.css'],
    templateUrl: 'fps-meter/fps-meter-usage/fps-meter.html'
})

export class FpsMeterUsageComponent {
    public status = false;
    public callbackId;
    public fps:string="0";
    public minfps:string="0";
    public fpslabeltitle="Start FPS Meter";

    constructor(private zone:NgZone){

    }

    public fpsmeter(){
        if(this.status){
            // >> stop-fps-meter
            removeCallback(this.callbackId);
            stop();
            // << stop-fps-meter
            this.status=false;
            this.fpslabeltitle="Start FPS Meter";
        }
        else{
            // >> start-fps-meter
                this.callbackId = addCallback((fps: number, minFps: number) => {
                    this.zone.run(()=>{
                        this.fps=fps.toFixed(2);
                        this.minfps=minFps.toFixed(2);
                    })
                });
            
            start();
            // << start-fps-meter
            this.status=true;
            this.fpslabeltitle="Stop FPS Meter";
        }
    }
}