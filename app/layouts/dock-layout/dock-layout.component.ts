import { Color } from "color";
import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { DockLayout} from "ui/layouts/dock-layout"
import { Label } from "ui/label"
import { Page } from "ui/page";

import enums = require("ui/enums");

@Component({
    selector: 'dock-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/dock-layout/dock-layout.component.html'
})

export class DockLayoutComponent implements OnInit {

    constructor(private page: Page) {
    }

    ngOnInit() {
        let dockLayout = this.page.getViewById<DockLayout>("dockLayout");
        dockLayout.style.backgroundColor = new Color("#F1F0FF");

        // >> dock-layout-code
        var labelDockedToTop = new Label();
        labelDockedToTop.text = "top";
        DockLayout.setDock(labelDockedToTop, enums.Dock.top);
        dockLayout.addChild(labelDockedToTop);
        // << dock-layout-code

        labelDockedToTop.style.backgroundColor = new Color("#B3B3D7");
        labelDockedToTop.style.margin = "5";

        var lastLabel = new Label();
        lastLabel.text = "fill";
        dockLayout.addChild(lastLabel);

        lastLabel.style.backgroundColor = new Color("#CCFFFF");
        lastLabel.style.margin = "5";
    }
}