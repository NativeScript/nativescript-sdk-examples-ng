## Properties

### TabView Properties

| Name     | Type     | Description    |
|:---------|:---------|:---------------|

| `androidOffscreenTabLimit` | `number` | Gets or sets the number of tabs that should be retained to either side of the current tab in the view hierarchy in an idle state. Tabs beyond this limit will be recreated from the TabView when needed. |
| `androidSelectedTabHighlightColor` | `Color` | Gets or sets the color of the horizontal line drawn below the currently selected tab on Android. |
| `iosIconRenderingMode` | _"automatic" | "alwaysOriginal" | "alwaysTemplate"_ | Gets or sets the icon rendering mode on iOS. |
| `items` | `Array<TabViewItem>` | Gets or sets the items of the TabView. |
| `selectedIndex` | `number` | Gets or sets the selectedIndex of the TabView. |
| `selectedTabTextColor` | `Color` | Gets or sets the text color of the selected tab title. |
| `tabBackgroundColor` | `Color` | Gets or sets the background color of the tabs. |
| `tabTextColor` | `Color` | Gets or sets the font size of the tabs titles. |
| `tabTextFontSize` | `Color` | Gets or sets the font size of the tabs titles. |

### TabViewItem Properties

| Name      | Type     | Description                                    |
|-----------|----------|------------------------------------------------|
| `title`   | `string` | Gets or sets the title of the tab strip entry. |
| `iconSource` | `string` | Gets or sets the icon source of the tab strip entry. Supports local image paths (`~`), resource images (`res://`) and icon fonts (`font://`) |


## Events

### TabView Events

| Name                   | Description                                           |
|:-----------------------|:------------------------------------------------------|
| `selectedIndexChanged` | Emitted when the `selectedIndex` property is changed. |
| `loaded`               | Emitted when the view is loaded.                      |
| `unloaded`             | Emitted when the view is unloaded.                    |
| `layoutChanged`        | Emitted when the layout bounds of a view changes due to layout processing. |


## API References

| Name     | Type    |
|----------|---------|
| [tns-core-modules/ui/tab-view](http://docs.nativescript.org/api-reference/modules/_ui_tab_view_.html) | `Module` | 
| [TabView](https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview) | `Class` |
| [TabViewItem](https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabviewitem) | `Class` |
| [SelectedIndexChangedEventData](https://docs.nativescript.org/api-reference/interfaces/_ui_tab_view_.selectedindexchangedeventdata) | `Interface` |

## Native Component

| Android               | iOS      |
|:----------------------|:---------|
| [androidx.viewpager.widget.ViewPager](https://developer.android.com/reference/kotlin/androidx/viewpager/widget/ViewPager) | [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) |

