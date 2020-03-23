> **Note:** - The integration with `nativescript-theme` and the support for custom CSS is currently under development and is on its way.

The main styling options are introduced with three specific properties that should be set on the `TabStrip` component.

- `selectedItemnColor`: Sets the text color of the selected tab strip item. Also sets the color of the tab strip icon when the icon is an icon font (`font://`).
- `unSelectedItemColor`: Sets the text color of the unselected tab strip items. Also sets the color of the tab strip icon when the icon is an icon font (`font://`).
- `highlightColor`: Sets the color of the underline for the selected tab strip item.

Those properties can be set dynamically, inline and via CSS.

<snippet id='tabs-theming-css-ng'/>

> **Note:** Currently, we can set only the `backgroundColor`, `color`, `fontFamily`, `fontSize`, `fontStyle`, `fontWeight` and `textTransform` styling properties to the `Label` and `Image` components inside the TabStripItem. More about the usage of those properties can be found in the [Styling]({%slug styling%}#supported-css-properties) article.

> **Note:** On iOS, the TabStripItems can not be stylied individually.
