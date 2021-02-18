import { Component } from "@angular/core";
// >> trace-customtracewriter-imports
import { Trace, Utils } from "@nativescript/core";
// << trace-customtracewriter-imports

// >> trace-create-custom-writer
class TimestampConsoleWriter {
    public array = [];

    public write(message, category, type) {
        if (!console) {
            return;
        }
        let msgType = Utils.isUndefined(type) ? Trace.messageType.log : type;

        switch (msgType) {
            case Trace.messageType.log:
                this.array.push({
                    "messageType": "log",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case Trace.messageType.info:
                this.array.push({
                    "messageType": "info",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case Trace.messageType.warn:
                this.array.push({
                    "messageType": "warning",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            case Trace.messageType.error:
                this.array.push({
                    "messageType": "error",
                    "date": new Date().toISOString(),
                    "message": message,
                    "category": category
                });
                break;
            default:
                break;
        }
    }
}
// << trace-create-custom-writer

@Component({
    moduleId: module.id,
    templateUrl: "./custom-tracewriter-example.component.html",
    styleUrls: ["./style.css"]
})
export class CustomTraceWriterExampleComponent {
    public customwriter: TimestampConsoleWriter;

    constructor() {
        Trace.disable();
        // >> trace-add-custom-writer
        Trace.setCategories(Trace.categories.Navigation);
        Trace.enable();
        this.customwriter = new TimestampConsoleWriter();
        Trace.clearWriters();
        Trace.addWriter(this.customwriter);
        // << trace-add-custom-writer
    }
}
