While bitmap images are great, they present challenges in designing mobile applications. Images increase the size of the application if they are embedded in it. If not, they require additional http requests to be fetched. Images consume memory. Furthermore, bitmap images do not scale well. If scaled up, they lose quality. If scaled down, they waste space. On the other hand, fonts scale well, do not require additional http requests for each glyph and do not increase memory usage significantly. Icon fonts contain icons instead of alphabet characters and can be used instead of images in mobile applications.

## Using Icon Fonts in NativeScript

1. Choose or generate an icon font that best matches your needs. Two popular icon fonts are [IcoMoon](https://icomoon.io/) and [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself).
2. Once you have downloaded the icon font to your machine, locate the [TrueType](https://en.wikipedia.org/wiki/TrueType) font file with extension **.ttf**.
3. In your root application folder (This is the **app** folder for NativeScript Core, and the **src** folder for Angular 6+), create a folder called **fonts** and place the **.ttf** there.
4. Follow the instructions on the icon font webpage to determine the hex codes of each font glyph, i.e., icon. Add a **Label** component to your NativeScript app and bind the Label's **text** property to a one-letter string generated from the character code of the icon you want to show, i.e., `String.fromCharCode(0xe903)`.

> **Note:** While this documentation article is focused on icon fonts, the above workflow is a hundred percent applicable for both **text fonts** and **icon fonts** (except that with text fonts step 4 as they don't include icons but only plain text).

## Platform Specific Font Recognition

There is a conceptual difference in how **.ttf** fonts are recognized on iOS and Android. On Android, the font is recognized by its **file name** while on iOS it is recognized by its **font name**. This means that fonts that are created with a font name which is different from the file name has to be registered with both names in your CSS rule.

```CSS
.fa-brands {
    font-family: "Font Awesome 5 Brands", "fa-brands-400";
}
```

In the above example, the `fa-brands-400.ttf` (as downloaded from the FontAwesome site) has a font name `Font Awesome 5 Brands`. With the above CSS, the font is recognized on both iOS (by the font name `Font Awesome 5 Brands`) and Android (by the file name `fa-brands-400`).

> **Note:** There are specific scenarios where the creators of the fonts might have released two differently named `ttf` files but with the same **font** name (see the example below).

|file name    | font name     |
|-----------|---------------|
|**fa-solid-900.ttf** | Font Awesome 5 Free
|**fa-regular-400.ttf** | Font Awesome 5 Free

Notice that in the above example the **file** names are different, but the registered **font** name is the same (use the **Font Book** application on Mac or the **Control Panel Fonts** section on Windows to see the actual font name). While this is no issue on Android, it renders the second font unusable on iOS. To handle similar cases additional CSS font properties, such as for example `font-weight`, must be added.

```CSS
/* 
    File name: fa-regular-400.ttf 
    Font name: Font Awesome 5 Free
*/
.far {
    font-family: "Font Awesome 5 Free", "fa-regular-400";
    font-weight: 400;
}

/* 
    File name: fa-solid-900.ttf 
    Font name: Font Awesome 5 Free
*/
.fas {
    font-family: "Font Awesome 5 Free", "fa-solid-900";
    font-weight: 900;
}
```



