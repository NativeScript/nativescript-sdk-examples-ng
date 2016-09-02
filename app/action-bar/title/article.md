The title of the ActionBar can be easily set by its corresponding property - `title`. You can additionally set an icon to use in your ActionBar on Android with the `icon` property.

Here’s what a basic usage of the `title` and `icon` properties looks like:
<snippet id='action-bar-title-icon-html'/>

The icon can only be set in Android platform. It is hidden by default, but you can explicitly control its visibility with the `android.iconVisibility' property.

Furthermore, the title can be customized by placing a content component (button, label, layout-components, etc.) directly in the ActionBar.