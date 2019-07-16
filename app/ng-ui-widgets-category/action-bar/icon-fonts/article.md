### Icon Fonts in ActionBar

Using the `font://` prefix, you can load a resource in the ActionItem while setting up an icon code provided by an icon font. By setting up this prefix, a new image will be generated, which will be set as an ActionItem's `icon` resource. While using this functionality, we need to specify the `font-size`, which will calculate the size of the generated image base on the device's dpi.

<snippet id='actionbar-icon-fonts-html'/>
<snippet id='actionbar-icon-fonts-css-ng'/>