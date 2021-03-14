import { Component, AfterViewInit } from "@angular/core";
import { Page } from "@nativescript/core";
import { View } from "@nativescript/core";
import { Animation, AnimationDefinition } from "@nativescript/core";

let view1: View;
let view2: View;
let view3: View;
let view4: View;

@Component({
    moduleId: module.id,
    templateUrl: "./multiple-views.component.html",
    styleUrls: ["./../style.css"],
})
export class MultipleViewsComponent implements AfterViewInit {

    constructor(private page: Page) { }

    ngAfterViewInit() {
        view1 = this.page.getViewById<View>("view1");
        view2 = this.page.getViewById<View>("view2");
        view3 = this.page.getViewById<View>("view3");
        view4 = this.page.getViewById<View>("view4");
    }

    // >> animate-multiple-views-simultaneously-code
    // import { Animation, AnimationDefinition } from "@nativescript/core";
    animate() {
        let definitions = new Array<AnimationDefinition>();
        let a1: AnimationDefinition = {
            target: view1,
            translate: { x: 200, y: 0 },
            duration: 3000
        };
        definitions.push(a1);

        let a2: AnimationDefinition = {
            target: view2,
            translate: { x: 0, y: 200 },
            duration: 3000
        };
        definitions.push(a2);

        let a3: AnimationDefinition = {
            target: view3,
            translate: { x: -200, y: 0 },
            duration: 3000
        };
        definitions.push(a3);

        let a4: AnimationDefinition = {
            target: view4,
            translate: { x: 0, y: -200 },
            duration: 3000
        };
        definitions.push(a4);

        let animationSet = new Animation(definitions);

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
