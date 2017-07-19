Using a `TabView` inside an Angular app requires some special attention about how to provide title, iconSource and content (view) of the TabItem. In a pure NativeScript application, `TabView` has an items property which could be set via XML to an array of TabViewItems (basically, an array of objects with `title` and `view` properties). However, NativeScript-Angular does not support nested properties in its HTML template, so adding `TabViewItem` to TabView is a little bit different. NativeScript-Angular provides a custom Angular directive that simplifies the way native `TabView` should be used. The following example shows how to add a `TabView` to your page (with some clarifications later):

HTML
<snippet id='basic-tab-view-html'/>

* tabItem:  The TabView directive uses a JSON object to transfer properties to the native object. Actually, `TabViewItem` is a pretty simple object with just `title`, `iconSource` and `view` properties. Since `title` and `iconSource` are usually represented as text, TabView directive uses a small JSON object (`{title: 'Profile', iconSource: '~/icon.png'}`) to define these properties easily in HTML. View, however, is not so simple, therefore as TabViewItem. View TabView directive uses the tag where `tabItem` attribute is set.
<Comment: The text in the previous sentence, TabViewItem. View TabView is incorrect, but any changes I make to it may change the meaning. The commas I added are correct, so please keep those.>

This is a typical usage of the TabView directive; however, if further customization is required, there are a few options available.