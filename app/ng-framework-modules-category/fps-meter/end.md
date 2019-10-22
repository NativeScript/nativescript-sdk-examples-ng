## Methods

| Name     | Type    | Description    |
|----------|---------|----------------|
| `addCallback(callback: function)`   | `number` | Adds a callback function to be called each time FPS data is due to be reported. Returns an unique id which can be used to remove this callback later. |
| `removeCallback(id: number)`   | `any` | Removes the callback with the specified id. |
| `running`   | `boolean` | Returns a valid indicating whether the frames-per-second meter is currently running. |
| `start`   | `void` | Starts the frames-per-second meter. |
| `stop`   | `void` | Stops the frames-per-second meter. |

## API References

| Name     | Type    | 
|----------|---------|
| [tns-core-modules/fps-meter](https://docs.nativescript.org/api-reference/modules/_fps_meter_.html) | `Module` | 

## Native Component

| Android               | iOS      |
|:----------------------|:---------|
| [android.view.Choreographer](https://developer.android.com/reference/android/view/Choreographer) | [CADisplayLink](https://developer.apple.com/documentation/quartzcore/cadisplaylink) | 
