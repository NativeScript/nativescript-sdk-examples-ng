// >> app-settings-code
import { Component } from "@angular/core";
import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "tns-core-modules/application-settings";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class UsageComponent {

    constructor() {
        setBoolean("isTurnedOn", true);
        setString("username", "Wolfgang");
        setNumber("locationX", 54.321);

        const isTurnedOn: boolean = getBoolean("isTurnedOn");
        const username: string = getString("username");
        const locationX: number = getNumber("locationX");

        // Will return "No string value" if there is no value for "noSuchKey"
        const someKey: string = getString("noSuchKey", "No string value");

        // Will return false if there is no key with name "noSuchKey"
        let isKeExisting: boolean = hasKey("noSuchKey");
    }

    onClearß() {
        // Removing a single entry via its key name
        remove("isTurnedOn");

        // Clearing the whole application-settings for this app
        clear();
    }
}
// << app-settings-code
