Add the `test.html`for the WebView exmaple via the following line in `webpack.config.js`

```JS
new CopyWebpackPlugin([
    { from: { glob: "ng-ui-widgets-category/web-view/web-view-html/*.html"} }, // HERE
    { from: { glob: "fonts/**" } },
    { from: { glob: "**/*.jpg" } },
    { from: { glob: "**/*.png" } },
]
```