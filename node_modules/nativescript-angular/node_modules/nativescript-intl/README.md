Welcome to the `nativescript-intl` plugin for NativeScript framework 

# Prerequisites

- installed [NativeScript](https://github.com/NativeScript/NativeScript)
- installed [NativeScript-CLI](https://github.com/NativeScript/nativescript-cli)

# Install `nativescript-intl` plugin.

Navigate to project folder and run `NativeScript-CLI` command `tns plugin add nativescript-intl`.

This plugin provides similar to [Intl.js](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl) API for date, time and number formatting on a mobile device (Android and iOS).

## How to use

```JavaScript
var intl = require("nativescript-intl");
var dateFormat = new intl.DateTimeFormat('en-US', {'year': 'numeric', 'month': 'short', 'day': 'numeric'}).format(new Date(2016, 2, 23));
var numberFormat = new intl.NumberFormat('en-US', {'style': 'currency', 'currency': 'USD', 'currencyDisplay': 'symbol'}).format(123456.789);

console.log("dateFormat: " + dateFormat);
console.log("numberFormat: " + numberFormat);
// prints Mar 23, 2016
// $123456.79
```

Since localization formatting is not exactly same on Android, iOS and [Intl.js](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl) there is another option to use this API.

## Custom pattern

```JavaScript
var intl = require("nativescript-intl");
var dateFormat = new intl.DateTimeFormat(null, null, 'y MMMM d, EEEE HH:mm:ss').format(new Date(2016, 2, 23, 12, 35, 40));
var numberFormat = new intl.NumberFormat('en-US', {'style': 'currency', 'currency': 'USD', 'currencyDisplay': 'symbol'}, '#,##0.00 ¤').format(123456.789);

console.log("dateFormat: " + dateFormat);
console.log("numberFormat: " + numberFormat);
// prints 2016 March 23, Wednesday 2016 12:35:40
// 123,456.79 $
```

> Omitting locale will use the current locale setting on device.

> Keep in mind that ICU versions differ accross device OS versions, so this plugin could produce different results on a different API level (Android) and OS version (iOS).
