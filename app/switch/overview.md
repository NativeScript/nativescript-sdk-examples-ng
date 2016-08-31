Switch component is component that has two states - `true` and `false`. 
The default state of the component is false, however it could be change for the purpose of the app via setting  `checked` property to `true`.
To handle state change event you could use `checkedChange` property, which would notify the app, when the value has been changed.
Another useful feature of the component is `isEnable` property, which gives the functionality to make the component unactive.

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Switch](http://developer.android.com/reference/android/widget/Switch.html) | [UISwitch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISwitch_Class/) |