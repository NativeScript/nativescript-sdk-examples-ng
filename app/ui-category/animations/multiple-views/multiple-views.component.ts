import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import * as animationModule from "ui/animation";

let view1: View;
let view2: View;
let view3: View;
let view4: View;

@Component({
    moduleId: module.id,
    templateUrl: "./multiple-views.component.html",
    styleUrls: ["./../style.css"],
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
        let definitions = new Array<animationModule.AnimationDefinition>();
        let a1: animationModule.AnimationDefinition = {
            target: view1,
            translate: { x: 200, y: 0 },
            duration: 3000
        };
        definitions.push(a1);

        let a2: animationModule.AnimationDefinition = {
            target: view2,
            translate: { x: 0, y: 200 },
            duration: 3000
        };
        definitions.push(a2);

        let a3: animationModule.AnimationDefinition = {
            target: view3,
            translate: { x: -200, y: 0 },
            duration: 3000
        };
        definitions.push(a3);

        let a4: animationModule.AnimationDefinition = {
            target: view4,
            translate: { x: 0, y: -200 },
            duration: 3000
        };
        definitions.push(a4);

        let animationSet = new animationModule.Animation(definitions);

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
