// >> setting-style-via-code
import {Component, OnInit} from "@angular/core";
import { Page } from "ui/page"
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";

@Component({
    selector: 'apply-style-code-component',
    templateUrl: 'style/apply-style-via-code/apply-style-code.component.html'
})

export class ApplyStyleCodeComponent implements OnInit{
    
    constructor(private page: Page) {

    }

    ngOnInit() {
        let layout:StackLayout = this.page.getViewById<StackLayout>("mainlayout");

          this.page.css = "button, label, stack-layout {horizontal-align: center;}";
          this.page.css = "button {font-size: 36;}"
          this.page.css = ".title {font-size: 30;margin: 20;}";
          this.page.css = ".message {font-size: 20; color: #284848; text-align: center; margin: 0 20;}";
          this.page.css = "#labelStyle{ background-color: #564448; }";

          this.page.css = "#newLabelStyle{ color: #8C489F; }";
          var newlabel = new Label();
          newlabel.text="New label";
          newlabel.id="newLabelStyle";

          layout.addChild(newlabel);
       
    }
    
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
    
}
// << setting-style-via-code
