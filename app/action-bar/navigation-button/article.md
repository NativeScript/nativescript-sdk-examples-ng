The ActionBar has a navigation button (a.k.a back button) that is used for going around the application. 

It can be set through the NavigationButton element:
<snippet id='action-bar-navigation-button-html'/>

Setting text for the navigation button is not supported in Android. You can use icon or android.systemIcon to set the image in Android. Setting ios.systemIcon for the navigation button is not supported in iOS.

You can also modify the action executed on tapping the NavigationButton button and set the logic inside its tap event. For example, if you require it to go to the previous page, you can use the backToPreviousPage() method of the RouterExtensions class:
<snippet id='navigation-button-back-code'/>