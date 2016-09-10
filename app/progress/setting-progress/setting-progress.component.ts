// >> progress-setting-code 
import { Component, OnInit, ViewChild, ElementRef}  from "@angular/core";
import { Progress } from "ui/progress";

@Component({
    selector: "setting-progress",
    templateUrl: "progress/setting-progress/setting-progress.component.html",
})

export class SettingProgressComponent implements OnInit {

    @ViewChild("myProgress") progress: ElementRef;

    ngOnInit() {
        let myProgress: Progress = this.progress.nativeElement;
        myProgress.maxValue = 120;
        myProgress.value = 10;
        
        setInterval(function() {
            myProgress.value += 2;
        }, 100);
    }
}
// << progress-setting-code 
