import { Color } from "color";
import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { GridLayout} from "ui/layouts/grid-layout"
import { Label } from "ui/label"
import { Page } from "ui/page";

var layout = require("ui/layouts/grid-layout");

@Component({
    selector: 'grid-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/grid-layout/grid-layout.component.html'
})

export class GridLayoutComponent implements OnInit {

    constructor(private page: Page) {
    }

    ngOnInit() {
        let gridLayout = this.page.getViewById<GridLayout>("gridLayout");
        gridLayout.style.backgroundColor = new Color("#F1F0FF");

        // >> grid-layout-code
        var newRow = new layout.ItemSpec(1, layout.GridUnitType.star);
        gridLayout.addRow(newRow);

        var label = new Label();
        label.text = "colSpan:3 row:2";
        gridLayout.addChild(label);

        GridLayout.setColumnSpan(label, 3);
        GridLayout.setRow(label, 2);
        // << grid-layout-code
        label.cssClass = "label2"
    }
}