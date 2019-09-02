## Properties

### BottomNavigation Properties

| Name      | Type     | Description    |
|:----------|:---------|:---------------|
| `items`   | `Array<TabContentItem>` |  Gets or sets the items of the BottomNavigation. |
| `selectedIndex` | `number` | Gets or sets the selectedIndex of the BottomNavigation. |
| `tabStrip`| `TabStrip` | Gets or sets the tab strip of the BottomNavigation. |


### TabStrip Properties

| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `iosIconRenderingMode`   | _"automatic"_, _"alwaysOriginal"_, _"alwaysTemplate"_ | Gets or sets the icon rendering mode on iOS. |
| `isIconSizeFixed` | `boolean` | When set to `true` the icon will have fixed size following the platform-specific design guidelines. Default value: `true`. |
| `items`   | `Array<TabStripItem>` |  Gets or sets an array of strip items of the TabStrip. |



### TabStripItem Properties

| Name      | Type     | Description                                    |
|-----------|----------|------------------------------------------------|
| `title`   | `string` | Gets or sets the title of the tab strip entry. |
| `iconSource` | `string` | Gets or sets the icon source of the tab strip entry. Supports local image paths (`~`), resource images (`res://`) and icon fonts (`font://`) |
| `image`   | `Image` | Gets or sets the image of the tab strip entry.  |
| `label`   | `Label` | Gets or sets the label of the tab strip entry.  |


## Events

### BottomNavigation Events

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
| [BottomNavigation](https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_bottom_navigation_.bottomnavigation) | `Class` | 
| [TabStrip](https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_strip_.tabstrip) | `Class` |
| [TabStripItem](https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_strip_item_.tabstripitem) | `Class` |
| [TabContentItem](https://docs.nativescript.org/api-reference/classes/_ui_tab_navigation_tab_content_item_.tabcontentitem) | `Class` |


## Native Component


| Android               | iOS      |
|:----------------------|:---------|
| [FrameLayout](https://developer.android.com/reference/android/widget/FrameLayout) | [UITabViewController](https://developer.apple.com/documentation/uikit/uitabbarcontroller?language=objc) | 
