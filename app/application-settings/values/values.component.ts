import { Component } from "@angular/core";
// >> app-settings-code
import * as appSettings from "application-settings";
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
        appSettings.setBoolean("isTurnedOn", true);
        this.isTurnedOn = appSettings.getBoolean("isTurnedOn", true);
        // << app-settings-bool-code

        // >> app-settings-string-code
        appSettings.setString("username", "Wolfgang");
        this.username = appSettings.getString("username");
        // << app-settings-string-code

        // >> app-settings-number-code
        appSettings.setNumber("locationX", 54.321);
        this.locationX = parseFloat(appSettings.getNumber("locationX").toFixed(3));
        // << app-settings-number-code

        // >> app-settings-default-value-code
        // will return "No string value" if there is no value for "noSuchKey"
        this.someKey = appSettings.getString("noSuchKey", "No string value");
        // << app-settings-default-value-code

        // >> app-settings-no-value-code
        // will return undefined if there is no value for "noSuchKey"
        let defaultValue = appSettings.getString("noSuchKey");
        console.log(defaultValue);
        // << app-settings-no-value-code

        // >> app-settings-no-key-code
        // will return false if there is no value for "noBoolKey"
        this.noBoolKey = appSettings.hasKey("noBoolKey");
        // << app-settings-no-key-code
    }

    public onSetSettings() {
        appSettings.setBoolean("isTurnedOn", true);
        this.isTurnedOn = appSettings.getBoolean("isTurnedOn");

        appSettings.setString("username", "Wolfgang");
        this.username = appSettings.getString("username");

        appSettings.setNumber("locationX", 54.321);
        this.locationX = parseFloat(appSettings.getNumber("locationX").toFixed(2));

        appSettings.setString("noSuchKey", "New Value!");
        this.someKey = appSettings.getString("noSuchKey", "No string value");

        appSettings.setBoolean("noBoolKey", true);
        this.noBoolKey = appSettings.hasKey("noBoolKey");
    }

    public onClearSettings() {
        // >> app-settings-remove-key-code
        appSettings.remove("isTurnedOn");
        // << app-settings-remove-key-code

        // >> app-settings-remove-all-code
        appSettings.clear();
        // << app-settings-remove-all-code

        appSettings.setBoolean("isTurnedOn", false);
        this.isTurnedOn = appSettings.getBoolean("isTurnedOn", false);

        appSettings.setString("username", "Default name");
        this.username = appSettings.getString("username");

        appSettings.setNumber("locationX", 0.00);
        this.locationX = parseFloat(appSettings.getNumber("locationX").toFixed(2));

        this.someKey = appSettings.getString("noSuchKey", "No string value");
        this.noBoolKey = appSettings.hasKey("noBoolKey");
    }
}
