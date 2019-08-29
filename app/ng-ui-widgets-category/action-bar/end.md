
## Properties

### ActionBar Properties

| Name      | Type     | Description    |
|:----------|:---------|:---------------|
| `title`   | `string` | Gets or sets the action bar title. |
| `titleView` | [`View`](https://docs.nativescript.org/api-reference/classes/_ui_core_view_.view) | Gets or sets the title view. When set - replaces the title with a custom view. |

### ActionItem 
| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `text`   | `string` | Gets or sets the text of the action item. |
| `icon`   | `string` | Gets or sets the icon of the action item. Supports local images (`~/<image-path>`), resources (`res://`) and icon fonts (`fonts://`)|
| `ios.position`   | `left` , `right` | Sets the position of the item (default value is `left`). |
| `android.position`   |  `actionBar`, `popup` , `actionBarIfRoom` | Sets the position of the item (default value is `actionBar`). |
| `ios.systemIcon`   | `number` | **iOS only** Sets the icon of the action item while using [`UIBarButtonSystemIcon`](https://developer.apple.com/documentation/uikit/uibarbuttonsystemitem) enumeration. |
| `android.systemIcon`   | `string` | **Android only** Sets a path to a resource icon ([list of system drawables](https://developer.android.com/reference/android/R.drawable)) |


### NavigationButton Properties

| Name     | Type     | Description    |
|:---------|:---------|:---------------|
| `text`   | `string` | Gets or sets the text of the action item. |
| `icon`   | `string` | Gets or sets the icon of the action item. |

## Events

| Name        | Description    |
|:------------|:---------------|
| `loaded`    | Emitted when the ActionBar is loaded.|

## API References

| Name               | Type     | API Reference Link |
|:-------------------|:---------|:-------------------|
| `ActionBar`        | `Module` | https://docs.nativescript.org/api-reference/modules/_ui_action_bar_ |
| `ActionBar`        | `Class`  | https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar |
| `ActionItem`       | `Class`  | https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem |
| `ActionItems`      | `Class`  | https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitems |
| `NavigationButton` | `Class`  | https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton |

## Native Component

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.Toolbar](https://developer.android.com/reference/android/widget/Toolbar.html) | [UIView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/) | 


## See Also

[Detailed documentation article about `ActionBar` functionalities.](https://docs.nativescript.org/angular/ui/action-bar)