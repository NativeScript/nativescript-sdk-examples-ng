
To style the `ActionBar`, you can use only `background-color` and `color` properties. Alternatively, you can use `nativescript-theme-core` and use the default styles for each different theme. The `icon` property of `ActionItem` can use Icon Fonts with the `font://` prefix. By setting up this prefix, a new image will be generated, which will be set as an ActionItem's `icon` resource. While using this functionality, we need to specify the `font-size`, which will calculate the size of the generated image base on the device's dpi.

<snippet id='actionbar-icon-fonts-html'/>

> **Note:** In iOS, the `color` property affects the color of the title and the action items. In Android, the `color` property affects only the title text. However, you can set the default color of the text in the action items by adding an `actionMenuTextColor` item in the Android theme (inside `App_Resources\Android\values\styles.xml`).