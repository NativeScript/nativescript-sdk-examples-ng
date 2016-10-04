// >> setting-url-webview
import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {setCategories, enable, categories, write, addCategories, messageType, clearWriters, addWriter} from "trace";
import {isUndefined} from "utils/types";

class TimestampConsoleWriter{
    public write(message, category, type){
        if (!console) return;
        var msgType = isUndefined(type) ? messageType.log : type;
        var traceMessage = new Date().toISOString() + " Category: " + category + " Message: " + message;
    
        switch (msgType) {
        case messageType.log:
            console.log(traceMessage);
            break;
        case messageType.info:
            console.info(traceMessage);
            break;
        case messageType.warn:
            console.warn(traceMessage);
            break;
        case messageType.error:
            console.error(traceMessage);
            break;
        }
    }

}

@Component({
    selector: 'custom-tracewriter-example-component',
    templateUrl: 'trace/custom-tracewriter/custom-tracewriter-example.component.html'
})

export class CustomTraceWriterExampleComponent{
    constructor(){

        setCategories(categories.All);
        enable();
        
        clearWriters();
        addWriter(new TimestampConsoleWriter());
    }
    
}
// << setting-url-webview
