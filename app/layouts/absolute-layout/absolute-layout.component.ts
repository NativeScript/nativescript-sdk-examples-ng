import { AbsoluteLayout} from "ui/layouts/absolute-layout"
import { Color } from "color";
import { Component, OnInit } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { Button } from "ui/button"
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

        // >> absolute-layout-code
        var firstButton = new Button();

        AbsoluteLayout.setLeft(firstButton, 175);
        AbsoluteLayout.setTop(firstButton, 50);
        firstButton.width = 170;
        firstButton.height = 100;

        absoluteLayout.addChild(firstButton);
        // << absolute-layout-code

        firstButton.text = "Left: 175, Top: 50";
        firstButton.style.backgroundColor = new Color("#CCFFFF");

        var secondButton = new Button();

        // In absolute layout place of an UI element is determined by 4 parameters : left, top, width and height.
        AbsoluteLayout.setLeft(secondButton, 70);
        AbsoluteLayout.setTop(secondButton, 200);
        secondButton.width = 230;
        secondButton.height = 60;
        secondButton.text = "Left: 70, Top: 200";
        absoluteLayout.addChild(secondButton);
        secondButton.style.backgroundColor = new Color("#8C489F");
    }
}