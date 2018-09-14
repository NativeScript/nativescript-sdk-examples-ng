Add the following `test.html`for the WebView exmaple via the ollowing line in `webpack.config.js`

```JS
new CopyWebpackPlugin([
    { from: "ng-ui-widgets-category/web-view/web-view-html/*.html" }, // Add this line
    { from: "fonts/**" },
    { from: "**/*.jpg" },
    { from: "**/*.png" },
]
```