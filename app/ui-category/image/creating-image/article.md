### Create Image via HTML
The `src` property can accept local and remote paths. 
It can also accept paths and `ImageSource` instances bind via code behind.
<snippet id='creating-image-html'/>

### Create Image dynamically via TypeScript
<snippet id='creating-image-code'/>

### Background Image via CSS
Use property `background-image` to apply image via CSS.
<snippet id='css-load-background'/>
<snippet id='load-image-css'/>

### Image with ImageSource from Base64 String
Convert an image to and from Base64 encoded string using `toBase64String` and `fromBase64` methods.
Then create an `ImageSource` instance and bind it to the `src` property of `Image`.
<snippet id='creating-img-from-base'/>
<snippet id='load-image-base-html'/>

### Setting image stretching

The stretch functionality allows us to describe how content is resized to fill its allocated space.
The available options for this property are as follow:

* `none` - the image preserves its original size
* `fill` - the image is resized to fill the destination dimensions. In this case, the aspect ratio is not preserved.
* `aspectFit` - the image is resized to fit the destination dimensions while it preserves its native aspect ratio. If the aspect ratio of the destination rectangle differs from the image, the image will be clipped to fit in the destination.
* `aspectFill` - the image is resized to fill in the destination dimensions while it preserves its native aspect ratio.

The default value for this property is `aspectFit`.

<snippet id='image-stretch'/>

In the above sample code, we set up the Image `stretch` property to `none`. This means that the image will be shown on the screen with its original size.
