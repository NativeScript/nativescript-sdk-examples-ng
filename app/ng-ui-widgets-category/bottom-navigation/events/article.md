- `selectedIndexChanged` - Event used to track the tabs interaction though the change of `selectedIndex` property of `BottomNavigation` component. The event data is of type `SelectedIndexChangedEventData` extends `EventData` with two new properties:
    - `oldIndex` - Provides the old selected index.
    - `newIndwex` - Provides the new selected index.

<snippet id='bottom-navigation-events-ng'/>