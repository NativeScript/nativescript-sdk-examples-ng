// >> textview-edit-disable-code
import { Component } from "@angular/core";

@Component({
    selector: 'basic-text-view-component',
    // >> (hide)
    styleUrls: ["text-view/basic-text-view/style.css"],
    // << (hide)
    templateUrl: 'text-view/basic-text-view/basic-text-view.component.html'
})

export class BasicTextViewComponent {

    public editState = true;
    public tvtext = "";

    disableTextView(){
        if(this.editState){
            this.editState = false;
        }
        else{
            this.editState = true;
        }
    }

    showText(){
        alert("Text: "+this.tvtext);
    }
    
}
// << textview-edit-disable-code
