- `selectedIndexChanged` - Event used to track the tabs interaction though the change of `selectedIndex` property of `BottomNavigation` component. The event data is of type `SelectedIndexChangedEventData` extends `EventData` with two new properties:
    - `oldIndex` - Provides the old selected index.
    - `newIndwex` - Provides the new selected index.

<snippet id='bottom-navigation-events-ng'/>

> **Note:** Any UI event declared throught the HTML markup will be automatically wrapped in the Angular zone. This is not the case when the events are declared thorugh the code behind (e.g., when using `on`) so in such cases we need to manually wrap any event that will be called from a native code:
```TypeScript
constructor(private _zone: NgZone) { }

// .. more code follows here

bottomNavigation.on(BottomNavigation.selectedIndexChangedEvent, (data: SelectedIndexChangedEventData) => {
    // manually wrap in the NgZone when using the event via code-behind
    this._zone.run(() => {
        this.selectedIndex = newIndex;
    });
});
```