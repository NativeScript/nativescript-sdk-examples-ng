The `ActionBar` provides a `title` property and can be extended by using one or more `ActionItem` components and a single `NavigationButton`.

<snippet id='action-bar-basic-usage'/>
<snippet id='action-bar-basic-usage-ts'/>

### ActionItem

The `ActionItem` components are supporting the platform-specific `position` and `systemIcon` for iOS and Android.

```HTML
<ActionBar title="Action Items">
    <ActionItem (tap)="onShare()" ios.systemIcon="9" ios.position="left"
                android.systemIcon="ic_menu_share" android.position="actionBar">
    </ActionItem>
    <ActionItem text="delete" (tap)="onDelete()"
                ios.systemIcon="16" ios.position="right" android.position="popup">
    </ActionItem>
</ActionBar>
```

- **Android** sets position via **`android.position`**:

    * **`actionBar`**: Puts the item in the `ActionBar`. Action item can be rendered both as text or icon.
    * **`popup`**: Puts the item in the options menu. Items will be rendered as text.
    * **`actionBarIfRoom`**: Puts the item in the `ActionBar` if there is room for it. Otherwise, puts it in the options menu.

- **iOS** sets position via **`ios.position`**:

    * **`left`**: Puts the item on the left side of the `ActionBar`.
    * **`right`**: Puts the item on the right side of the `ActionBar`.

### NavigationButton

The `NavigationButton` component is a common abstraction over the iOS back button and the Android navigation button.

> **iOS Specifics:** The default text of the navigation button is the title of the **previous** page. In iOS, the back button is used explicitly for navigation. It navigates to the previous page and you can't handle the tap event to override this behavior. If you want to place a button on the left side of the ActionBar and handle the tap event (e.g., show slide-out), you can use ActionItem with `ios.position="left"`.

> **Android Specifics:** In Android, you can't set text inside the navigation button. You can use the icon property to set an image (e.g., `~\images\nav-image.png` or `res:\\ic_nav`). You can use `android.systemIcon` to set one of the system icons available in Android. In this case, there is no default behaviour for `NavigationButton` tap event, and we should define manually the callback function, which will be executed.

