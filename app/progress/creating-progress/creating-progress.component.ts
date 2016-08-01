// >> progress-create-code 
import { Component, OnInit }  from "@angular/core";
// >> hide
import { COMMON_DIRECTIVES } from '../../directives';
// << hide

@Component({
    selector: "creating-progress",
    // >> hide
    directives: [COMMON_DIRECTIVES],
    // << hide
    templateUrl: "progress/creating-progress/creating-progress.component.html",
})
export class CreatingProgressComponent implements OnInit {
    public progressValue: number;

    ngOnInit() {
        this.progressValue = 25;
    }
}
// << progress-create-code 