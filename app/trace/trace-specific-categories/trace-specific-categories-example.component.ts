import { Component } from "@angular/core";
// >> import-trace-methods
import { setCategories, enable, disable, categories, addCategories, isCategorySet, enabled, write } from "trace";
// << import-trace-methods
import { setTimeout } from "timer"

@Component({
    selector: 'basic-trace-example-component',
    templateUrl: 'trace/trace-specific-categories/trace-specific-categories-example.component.html'
})

export class TraceSpecificCategoriesExampleComponent{
   
    constructor(){
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

        setTimeout(function(){
            console.log("-----------------------------------------------------");
            console.log("New trace category has been added");
            console.log("Category: Navigation")
            console.log("-----------------------------------------------------");
            alert("Navigation trace category has been added.");
            // >> trace-add-categories
            addCategories(categories.Navigation)
            // << trace-add-categories
        }, 2000);

        setTimeout(function(){
            console.log("-----------------------------------------------------");
            console.log("New trace category has been added");
            console.log("Category: NativeLifecycle")
            console.log("-----------------------------------------------------");
            alert("NativeLifecycle trace category has been added.");
            addCategories(categories.NativeLifecycle)
        }, 7000);

        write("I (heart) NativeScript!", categories.Debug);
    }
    public checkIsDebugCategorySet(){
        if(isCategorySet(categories.Debug)){
            alert("Debug category has been set");
        }
        else{
            alert("Debug category has not been set");
        }
    }

    public checkIsDebugStyleSet(){
        // >> check-iscategoryset
        if(isCategorySet(categories.Layout)){
            alert("Style category has been set")
        }
        else{
            alert("Style category has not been set")
        }
        // << check-iscategoryset
    }

    public enableTracing(){
        if(enabled === false){
            // >> disable-tracing
            enable();
            // << disable-tracing
            alert("Trace has been enabled");
        }
        else{
            alert("Trace has been already enabled");
        }
    }
    public disableTracing(){
        if(enabled){
            disable();
            alert("Trace has been disabled");
        }
        else{
            alert("Trace has been already disabled");
        }
    }
}