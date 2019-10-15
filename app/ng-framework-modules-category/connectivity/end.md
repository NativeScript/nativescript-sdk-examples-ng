## Methods

| Name     | Type    | Description    |
|----------|---------|----------------|
| `getConnectionType`   | `number` | Gets the type of connection. Returns a value from the `connectivityModule.connectionType` enumeration. To use this method on Android you need to have the **android.permission.ACCESS_NETWORK_STATE** permission added to the **AndroidManifest.xml** file. |
| `startMonitoring(connectionTypeChangedCallback: function)`   | `void` | Starts monitoring the connection type. |
| `stopMonitoring`   | `void` | Stops monitoring the connection type. |

## API References

| Name     | Type    | 
|----------|---------|
| [tns-core-modules/connectivity](https://docs.nativescript.org/api-reference/modules/_connectivity_.html) | `Module` | 
| [connectionTypoe](https://docs.nativescript.org/api-reference/enums/_connectivity_.connectiontype) | `Enum` | 

## Native Component

| Android               | iOS      |
|:----------------------|:---------|
| [CONNECTIVITY_SERVICE (android.content.Context)](https://developer.android.com/reference/android/content/Context) | [SCNetworkReachability](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachability-g7d) | 
