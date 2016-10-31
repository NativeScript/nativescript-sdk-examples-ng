## Flex wrap

By default, flex items will all try to fit onto one line. 
You can change that and allow the items to wrap as needed with this property. 
Direction also plays a role here, determining the direction new lines are stacked in.

Child related properties
 - flex-wrap-before: Non-spec property controlling item wrapping, setting to true on flexbox child will force it to wrap on a new line

### wrap

multi-line / left to right in ltr; right to left in rtl
<snippet id='flexbox-wrap-html'/>

### wrap-reverse

multi-line / right to left in ltr; left to right in rtl
<snippet id='flexbox-wrap-reverse-html'/>

## Justify Content

This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, 
or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

## flex-end 

Items are packed toward end line
<snippet id='flexbox-justify-end-html'/>

### space-between

Items are evenly distributed in the line; first item is on the start line, last item on the end line
<snippet id='flexbox-justify-space-between-html'/>

### space-around

Items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. 
The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
<snippet id='flexbox-justify-space-around-html'/>

### Multiple settings example
<snippet id='flexbox-multiple-settings-html'/>

**API Reference for** [FlexboxLayout Module](http://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_.html)
**API Reference for** [FlexboxLayout Class](http://docs.nativescript.org/api-reference/classes/_ui_layouts_flexbox_layout_.flexboxlayout.html)


