## Properties

### Tabs Properties

| Name      | Type     | Description    |
|:----------|:---------|:---------------|
| `items`   | `Array<TabContentItem>` |  Gets or sets the items of the BottomNavigation. |
| `selectedIndex` | `number` | Gets or sets the selectedIndex of the BottomNavigation. |
| `swipeEnabled` | `boolean` | Gets or sets the swipe enabled state of the Tabs. |
| `offscreenTabLimit` | `number` | Gets or sets the number of offscreen preloaded tabs of the Tabs. |
| `tabStrip`| `TabStrip` | Gets or sets the tab strip of the BottomNavigation. |
|` tabsPosition` | _"top"_, _"bottom"_ | Gets or sets the position state of the Tabs. Default value: **top** |
|` iOSTabBarItemsAlignment` | _"leading"_, _"justified"_, _"center"_, _"centerSelected"_  | **iOS Only:** Gets or set the MDCTabBarAlignment of the tab bar icons in iOS. Default value: **justified** |


### TabStrip Properties

| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `iosIconRenderingMode`   | _"automatic"_, _"alwaysOriginal"_, _"alwaysTemplate"_ | Gets or sets the icon rendering mode on iOS. |
| `isIconSizeFixed` | `boolean` | When set to `true` the icon will have fixed size following the platform-specific design guidelines. Default value: `true`. |
| `items`   | `Array<TabStripItem>` |  Gets or sets an array of strip items of the TabStrip. |
| `highlightColor`   | `Color` |  Gets or sets the underline color of the selected TabStripItem. |
| `selectedItemColor`   | `Color` |  Gets or sets the color of the selected items in the tab strip. |
| `unSelectedItemColor`   | `Color` |  Gets or sets the color of the non-selected items in the tab strip. |


### TabStripItem Properties

| Name      | Type     | Description                                    |
|-----------|----------|------------------------------------------------|
| `title`   | `string` | Gets or sets the title of the tab strip entry. |
| `iconSource` | `string` | Gets or sets the icon source of the tab strip entry. Supports local image paths (`~`), resource images (`res://`) and icon fonts (`font://`). **Note:** To be used for programmatic creation of Tabs |
| `iconClass` | `string` | Gets or sets the CSS class name of the icon in the tab strip entry. **Note:** To be used for programmatic creation of Tabs |


## Events

### Tabs Events

| Name                   | Description                                           |
|:-----------------------|:------------------------------------------------------|
| `selectedIndexChanged` | Emitted when the `selectedIndex` property is changed. |
| `loaded`               | Emitted when the view is loaded.                      |
| `unloaded`             | Emitted when the view is unloaded.                    |
| `layoutChanged`        | Emitted when the layout bounds of a view changes due to layout processing. |

### TabStrip Events

| Name                   | Description                 |
|:-----------------------|:----------------------------|
| `itemTap` | Emitted when a `TabStripItem` is tapped. |

### TabStripItem Events

| Name                   | Description             |
|:-----------------------|:------------------------|
| `tap` | Emitted when a `TabStripItem` is tapped. |


## API References

| Name     | Type    |
|----------|---------|
| [Tabs](https://docs.nativescript.org/api-reference/classes/_ui_tabs_.tabs) | `Class` | 
| [TabStrip](https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_strip_.tabstrip) | `Class` |
| [TabStripItem](https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_strip_item_.tabstripitem) | `Class` |
| [TabContentItem](https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_content_item_.tabcontentitem) | `Class` |


## Native Component


| Android               | iOS      |
|:----------------------|:---------|
| [FrameLayout](https://developer.android.com/reference/android/widget/FrameLayout) | [MDCTabBar](https://material.io/develop/ios/components/tabs/api-docs/Classes/MDCTabBar.html) | 
