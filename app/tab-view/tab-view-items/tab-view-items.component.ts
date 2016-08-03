import {Component, ViewChild, ElementRef} from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label"

@Component({
    selector: 'tab-view-items-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'tab-view/tab-view-items/tab-view-items.component.html',
})

export class TabViewItemsComponent {
    // >> add-items-code
   public tabviewitems:Array<any>;

   constructor()
   {

       this.tabviewitems = [];

       var innerFirstStackLayout = new StackLayout();
       var firstLabel = new Label();
       firstLabel.text="Label first page";
       innerFirstStackLayout.addChild(firstLabel);

       var innerSecondStackLayout = new StackLayout();
       var secondLabel = new Label();
       secondLabel.text="Label second page";
       innerSecondStackLayout.addChild(secondLabel);

       var innerThirdStackLayout = new StackLayout();
       var thirdLabel = new Label();
       thirdLabel.text="Label third page";
       innerThirdStackLayout.addChild(thirdLabel);

       this.tabviewitems.push({"title":"Tab1", "view":innerFirstStackLayout});
       this.tabviewitems.push({"title":"Tab2", "view":innerSecondStackLayout});
       this.tabviewitems.push({"title":"Tab3", "view":innerThirdStackLayout});




   }

   public tabViewIndexChange(result){
       alert("Tab View selected index: "+result);
   }
   // << add-items-code

}