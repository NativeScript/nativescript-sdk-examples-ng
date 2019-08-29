
## Properties

### BottomNavigation Properties

| Name     | Type     | Description    |
|----------|----------|----------------|
| `items`   | `Array<TabContentItem>` |  Gets or sets the items of the BottomNavigation. |
| `selectedIndex` | `number` | Gets or sets the selectedIndex of the BottomNavigation. |
| `tabStrip`| `TabStrip` | Gets or sets the tab strip of the BottomNavigation. |


### TabStrip Properties

| Name     | Type     | Description    |
|----------|----------|----------------|
| `iosIconRenderingMode`   | "automatic" \| "alwaysOriginal" \| "alwaysTemplate" | Gets or sets the icon rendering mode on iOS. |
| `isIconSizeFixed` | `boolean` | When set to false the icon will have fixed size following the platform-specific design guidelines. Default value: `true`.

### TabStripItem Properties

| Name     | Type     | Description    |
|----------|----------|----------------|
| `text`   | `string` | Gets or sets the label of the button. |


## Events

| Name     | Description    |
|----------|----------------|
| `select`    | Emitted when an `tabStripItem` is selected. |
| `unselect`   | Emitted when an `tabStripItem` is unselected. |

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
