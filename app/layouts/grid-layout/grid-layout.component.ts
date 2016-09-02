import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'grid-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/grid-layout/grid-layout.component.html',
    styleUrls: ["layouts/layouts.style.css"]
})

export class GridLayoutComponent {
}