import { Color } from "color";
import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { DockLayout} from "ui/layouts/dock-layout"
import { Button } from "ui/button"
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

        // >> dock-layout-code
        var buttonDockedToTop = new Button();
        buttonDockedToTop.text = "top";        
        DockLayout.setDock(buttonDockedToTop, enums.Dock.top);
        dockLayout.addChild(buttonDockedToTop);
        // << dock-layout-code

        buttonDockedToTop.style.backgroundColor = new Color("#B3B3D7");
        buttonDockedToTop.style.margin = "5";

        var lastButton = new Button();
        lastButton.text = "fill";
        dockLayout.addChild(lastButton);

        lastButton.style.backgroundColor = new Color("#CCFFFF");
        lastButton.style.margin = "5";
    }
}