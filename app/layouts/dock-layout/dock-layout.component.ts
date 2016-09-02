import { Color } from "color";
import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { DockLayout} from "ui/layouts/dock-layout"
import { Button } from "ui/button"
import { Page } from "ui/page";

import enums = require("ui/enums");

@Component({
    selector: 'dock-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/dock-layout/dock-layout.component.html',
    styleUrls: ["layouts/layouts.style.css"]
})

export class DockLayoutComponent {
}