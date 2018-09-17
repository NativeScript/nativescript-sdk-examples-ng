The `TabView` component provides a simple way to navigate between different views by tapping on some of the tabs or by swiping between the views.
By default the `TabView` will load the view of the first tab, however it's possible to load alternative tabs when the app starts by setting the component’s `selectedIndex` property.

<snippet id='tab-view-require'/>

The general behavior of the `TabView` component is to load its items on demand. This means that every `TabViewItem` view will be loaded when it is shown and will be unloaded when it disappears. Respectively, the `loaded` and `unloaded` events will be fired when navigating between views. However, there are some specifics for each platform (iOS and Android), which are described in the notes below.

> Note (iOS specific): The iOS implementation uses `UITabBarController`. This means that only one `TabViewItem` can be shown at a given time and only one needs to be loaded. When the user selects a new `TabViewItem`, we load the new item and unload the previous one.

> Note (Android specific): The Android implementation uses a `ViewPager` control, which allows using the `swipe` gesture to navigate to the next or previous tab. This means that only one `TabViewItem` can be shown, but multiple `TabViewItems` need to be loaded to the side. If this is not done, you will not be able to see the next `TabViewItem` contents during the swipe. By default, the `ViewPager` control will pre-load one `TabViewItem` on the left and on on the right. Regarding that, if one of the items is already pre-loaded, it will not be loaded again. In NativeScript, we have exposed a property called `androidOffscreenTabLimit`, which allows specifying how many components should be pre-loaded to the sides (if you are setting up `androidOffscreenTabLimit` to 0, the Android behavior will match to the iOS behavior).

The iOS and Android UX guidelines regarding the Tab controls differ greatly. The difference is described in the below points:

* The iOS tabs have their tab bar, which will be displayed always on the bottom and does not allow swipe gesture for changing tabs.
* The Android tabs are on top and will enable the swipe navigation between the tabs.
* For Android we have `androidTabsPosition` property which has two options `top`(default value) and `bottom`. Setting up this property to `bottom` allows mimicking Bottom Tab Navigation control(provided by android support library v25 release). Setting the Tabs at the bottom will disable the swipe navigation and the items preloading functionality.