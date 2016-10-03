// >> setting-url-webview
import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {setCategories, enable, categories} from "trace"

@Component({
    selector: 'basic-trace-example-component',
    templateUrl: 'trace/basic-trace-example/basic-trace-example.component.html'
})

export class BasicTraceExampleComponent{
    constructor(){
        setCategories(categories.All);
        enable();
    }
    
}
// << setting-url-webview
