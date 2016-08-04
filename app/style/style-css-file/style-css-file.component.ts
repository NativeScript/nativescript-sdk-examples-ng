import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'style-css-file-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'style/style-css-file/style-css-file.component.html',
    styleUrls:['style/style-css-file/style.css']
})

export class StyleCSSFileComponent{
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