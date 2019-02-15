### Application Module Android Specific Properties

The application module provides a number of Android specific properties to access the Android app, context and activities.
<snippet id='app-class-properties'/>

### Using the Android Application Context

In the extended example below, the Android context is used to get the absolute path to Files directory.
We are accessing methods from the Android SDK (like `getCacheDir` and `getFilesDir`)
<snippet id='app-android-dirs-code'/>

### Registering a Broadcast Receiver (Android)

NativeScript can send/receive messages and system information though broadcast receivers.
More on broadcast receivers in Android [here](https://developer.android.com/guide/components/broadcasts).
<snippet id='app-android-broadcast-code'/>

### Unregistering a Broadcast Receiver (Android)
<snippet id='app-android-broadcast-unregister-code'/>