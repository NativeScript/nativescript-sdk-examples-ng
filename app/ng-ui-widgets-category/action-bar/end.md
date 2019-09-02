
## Properties

### ActionBar Properties

| Name      | Type     | Description    |
|:----------|:---------|:---------------|
| `title`   | `string` | Gets or sets the action bar title. |
| `titleView` | [View](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view) | Gets or sets the title view. When set - replaces the title with a custom view. |

### ActionItem Properties
| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `text`   | `string` | Gets or sets the text of the action item. |
| `icon`   | `string` | Gets or sets the icon of the action item. Supports local images (`~/`), resources (`res://`) and icon fonts (`fonts://`)|
| `ios.position`   | `enum`: _"left"_, _"right"_ | Sets the position of the item (default value is `left`). |
| `android.position`   | `enum`: _"actionBar"_, _"popup"_, _"actionBarIfRoom"_ | Sets the position of the item (default value is `actionBar`). |
| `ios.systemIcon`   | `number` | **iOS only** Sets the icon of the action item while using [UIBarButtonSystemIcon](https://developer.apple.com/documentation/uikit/uibarbuttonsystemitem) enumeration. |
| `android.systemIcon`   | `string` | **Android only** Sets a path to a resource icon ( see the [list of Android system drawables](https://developer.android.com/reference/android/R.drawable)) |


### NavigationButton Properties

| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `text`   | `string` | Gets or sets the text of the action item. |
| `icon`   | `string` | Gets or sets the icon of the action item. |

## Events

| Name        | Description    |
|:------------|:---------------|
| `loaded`               | Emitted when the view is loaded.                 |
| `unloaded`             | Emitted when the view is unloaded.               |
| `layoutChanged`        | Emitted when the layout bounds of a view changes due to layout processing. |

## API References

| Name               | Type     | 
|:-------------------|:---------|
| [ActionBar](https://docs.nativescript.org/api-reference/modules/_ui_action_bar_)                 | `Module` | 
| [ActionBar](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar)       | `Class`  | 
| [ActionItem](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem )    | `Class`  | 
| [ActionItems](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitems)   | `Class`  |
| [NavigationButton](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton) | `Class`  |

## Native Component

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.Toolbar](https://developer.android.com/reference/android/widget/Toolbar.html) | [UIView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/) | 


## See Also

[Detailed documentation article about `ActionBar` functionalities.](https://docs.nativescript.org/angular/ui/action-bar)