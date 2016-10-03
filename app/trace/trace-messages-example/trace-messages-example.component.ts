// >> setting-url-webview
import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {setCategories, enable, categories, write, addCategories} from "trace"

@Component({
    selector: 'trace-messages-example-component',
    templateUrl: 'trace/trace-messages-example/trace-messages-example.component.html'
})

export class TraceMessagesExampleComponent{
    constructor(){
        
        enable();

        addCategories(categories.Binding);
        
        //filter out all trace messages except those that are animation and debug categories
        setCategories(categories.concat(categories.Navigation, categories.Debug));

        write("I (heart) NativeScript!", categories.Navigation);
    }
    
}
// << setting-url-webview
