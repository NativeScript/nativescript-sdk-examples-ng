// >> icon-font-code-behind-code
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "./codebehind.component.html",
    styleUrls: ["./codebehind.css"],
})

export class CodeBehindFontsExampleComponent {
    glyphs = [];

    constructor() {
        for (let charCode = 0xe903; charCode <= 0xeaea; charCode++) {
            let glyph = {
                icon: String.fromCharCode(charCode),
                code: charCode.toString(16)
            };
            this.glyphs.push(glyph);
        }
    }
}
// << icon-font-code-behind-code
