The example shows the how to use the events supported by the WebView component and its `reload` method.

<snippet id='web-events-html'/>

<snippet id='webview-ts-events'/>

In the sample code, we set up event `loadStarted` and `loadFinished` events. Both events will be fired when we change the source for the WebView component(change the URL or load local HTML file). The `loadStarted` event will be executed when the WebView source start loading and `loadFinished` will be fired when the source is already loaded. The events will return info about the `eventName`, `navigationType` and `url`, which we are trying to load. If an error appears on some of the steps of source load, we will receive the corresponding error with the `error` property in `loadStarted` or `loadFinished` events.

In the provided sample is demonstrated also how to reload the currently loaded source via WebView's `reload` method.