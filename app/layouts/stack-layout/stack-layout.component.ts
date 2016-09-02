import { Color } from "color";
import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { Button } from "ui/button"
import { Page } from "ui/page";
import { StackLayout} from "ui/layouts/stack-layout"

@Component({
    selector: 'stack-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/stack-layout/stack-layout.component.html',
    styleUrls: ["layouts/layouts.style.css"]
})

export class StackLayoutComponent {
}