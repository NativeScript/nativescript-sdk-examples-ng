import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'basic-text-view-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'text-view/basic-text-view/basic-text-view.component.html'
})

export class BasicTextViewComponent {

    // >> textview-edit-disable-code
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
    // << textview-edit-disable-code
}