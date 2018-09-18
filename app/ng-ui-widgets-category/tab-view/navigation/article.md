To navigate between the different `TabViewItem` views programmatically, use the `selectedIndex` property. A typical way to do this in Angular would be set it up as two-way binding. Using this kind of binding is relatively simple. Just use the standard `ngModel` syntax and bind it to the data model property `tabSelectedIndex`. You can also handle user input navigations with the `selectedIndexChanged` event. The following example displays the scenario in practice.

HTML
<snippet id='tab-view-navigation-ng-html'/>

TypeScript
<snippet id='tab-view-navigation-ng-code'/>
