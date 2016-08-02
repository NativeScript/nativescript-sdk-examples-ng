Gestures, such as tap, slide and pinch, allow users to interact with your app by manipulating UI elements on the screen.

In NativeScript, View—the base class for all NativeScript UI elements—has on and off methods 
that let you subscribe or unsubscribe to all events and gestures recognized by the UI element.

As the first parameter, you pass an on or off method and the type of gesture you want to track. 
The second parameter is a function that is called each time the specified gesture is recognized. 
The function arguments contain additional information about the gesture, if applicable.

List of supported gestures in NativeScript:
 - Tap
 - Double Tap
 - Long Press
 - Swipe
 - Pan
 - Pinch
 - Rotation
 - Touch