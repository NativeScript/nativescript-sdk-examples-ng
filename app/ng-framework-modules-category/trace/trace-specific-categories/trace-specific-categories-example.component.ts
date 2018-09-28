import { Component } from "@angular/core";
// >> import-trace-methods
import {
    setCategories,
    enable,
    disable,
    categories,
    addCategories,
    isCategorySet,
    isEnabled,
    write,
    clearWriters
} from "tns-core-modules/trace";
// << import-trace-methods
import { setTimeout } from "tns-core-modules/timer";

@Component({
    moduleId: module.id,
    templateUrl: "./trace-specific-categories-example.component.html",
    styleUrls: ["./style.css"]
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
        addCategories(categories.Navigation);
        // << trace-add-categories

        setTimeout(function () {
            console.log("-----------------------------------------------------");
            console.log("New trace category has been added");
            console.log("Category: NativeLifecycle");
            console.log("-----------------------------------------------------");
            alert("NativeLifecycle trace category has been added.");
            addCategories(categories.NativeLifecycle);
        }, 2000);

        write("I (heart) NativeScript!", categories.Debug);
    }

    public checkIsDebugCategorySet() {
        if (isCategorySet(categories.Debug)) {
            alert("Debug category has been set");
        } else {
            alert("Debug category has not been set");
        }
    }

    public checkIsDebugVisualTreeEventsSet() {
        // >> check-iscategoryset
        if (isCategorySet(categories.VisualTreeEvents)) {
            alert("VisualTreeEvents category has been set");
        } else {
            alert("VisualTreeEvents category has not been set");
        }
        // << check-iscategoryset
    }

    public enableTracing() {
        if (isEnabled() === false) {
            enable();
            alert("Trace has been enabled");
        } else {
            alert("Trace has been already enabled");
        }
    }
    public disableTracing() {
        if (isEnabled()) {
            // >> disable-tracing
            disable();
            // << disable-tracing
            alert("Trace has been disabled");
        } else {
            alert("Trace has been already disabled");
        }
    }
}
