

## Properties

| Name     | Type    | Description    |
|----------|---------|----------------|
| `items`   | `Array<any>` \| `ItemsSource` | Gets or set the items collection of the `ListView`. The items property can be set to an array or an object defining length and getItem(index) method. |
| `itemTemplateSelector` | `function` | A function that returns the appropriate ket template based on the data item. |
| `itemTemplates` | `Array<KeyedTemplate>` | Gets or set the list of item templates for the item template selector. |
| `separatorColor` | `string` \| `Color` | Gets or set the items separator line color of the ListView. |
| `rowHeight` | `Length` | Gets or set row height of the ListView. |
| `iosEstimatedRowHeight` | `Length` | Gets or set the estimated height of rows in the ListView. Default value: **44px** |

## Methods

| `refresh()` |  Forces the ListView to reload all its items. |
| `scrollToIndex(index: number)` | Scrolls the specified item with index into view. |
| `scrollToIndexAnimated(index: number)` | Scrolls the specified item with index into view with animation. |
| `isItemAtIndexVisible(index: number): boolean` | Checks if specified item with index is visible. |

## Events

| Name     | Description    |
|----------|----------------|
| `itemLoading` | Emitted when a `View` for the data at the specified index should be created. |
| `itemTap`    | Emitted when a ListView item is tapped.|
| `loadMoreItems` | Emitted when the ListView is scrolled so that its last item is visible. |

## API References

| Name     | Type    | 
|----------|---------|
| [tns-core-modules/ui/list-view](http://docs.nativescript.org/api-reference/modules/_ui_list_view_) | `Module` | 
| [ListView](https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview) | `Class` | 
| [ItemEventData](https://docs.nativescript.org/api-reference/interfaces/_ui_list_view_.itemeventdata) | `Interface` |
| [ItemsSource](https://docs.nativescript.org/api-reference/interfaces/_ui_list_view_.itemssource) | `Interface` |
| [KeyedTemplate](https://docs.nativescript.org/api-reference/interfaces/_ui_core_view_.keyedtemplate) | `Interface` |

## Native Component

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.ListView](http://developer.android.com/reference/android/widget/ListView.html) | [UITableView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) |


