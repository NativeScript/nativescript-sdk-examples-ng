import { Color } from "color";
import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { GridLayout} from "ui/layouts/grid-layout"
import { Button } from "ui/button"
import { Page } from "ui/page";

var layout = require("ui/layouts/grid-layout");

@Component({
    selector: 'grid-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/grid-layout/grid-layout.component.html',
    styleUrls: ["layouts/layouts.style.css"]
})

export class GridLayoutComponent {
}