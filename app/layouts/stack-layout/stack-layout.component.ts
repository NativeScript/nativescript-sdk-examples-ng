import { Color } from "color";
import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { Label } from "ui/label"
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
        stackLayout.style.backgroundColor = new Color("#F1F0FF");

        // >> stack-layout-code
        var firstLabel = new Label();
        firstLabel.text = "Label 2";
        firstLabel.style.backgroundColor = new Color("#CCFFFF");
        firstLabel.style.width = 90;

        stackLayout.addChild(firstLabel);
        // << stack-layout-code

        var secondLabel = new Label();
        secondLabel.text = "Label 3";
        secondLabel.style.backgroundColor = new Color("#8C489F");
        secondLabel.style.width = 80;
        stackLayout.addChild(secondLabel);
    }
}