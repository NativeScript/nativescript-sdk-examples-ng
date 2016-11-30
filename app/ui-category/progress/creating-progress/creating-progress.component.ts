// >> progress-create-code
import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/progress/creating-progress/creating-progress.component.html",
})
export class CreatingProgressComponent implements OnInit {
    public progressValue: number;

    ngOnInit() {
        this.progressValue = 25;
    }
}
// << progress-create-code
