### Icon Fonts in Image

Using the `font://` prefix, you can load a resource image while setting up an icon code provided by an icon font. By setting up this prefix, a new image will be generated, which will be set as an ImageView resource. While using this functionality, we need to specify the `font-size`, which will calculate the size of the generated image base on the device's dpi. For further configuration on size of the displayed image, we can config the view's `width` and `height` properties.

<snippet id='image-icon-fonts-html'/>
<snippet id='image-icon-fonts-css-ng'/>
