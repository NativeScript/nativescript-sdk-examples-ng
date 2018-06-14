You can use the NativeScript-Angular TabView `selectedIndex` property in two-way binding scenarios. Using this kind of binding is relatively simple. Just use the standard `ngModel` syntax to a data model property (for the sake of example, the TabViewTest class is used as binding context) and set the data model property `tabSelectedIndex` to the desired value. <Comment: Please review my changes to the previous sentence to verify I did not create a technical error. I think there is a word missing in the phrase, "syntax to a data model property".>

HTML
<snippet id='binding-tab-view-html'/>

TypeScript
<snippet id='binding-tab-view-code'/>
