import { AbsoluteLayout} from "ui/layouts/absolute-layout"
import { Color } from "color";
import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { Button } from "ui/button"
import { Page } from "ui/page";

@Component({
    selector: 'absolute-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/absolute-layout/absolute-layout.component.html'
})

export class AbsoluteLayoutComponent {
}