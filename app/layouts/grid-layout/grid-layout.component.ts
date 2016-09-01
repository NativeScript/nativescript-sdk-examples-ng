import { Color } from "color";
import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { GridLayout} from "ui/layouts/grid-layout"
import { Button } from "ui/button"
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

        // >> grid-layout-code
        var newRow = new layout.ItemSpec(1, layout.GridUnitType.star);
        gridLayout.addRow(newRow);

        var button = new Button();
        button.text = "6";
        gridLayout.addChild(button);

        GridLayout.setColumnSpan(button, 3);
        GridLayout.setRow(button, 3);
        // << grid-layout-code

        button.backgroundColor = new Color("#CCFFFF");
    }
}