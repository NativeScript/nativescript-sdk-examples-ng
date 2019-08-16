
The example demonstrates, how to use setup the  `font-family` property via CSS and how to define the needed icons via XML.

<snippet id='icon-font-html-def'/>
<snippet id='icon-font-css-class-def'/>

With NativeScript 6 and above, we can use icon fonts with `Image` elements. For that purpose the `font://` prefix is needed to set the icon font code.

<snippet id='icon-font-html-images'/>
<snippet id='icon-font-css-class-def'/>

>> **Note:** Images have specific stretch options (`none`, `aspectFit`, `aspectFill`). At the same time the icon fonts are having `font-size` which can control the size of our font. If you want to set the size of your icon through the `font-size` property then set `stretch` property to `none`. Any other values of the stretch property (including the default one) will cause the icon to be streched by measuring the image (or if there is no sizes set, the parent layout in whcih the image is nested).
