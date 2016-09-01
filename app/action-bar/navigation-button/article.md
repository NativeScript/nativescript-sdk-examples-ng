The ActionBar has a navigation button (a.k.a back button) that is used for moving around the application. 

It can be set through the NavigationButton element.
<snippet id='action-bar-navigation-button-html'/>

Setting text for the navigation button is not supported on Android. You can, however, use the `icon` or `android.systemIcon` attributes to set the image of the navigation button on Android.

Setting the navigation button’s `ios.systemIcon` attribute is not supported on iOS.

You can modify the action executed when tapping the NavigationButton button with the button’s `tap` event. For example, if you with the button to return the user to the previous page, you can use the `backToPreviousPage()` method of the `RouterExtensions` class:
<snippet id='navigation-button-back-code'/>