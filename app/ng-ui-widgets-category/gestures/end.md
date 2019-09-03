## Events

Each interactive view in NativeScript can access the gesture events it will raise on user interaction.

| Name     | Description    |
|----------|----------------|
| `tap`    | Emitted when the view is tapped.|
| `doubleTap`    | Emitted when the view is double tapped.|
| `touch`    | Emitted when the view is touched. Returns action state from [`TouchGestureEventData`](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.touchgestureeventdata) |
| `longPress`    | Emitted when the view is tapped and hold. Returns `state`. |
| `pan`    | Emitted when the view is paned. Rewturns `deltaX` and `deltaY` coordinates as numbers. |
| `pinch`    | Emitted when the view is pinched. Returns `scale` |
| `swipe`    | Emitted when the view is swiped left/right. Returns `direction` as [`SwipeDirection`](https://docs.nativescript.org/api-reference/enums/_ui_gestures_.swipedirection) |

## API References

| Name     | Type    | API Reference Link |
|----------|---------|--------------------|
| `tns-core-modules/ui/gestures` | `Module` | https://docs.nativescript.org/api-reference/modules/_ui_gestures_ |
| `GestureTypes` | `enum` | https://docs.nativescript.org/api-reference/enums/_ui_gestures_.gesturetypes |
| `GestureStateTypes` | `enum` | https://docs.nativescript.org/api-reference/modules/_ui_gestures_ |
| `SwipeDirection` | `enum` | https://docs.nativescript.org/api-reference/modules/_ui_gestures_ |
| `GestureEventData` | `interface` | https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.gestureeventdata |
| `GestureEventDataWithState` | `interface` | https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.gestureeventdatawithstate |
| `PanGestureEventData` | `interface` | https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.pangestureeventdata |
| `PinchGestureEventData` | `interface` | https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.pinchgestureeventdata |
| `RotationGestureEventData` | `interface` | https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.rotationgestureeventdata |
| `SwipeGestureEventData` | `interface` | https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.swipegestureeventdata |
| `TouchGestureEventData` | `interface` | https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.touchgestureeventdata |
| `Pointer` | `interface` | https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.pointer |

## Native Component

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Button](http://developer.android.com/reference/android/widget/Button.html) | [UIButton](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) | 
