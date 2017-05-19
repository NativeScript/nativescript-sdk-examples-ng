import { Component } from "@angular/core";
// >> app-settings-code
import { getBoolean, setBoolean, getNumber, setNumber, getString, setString, hasKey, remove, clear } from "application-settings";
// << app-settings-code

@Component({
    moduleId: module.id,
    templateUrl: "./values.component.html"
})
export class ValuesExampleComponent {
    public isTurnedOn: boolean;
    public username: string;
    public locationX: number;
    public someKey: string;
    public noBoolKey: boolean;

    constructor() {
        // >> app-settings-bool-code
        setBoolean("isTurnedOn", true);
        this.isTurnedOn = getBoolean("isTurnedOn", true);
        // << app-settings-bool-code

        // >> app-settings-string-code
        setString("username", "Wolfgang");
        this.username = getString("username");
        // << app-settings-string-code

        // >> app-settings-number-code
        setNumber("locationX", 54.321);
        this.locationX = parseFloat(getNumber("locationX").toFixed(3));
        // << app-settings-number-code

        // >> app-settings-default-value-code
        // will return "No string value" if there is no value for "noSuchKey"
        this.someKey = getString("noSuchKey", "No string value");
        // << app-settings-default-value-code

        // >> app-settings-no-value-code
        // will return undefined if there is no value for "noSuchKey"
        let defaultValue = getString("noSuchKey");
        console.log(defaultValue);
        // << app-settings-no-value-code

        // >> app-settings-no-key-code
        // will return false if there is no value for "noBoolKey"
        this.noBoolKey = hasKey("noBoolKey");
        // << app-settings-no-key-code
    }

    public onSetSettings() {
        setBoolean("isTurnedOn", true);
        this.isTurnedOn = getBoolean("isTurnedOn");

        setString("username", "Wolfgang");
        this.username = getString("username");

        setNumber("locationX", 54.321);
        this.locationX = parseFloat(getNumber("locationX").toFixed(2));

        setString("noSuchKey", "New Value!");
        this.someKey = getString("noSuchKey", "No string value");

        setBoolean("noBoolKey", true);
        this.noBoolKey = hasKey("noBoolKey");
    }

    public onClearSettings() {
        // >> app-settings-remove-key-code
        remove("isTurnedOn");
        // << app-settings-remove-key-code

        // >> app-settings-remove-all-code
        clear();
        // << app-settings-remove-all-code

        setBoolean("isTurnedOn", false);
        this.isTurnedOn = getBoolean("isTurnedOn", false);

        setString("username", "Default name");
        this.username = getString("username");

        setNumber("locationX", 0.00);
        this.locationX = parseFloat(getNumber("locationX").toFixed(2));

        this.someKey = getString("noSuchKey", "No string value");
        this.noBoolKey = hasKey("noBoolKey");
    }
}
