// >> time-picker-configure-code
import { Component } from "@angular/core";
import {start, removeCallback, addCallback, stop} from "fps-meter"

@Component({
    selector: 'fps-meter-module-component',
    styleUrls:['fpsMeter/fps-meter-module-example/fps-meter-module-example.css'],
    templateUrl: 'fpsMeter/fps-meter-module-example/fps-meter-module-example.html'
})

export class FPSMeterModuleExampleComponent {
    public status = false;
    public callbackId;
    public fps:string="0";
    public minfps:string="0";

    public fpsmeter(){
        if(this.status){
            removeCallback(this.callbackId);
            stop();
            this.status=false;
        }
        else{
            var that =this;
            this.callbackId = addCallback(function (fps: number, minFps: number) {
                console.info("fps=" + fps + " minFps=" + minFps);
                that.fps=fps.toFixed(2);
                that.minfps=minFps.toFixed(2);
            });
            start();
            this.status=true;
        }
        

    }
}
// << time-picker-configure-code
