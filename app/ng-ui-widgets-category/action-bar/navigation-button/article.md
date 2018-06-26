The ActionBar has a navigation button (a.k.a back button) that is used for moving around the application. 

It can be set through the NavigationButton element.
<snippet id='action-bar-navigation-button-html'/>

Setting text for the navigation button is not supported on Android. You can, however, use the `icon` or `android.systemIcon` attributes to set the image of the navigation button on Android.

Setting the navigation button’s `ios.systemIcon` attribute is not supported on iOS.

You can modify the action executed when tapping the NavigationButton button with the button’s `tap` event. For example, if you with the button to return the user to the previous page, you can use the `backToPreviousPage()` method of the `RouterExtensions` class:
<snippet id='navigation-button-back-code'/>

> iOS Specifics: The default text of the button is the title of the previous page; you can change it by setting the `text` property as shown in the example [Setting the Text Title](#setting-the-title-text).
In iOS, the back button is used explicitly for navigation. It navigates to the previous page and you cannot handle the `tap` event to override this behavior. If you want to place a button on the left side of the `ActionBar` and handle the tap event (e.g., show slide-out), you can use `ActionItem` with `ios.position="left"`.

> Android Specifics: In Android, you cannot set text inside the navigation button. You can use the `icon` property to set an image (e.g., `~\images\nav-image.png` or `res:\\ic_nav`). You can use `android.systemIcon` to set one of the system icons available in Android. In this case, there is no default behaviour for NavigationButton's `tap` event, and we should define manually the callback function, which will be executed. 
