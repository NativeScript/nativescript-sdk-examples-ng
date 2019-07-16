// >> bottom-navigation-events-ng
import { Component, NgZone } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { Tabs, SelectedIndexChangedEventData } from "tns-core-modules/ui/tabs";

@Component({
    moduleId: module.id,
    templateUrl: "./events.component.html"
})
export class EventsComponent {
    selectedIndex: number = 1;

    constructor(private _zone: NgZone) { }

    onTabsLoaded(args: EventData) {
        // Using the loaded event to ger a reference to the Tabs
        const tabs = args.object as Tabs;

        // Using selectedIndexChanged
        tabs.on(Tabs.selectedIndexChangedEvent, (data: SelectedIndexChangedEventData) => {
            const oldIndex: number = data.oldIndex;
            const newIndex: number = data.newIndex;
            console.log(`oldIndex: ${oldIndex}; newIndex: ${newIndex}`);

            this._zone.run(() => {
                this.selectedIndex = newIndex;
            });
        });
    }
}
// << bottom-navigation-events-ng
