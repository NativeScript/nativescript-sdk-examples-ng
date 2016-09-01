import { Color } from "color";
import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { Button } from "ui/button"
import { Page } from "ui/page";
import { StackLayout} from "ui/layouts/stack-layout"

@Component({
    selector: 'stack-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/stack-layout/stack-layout.component.html'
})

export class StackLayoutComponent implements OnInit {

    constructor(private page: Page) {
    }

    ngOnInit() {
        let stackLayout = this.page.getViewById<StackLayout>("stackLayout");

        // >> stack-layout-code
        var firstButton = new Button();
        firstButton.text = "Button 2";
        firstButton.style.backgroundColor = new Color("#CCFFFF");
        firstButton.style.width = 100;

        stackLayout.addChild(firstButton);
        // << stack-layout-code

        var secondButton = new Button();
        secondButton.text = "Button 3";
        secondButton.style.backgroundColor = new Color("#8C489F");
        secondButton.style.width = 100;
        stackLayout.addChild(secondButton);
    }
}