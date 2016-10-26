The ActionBar consists of one or more action items that can be declared in markup as follows:

<snippet id='action-bar-action-items-html'/>

The `position` option is platform-specific. The available values are as follows:

* Android - `actionBar`, `actionBarIfRoom` and `popup`. The default is `actionBar`.
* iOS - `left` and `right`. The default is `left`.

An ActionItem can be easily customized by placing whichever element you need directly inside.
<snippet id='action-bar-custom-action-item-html'/>

Furthermore, an item can have platform-specific icons that can be set with the corresponding `systemIcon` value. For example:
<snippet id='action-bar-platform-specific-icons-html'/>

### iOS

Set `ios.systemIcon` to a number representing the iOS system item to be displayed. Use this property instead of ActionItem.icon if you want to display a built-in iOS system icon.

> **Note**: `systemIcon` is not supported on NavigationButton components in iOS.

The value you pass `ios.systemIcon` should be a number from the UIBarButtonSystemItem enumeration:

* 0: Done
* 1: Cancel
* 2: Edit
* 3: Save
* 4: Add
* 5: FlexibleSpace
* 6: FixedSpace
* 7: Compose
* 8: Reply
* 9: Action
* 10: Organize
* 11: Bookmarks
* 12: Search
* 13: Refresh
* 14: Stop
* 15: Camera
* 16: Trash
* 17: Play
* 18: Pause
* 19: Rewind
* 20: FastForward
* 21: Undo
* 22: Redo
* 23: PageCurl

### Android

You can set the `android.systemIcon` attribute to the name of the system drawable resource to be displayed. Use this property instead of ActionItem.icon if you want to dispaly a built-in Android system icon. The value should be a string such as `ic_menu_search` if you want to display the built-in Android Menu Search icon for example. For a full list of Android drawable names, please visit http://androiddrawables.com.
