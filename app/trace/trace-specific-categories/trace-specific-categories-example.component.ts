import { Component } from "@angular/core";
// >> import-trace-methods
import { setCategories, enable, disable, categories, addCategories, isCategorySet, enabled, write, clearWriters } from "trace";
// << import-trace-methods
import { setTimeout } from "timer"

@Component({
    selector: 'trace-writer-categories',
    templateUrl: 'trace/trace-specific-categories/trace-specific-categories-example.component.html',
    styleUrls: ["trace/trace-specific-categories/style.css"]
})

export class TraceSpecificCategoriesExampleComponent {

    constructor() {
        disable();
        // >> setting-specific-tracing-categories
        setCategories(categories.concat(
            categories.Binding,
            categories.Layout,
            categories.Style,
            categories.ViewHierarchy,
            categories.VisualTreeEvents
        ));
        enable();
        // << setting-specific-tracing-categories

        // >> trace-add-categories
        addCategories(categories.Navigation)
        // << trace-add-categories

        setTimeout(function () {
            console.log("-----------------------------------------------------");
            console.log("New trace category has been added");
            console.log("Category: NativeLifecycle")
            console.log("-----------------------------------------------------");
            alert("NativeLifecycle trace category has been added.");
            addCategories(categories.NativeLifecycle)
        }, 2000);

        write("I (heart) NativeScript!", categories.Debug);
    }
    public checkIsDebugCategorySet() {
        if (isCategorySet(categories.Debug)) {
            alert("Debug category has been set");
        }
        else {
            alert("Debug category has not been set");
        }
    }

    public checkIsDebugVisualTreeEventsSet() {
        // >> check-iscategoryset
        if (isCategorySet(categories.VisualTreeEvents)) {
            alert("VisualTreeEvents category has been set")
        }
        else {
            alert("VisualTreeEvents category has not been set")
        }
        // << check-iscategoryset
    }

    public enableTracing() {
        if (enabled === false) {
            enable();
            alert("Trace has been enabled");
        }
        else {
            alert("Trace has been already enabled");
        }
    }
    public disableTracing() {
        if (enabled) {
            // >> disable-tracing
            disable();
            // << disable-tracing
            alert("Trace has been disabled");
        }
        else {
            alert("Trace has been already disabled");
        }
    }
}