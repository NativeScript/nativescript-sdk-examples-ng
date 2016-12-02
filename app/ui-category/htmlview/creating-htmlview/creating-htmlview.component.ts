// >> creating-htmlview-code
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./creating-htmlview.component.html"
})

export class CreatingHtmlViewExampleComponent {
    public htmlString: string;

    constructor() {
        this.htmlString = '<span><h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1></span>';
    }
}
// << creating-htmlview-code
