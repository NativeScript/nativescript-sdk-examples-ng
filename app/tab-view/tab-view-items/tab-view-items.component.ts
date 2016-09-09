// >> add-items-code
import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label"

@Component({
    selector: 'tab-view-items-component',
    templateUrl: 'tab-view/tab-view-items/tab-view-items.component.html',
})

export class TabViewItemsComponent {
    
   public tabviewitems:Array<any>;

   constructor()
   {

       this.tabviewitems = [];

       var innerFirstStackLayout = new StackLayout();
       var firstLabel = new Label();
       firstLabel.margin = "15";
       firstLabel.text="Label first page";
       innerFirstStackLayout.addChild(firstLabel);

       var innerSecondStackLayout = new StackLayout();
       var secondLabel = new Label();
       secondLabel.margin = "15";
       secondLabel.text="Label second page";
       innerSecondStackLayout.addChild(secondLabel);

       var innerThirdStackLayout = new StackLayout();
       var thirdLabel = new Label();
       thirdLabel.margin = "15";
       thirdLabel.text="Label third page";
       innerThirdStackLayout.addChild(thirdLabel);

       this.tabviewitems.push({"title":"Tab1", "view":innerFirstStackLayout});
       this.tabviewitems.push({"title":"Tab2", "view":innerSecondStackLayout});
       this.tabviewitems.push({"title":"Tab3", "view":innerThirdStackLayout});

   }

   public tabViewIndexChange(result){
       alert("Tab View selected index: "+result);
   }

}
// << add-items-code
