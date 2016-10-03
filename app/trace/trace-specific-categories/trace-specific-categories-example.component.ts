// >> setting-url-webview
import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {setCategories, enable, disable, categories, addCategories, isCategorySet, enabled, write} from "trace";
import {setTimeout} from "timer"

@Component({
    selector: 'basic-trace-example-component',
    templateUrl: 'trace/trace-specific-categories/trace-specific-categories-example.component.html'
})

export class TraceSpecificCategoriesExampleComponent{
    constructor(){
        setCategories(categories.concat(
            categories.Binding,
            categories.Layout,
            categories.Style, 
            categories.ViewHierarchy, 
            categories.VisualTreeEvents
        ));
        enable();



        setTimeout(function(){
            console.log("-----------------------------------------------------");
            console.log("New trace category has been added");
            console.log("Category: Navigation")
            console.log("-----------------------------------------------------");
            alert("Navigation trace category has been added.");
            addCategories(categories.Navigation)
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
        if(isCategorySet(categories.Layout)){
            alert("Style category has been set")
        }
        else{
            alert("Style category has not been set")
        }
    }

    public enableTracing(){
        if(enabled == false){
            enable();
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
// << setting-url-webview
