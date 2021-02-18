
import { Component } from "@angular/core";
import { Utils } from "@nativescript/core";

@Component({
    moduleId: module.id,
    styleUrls: ["./setinterval-example.css"],
    templateUrl: "./setinterval-example.html"
})
export class SetIntervalComponent {
    public buttoncolor;
    public color = ["green", "yellow", "red"];
    public id;
    public status = true;
    public buttonText = "Disable color change";

    constructor() {
        this.buttoncolor = "blue";
        let that = this;

         // >> set-interval-example
        this.id = Utils.setInterval(() => {
            let randNumber = Math.floor(Math.random() * (that.color.length));
            that.buttoncolor = that.color[randNumber];
        }, 1000);
        // << set-interval-example
    }

    public onButtonTap(args) {
        if (this.status) {
            Utils.clearInterval(this.id);
            this.status = false;
            this.buttonText = "Enable color change";
        } else {
            let that = this;

            this.id = Utils.setInterval(() => {
                let randNumber = Math.floor(Math.random() * (that.color.length));
                that.buttoncolor = that.color[randNumber];
            }, 1000);

            this.status = true;
            this.buttonText = "Disable color change";
        }
    }
}

