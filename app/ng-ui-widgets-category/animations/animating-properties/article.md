NativeScript allows us to animate the properties of the element we want. 
Once the parameters of the animate method are set (e.g. `scale`, `rotate`, `duration`, etc.), the properties will be animated.

NativeScript lets you animate the following properties:

`opacity`
`backgroundColor`
`translateX` and `translateY`
`scaleX` and `scaleY`
`rotate`
`width` and `height`

In every animation, you can control the following properties:

`duration`: The length of the animation.
`delay`: The amount of time to delay starting the animation.
`iterations`: Specifies how many times the animation should be played.
`curve`: The speed curve of the animation. Available options are defined below.

Property values:  

| JavaScript Property   | Value Description             |
|:----------------------|:------------------------------|
| `backgroundColor`     | Accepts hex or `Color` value. |
| `curve`               | Timing funciton that uses the `AnimationCurve` enumeration. |
| `delay`               | Delay the animation start in milliseconds. |
| `duration`            | Duration of animation in milliseconds. |
| `iterations`          | Number of times to repeat the animation. |
| `opacity`             | Number value (0 - 1 where 0 is full opacity). |
| `rotate`              | Number value for degrees (0 - 360 degrees). |
| `scale`               | Object value `{ x:1, y:2 }` (1 = Original scale). |
| `translate`           | Object value `{ x:100, y:200 }` (Translate by given DIPs). |
| `width`               | Number value. |
| `height`               | Number value. |


A simple example is animating the opacity and background of a label.
<snippet id='animation-animating-properties-code'/>