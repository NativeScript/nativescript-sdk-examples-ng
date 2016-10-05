// >> time-picker-configure-code
import { Component } from "@angular/core";
import {setInterval, setTimeout, clearInterval} from "timer"

@Component({
    selector: 'timer-module-component',
    styleUrls:['timer/sample-timer-module-example/sample-timer-module-example.css'],
    templateUrl: 'timer/sample-timer-module-example/sample-timer-module-example.html'
})

export class SampleTimerModuleExampleComponent {
    public buttoncolor;
    public color = ["green", "yellow", "red"];
    public id;
    public status = true;
    public counter = 0;

    constructor(){
        this.buttoncolor = "blue";
        var that =this;
        this.id = setInterval(() => {
            var randNumber = Math.floor(Math.random() * (that.color.length));
            that.buttoncolor = that.color[randNumber];
        }, 1000)
    }
    
    public onButtonTap(){
        if(this.status){
            clearInterval(this.id);
            this.status=false;
        }
        else{
            var that =this;
            this.id = setInterval(() => {
                var randNumber = Math.floor(Math.random() * (that.color.length));
                that.buttoncolor = that.color[randNumber];
            }, 1000)
            this.status=true;
        }
    }

    public increase(){
        var that = this;
        setTimeout(function(){
            that.counter++;
        }, 2000)
    }
    public decrease(){
        var that = this;
        setTimeout(function(){
            that.counter--;
        }, 2000)
    }
}
// << time-picker-configure-code
