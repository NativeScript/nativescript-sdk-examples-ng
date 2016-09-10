import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import animationModule = require("ui/animation");

var view1: View;
var view2: View;
var view3: View;
var view4: View;

@Component({
    selector: 'animations-component',
    templateUrl: 'animations/multiple-views/multiple-views.component.html',
    styleUrls:["animations/style.css"],
})

export class MultipleViewsComponent implements OnInit {
    constructor(private page: Page) {
    }

    ngOnInit() {
        view1 = this.page.getViewById<View>("view1");
        view2 = this.page.getViewById<View>("view2");
        view3 = this.page.getViewById<View>("view3");
        view4 = this.page.getViewById<View>("view4");
    }

    // >> animate-multiple-views-simultaneously-code
    animate() {
        var definitions = new Array<animationModule.AnimationDefinition>();
        var a1: animationModule.AnimationDefinition = {
            target: view1,
            translate: { x: 200, y: 0 },
            duration: 3000
        };
        definitions.push(a1);

        var a2: animationModule.AnimationDefinition = {
            target: view2,
            translate: { x: 0, y: 200 },
            duration: 3000
        };
        definitions.push(a2);

        var a3: animationModule.AnimationDefinition = {
            target: view3,
            translate: { x: -200, y: 0 },
            duration: 3000
        };
        definitions.push(a3);

        var a4: animationModule.AnimationDefinition = {
            target: view4,
            translate: { x: 0, y: -200 },
            duration: 3000
        };
        definitions.push(a4);

        var animationSet = new animationModule.Animation(definitions);

        animationSet.play().then(() => {
            console.log("Animation finished");
        })
            .catch((e) => {
                console.log(e.message);
            });
    }
    // << animate-multiple-views-simultaneously-code

    reset() {
        view1.translateX = 0;
        view1.translateY = 0;
        view2.translateX = 0;
        view2.translateY = 0;
        view3.translateX = 0;
        view3.translateY = 0;
        view4.translateX = 0;
        view4.translateY = 0;
    }
}
