import { Component } from "@angular/core";
// >> import-trace-methods
import { Trace } from "@nativescript/core";
// << import-trace-methods
import { Utils } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./trace-specific-categories-example.component.html",
    styleUrls: ["./style.css"]
})

export class TraceSpecificCategoriesExampleComponent {

    constructor() {
        Trace.disable();
        // >> setting-specific-tracing-categories
        Trace.setCategories(Trace.categories.concat(
            Trace.categories.Binding,
            Trace.categories.Layout,
            Trace.categories.Style,
            Trace.categories.ViewHierarchy,
            Trace.categories.VisualTreeEvents
        ));
        Trace.enable();
        // << setting-specific-tracing-categories

        // >> trace-add-categories
        Trace.addCategories(Trace.categories.Navigation);
        // << trace-add-categories

        Utils.setTimeout(function () {
            console.log("-----------------------------------------------------");
            console.log("New trace category has been added");
            console.log("Category: NativeLifecycle");
            console.log("-----------------------------------------------------");
            alert("NativeLifecycle trace category has been added.");
            Trace.addCategories(Trace.categories.NativeLifecycle);
        }, 2000);

        Trace.write("I (heart) NativeScript!", Trace.categories.Debug);
    }

    public checkIsDebugCategorySet() {
        if (Trace.isCategorySet(Trace.categories.Debug)) {
            alert("Debug category has been set");
        } else {
            alert("Debug category has not been set");
        }
    }

    public checkIsDebugVisualTreeEventsSet() {
        // >> check-iscategoryset
        if (Trace.isCategorySet(Trace.categories.VisualTreeEvents)) {
            alert("VisualTreeEvents category has been set");
        } else {
            alert("VisualTreeEvents category has not been set");
        }
        // << check-iscategoryset
    }

    public enableTracing() {
        if (Trace.isEnabled() === false) {
            Trace.enable();
            alert("Trace has been enabled");
        } else {
            alert("Trace has been already enabled");
        }
    }
    public disableTracing() {
        if (Trace.isEnabled()) {
            // >> disable-tracing
            Trace.disable();
            // << disable-tracing
            alert("Trace has been disabled");
        } else {
            alert("Trace has been already disabled");
        }
    }
}
