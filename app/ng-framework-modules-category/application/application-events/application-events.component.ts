import { Component } from "@angular/core";
import {
    on,
    ApplicationEventData,
    launchEvent, LaunchEventData,
    resumeEvent,
    exitEvent,
    uncaughtErrorEvent, UnhandledErrorEventData,
    displayedEvent,
    lowMemoryEvent,
    orientationChangedEvent, OrientationChangedEventData,
    suspendEvent
} from "tns-core-modules/application";

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
        on(launchEvent, launchListener);
        // << application-events-launch-ng

        // >> application-events-suspend-ng
        suspendListener = (args: ApplicationEventData) => {
            console.log("The appication was suspended!");
        };
        on(suspendEvent, suspendListener);
        // << application-events-suspend-ng

        // >> application-events-resume-ng
        resumeListener = (args: ApplicationEventData) => {
            console.log("The appication was resumed!");
        };
        on(resumeEvent, resumeListener);
        // << application-events-resume-ng

        // >> application-events-exit-ng
        exitListener = (args: ApplicationEventData) => {
            console.log("The appication was closed!");
        };
        on(exitEvent, exitListener);
        // << application-events-exit-ng

        // >> application-events-displayed-ng
        displayedListener = (args: ApplicationEventData) => {
            console.log("NativeScript displayedEvent!");
        };
        on(displayedEvent, displayedListener);
        // << application-events-displayed-ng

        // >> application-events-low-memory-ng
        lowMemoryListener = (args: ApplicationEventData) => {
            // the instance that has raised the event
            console.log("Instance: ", args.object);
        };
        on(lowMemoryEvent, lowMemoryListener);
        // << application-events-low-memory-ng

        // >> application-events-orientation-ng
        orientationChangedListener = (args: OrientationChangedEventData) => {
            // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
            console.log("Orientation: ", args.newValue);
        };
        on(orientationChangedEvent, orientationChangedListener);
        // << application-events-orientation-ng

        // >> application-events-error-ng
        uncaughtErrorListener = (args: UnhandledErrorEventData) => {
            // UnhandledErrorEventData.error: NativeScriptError
            console.log("NativeScript Error: ", args.error);
        };
        on(uncaughtErrorEvent, uncaughtErrorListener);
        // << application-events-error-ng
    }
}
