// >> using-ngif-code 
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)

@Component({
    selector: 'ngif-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: "ng-directives/using-ngif/using-ngif.component.html",
})

export class UsingNgIfComponent {
    public isVisible: boolean = true;

    onTap() {
        if (this.isVisible) {
            this.isVisible = false;
        } else  {
            this.isVisible = true;
        }
    }
}
// << using-ngif-code        