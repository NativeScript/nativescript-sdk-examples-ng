import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'dock-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/dock-layout/dock-layout.component.html',
    styleUrls: ["layouts/layouts.style.css"]
})

export class DockLayoutComponent {
}