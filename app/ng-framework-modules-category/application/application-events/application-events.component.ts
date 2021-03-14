import { Component } from "@angular/core";
import {
    Application,
    ApplicationEventData,
    LaunchEventData,
    OrientationChangedEventData,
    UnhandledErrorEventData
} from "@nativescript/core";

let launchListener,
    suspendListener,
    resumeListener,
    exitListener,
    displayedListener,
    lowMemoryListener,
    orientationChangedListener,
    uncaughtErrorListener;

@Component({
    moduleId: module.id,
    templateUrl: "./application-events.component.html"
})
export class ApplicationEventsComponent {
    public isItemVisible: boolean;

    constructor() {
        // >> application-events-launch-ng
        launchListener = (args: LaunchEventData) => {
            console.log("The appication was launched!");
        };
        Application.on(Application.launchEvent, launchListener);
        // << application-events-launch-ng

        // >> application-events-suspend-ng
        suspendListener = (args: ApplicationEventData) => {
            console.log("The appication was suspended!");
        };
        Application.on(Application.suspendEvent, suspendListener);
        // << application-events-suspend-ng

        // >> application-events-resume-ng
        resumeListener = (args: ApplicationEventData) => {
            console.log("The appication was resumed!");
        };
        Application.on(Application.resumeEvent, resumeListener);
        // << application-events-resume-ng

        // >> application-events-exit-ng
        exitListener = (args: ApplicationEventData) => {
            console.log("The appication was closed!");
        };
        Application.on(Application.exitEvent, exitListener);
        // << application-events-exit-ng

        // >> application-events-displayed-ng
        displayedListener = (args: ApplicationEventData) => {
            console.log("NativeScript displayedEvent!");
        };
        Application.on(Application.displayedEvent, displayedListener);
        // << application-events-displayed-ng

        // >> application-events-low-memory-ng
        lowMemoryListener = (args: ApplicationEventData) => {
            // the instance that has raised the event
            console.log("Instance: ", args.object);
        };
        Application.on(Application.lowMemoryEvent, lowMemoryListener);
        // << application-events-low-memory-ng

        // >> application-events-orientation-ng
        orientationChangedListener = (args: OrientationChangedEventData) => {
            // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
            console.log("Orientation: ", args.newValue);
        };
        Application.on(Application.orientationChangedEvent, orientationChangedListener);
        // << application-events-orientation-ng

        // >> application-events-error-ng
        uncaughtErrorListener = (args: UnhandledErrorEventData) => {
            // UnhandledErrorEventData.error: NativeScriptError
            console.log("NativeScript Error: ", args.error);
        };
        Application.on(Application.uncaughtErrorEvent, uncaughtErrorListener);
        // << application-events-error-ng
    }
}
