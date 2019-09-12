
### Item Templates

Use `itemTemplateSelector` property to create multiple item templates. The `itemTemplateSelector` accepts a function that returns a value for `nsTemplateKey`.

<snippet id='listview-customize-html'/>
<snippet id='listview-customize-code'/>


### Custom Component Template

Common scenario in Angular is to reuse given component via its selector name (e.g., `sdk-child-component`). The below scenario demonstrates how to pass data from the parent `ListView` to its children components (which are used as template).

<snippet id='listview-customize-html'/>
<snippet id='listview-customize-code'/>