### Create Image via HTML
The `src` property can accpets local and remote paths. 
It can also accept paths and `ImageSource` instances bind via code behind.
<snippet id='creating-image-html'/>

### Create Image dynamically via TypeScript
<snippet id='creating-image-code'/>

### Background Image via CSS
Use property `background-image` to apply imags via CSS.
<snippet id='css-load-background'/>
<snippet id='load-image-css'/>

### Image with ImageSource from Base64 String
Convert an image to and from Base64 encoded string using `toBase64String` and `fromBase64` methods.
Then create an `ImageSource` instance and bind it to the `src` property of `Image`.
<snippet id='creating-img-from-base'/>
<snippet id='load-image-base-html'/>