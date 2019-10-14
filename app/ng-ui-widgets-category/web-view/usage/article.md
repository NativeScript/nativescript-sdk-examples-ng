<snippet id='web-events-html'/>
<snippet id='webview-ts-events'/>

In the above samples, we are setting up `loadStarted` and `loadFinished` events. Both events will be emitted when there is a change the source for the `WebView` component (change the URL or load local HTML file). The `loadStarted` event will be executed when the WebView source start loading and `loadFinished` will be fired when the source is already loaded. The events will return info of type `LoadEventData`.