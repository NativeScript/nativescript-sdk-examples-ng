### Flexbox (order and shrink)
This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. 
It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. 
If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).

<snippet id='flexbox-grow-html'/>

### Flex order
By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

<snippet id='flexbox-order-html'/>

### Flex shrink
This defines the ability for a flex item to shrink if necessary

<snippet id='flexbox-shrink-html'/>

**API Reference for** [FlexboxLayout Module](http://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_.html)
**API Reference for** [FlexboxLayout Class](http://docs.nativescript.org/api-reference/classes/_ui_layouts_flexbox_layout_.flexboxlayout.html)
