import { AbsoluteLayout} from "ui/layouts/absolute-layout"
import { Color } from "color";
import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { Label } from "ui/label"
import { Page } from "ui/page";

@Component({
    selector: 'absolute-layout-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'layouts/absolute-layout/absolute-layout.component.html'
})

export class AbsoluteLayoutComponent implements OnInit {
    constructor(private page: Page) {
    }

    ngOnInit() {
        let absoluteLayout = this.page.getViewById<AbsoluteLayout>("absoluteLayout");
        absoluteLayout.style.backgroundColor = new Color("#F1F0FF");

        // >> absolute-layout-code
        var firstLabel = new Label();

        AbsoluteLayout.setLeft(firstLabel, 175);
        AbsoluteLayout.setTop(firstLabel, 50);
        firstLabel.width = 170;
        firstLabel.height = 100;

        absoluteLayout.addChild(firstLabel);
        // << absolute-layout-code

        firstLabel.text = "Left: 175, Top: 50";
        firstLabel.style.backgroundColor = new Color("#CCFFFF");

        var secondLabel = new Label();

        // In absolute layout place of an UI element is determined by 4 parameters : left, top, width and height.
        AbsoluteLayout.setLeft(secondLabel, 70);
        AbsoluteLayout.setTop(secondLabel, 200);
        secondLabel.width = 200;
        secondLabel.height = 30;
        secondLabel.text = "Left: 70, Top: 200";
        absoluteLayout.addChild(secondLabel);
        secondLabel.style.backgroundColor = new Color("#8C489F");
    }
}