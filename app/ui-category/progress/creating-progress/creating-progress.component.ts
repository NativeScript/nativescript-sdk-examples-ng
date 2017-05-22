// >> progress-create-code
import { Component, OnInit } from "@angular/core";
import { Progress } from "ui/progress"

@Component({
    moduleId: module.id,
    templateUrl: "./creating-progress.component.html",
})
export class CreatingProgressComponent implements OnInit {
    public progressValue: number;

    ngOnInit() {
        this.progressValue = 25;

        setInterval(() => {
            this.progressValue += 1;
        }, 300);
    }

    onValueChanged(args) {
        let progressBar = <Progress>args.object;

        console.log("Value changed for " + progressBar);
        console.log("New value: " + progressBar.value);
    }
}
// << progress-create-code
