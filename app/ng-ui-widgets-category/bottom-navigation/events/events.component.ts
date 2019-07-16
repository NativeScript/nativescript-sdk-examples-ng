// >> bottom-navigation-events-ng
import { Component, NgZone } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { BottomNavigation, SelectedIndexChangedEventData } from "tns-core-modules/ui/bottom-navigation";

@Component({
    moduleId: module.id,
    templateUrl: "./events.component.html"
})
export class EventsComponent {
    selectedIndex: number = 1;

    constructor(private _zone: NgZone) { }

    onBottomNavLoaded(args: EventData) {
        // Using the loaded event to ger a reference to the BottomNavigation
        const bottomNavigation = args.object as BottomNavigation;

        // Using selectedIndexChanged
        bottomNavigation.on(BottomNavigation.selectedIndexChangedEvent, (data: SelectedIndexChangedEventData) => {
            const oldIndex: number = data.oldIndex;
            const newIndex: number = data.newIndex;
            console.log(`oldIndex: ${oldIndex}; newIndex: ${newIndex}`);

            this._zone.run(() => {
                this.selectedIndex = newIndex;
                console.log(`this.selectedIndex ${this.selectedIndex}`);
            });
        });
    }
}
// << bottom-navigation-events-ng
