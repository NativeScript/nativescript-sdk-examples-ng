var platformNames;
(function (platformNames) {
    platformNames.android = "Android";
    platformNames.ios = "iOS";
})(platformNames = exports.platformNames || (exports.platformNames = {}));
var Device = (function () {
    function Device() {
    }
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () {
            return "Apple";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "os", {
        get: function () {
            return platformNames.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "osVersion", {
        get: function () {
            if (!this._osVersion) {
                this._osVersion = UIDevice.currentDevice().systemVersion;
            }
            return this._osVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () {
            if (!this._model) {
                this._model = UIDevice.currentDevice().model;
            }
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "sdkVersion", {
        get: function () {
            if (!this._sdkVersion) {
                this._sdkVersion = UIDevice.currentDevice().systemVersion;
            }
            return this._sdkVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "deviceType", {
        get: function () {
            if (!this._deviceType) {
                var enums = require("ui/enums");
                if (UIDevice.currentDevice().userInterfaceIdiom === UIUserInterfaceIdiom.UIUserInterfaceIdiomPhone) {
                    this._deviceType = enums.DeviceType.Phone;
                }
                else {
                    this._deviceType = enums.DeviceType.Tablet;
                }
            }
            return this._deviceType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () {
            var userDefaults = NSUserDefaults.standardUserDefaults();
            var uuid_key = "TNSUUID";
            var app_uuid = userDefaults.stringForKey(uuid_key);
            if (!app_uuid) {
                var uuidRef = CFUUIDCreate(kCFAllocatorDefault);
                app_uuid = CFUUIDCreateString(kCFAllocatorDefault, uuidRef);
                userDefaults.setObjectForKey(app_uuid, uuid_key);
                userDefaults.synchronize();
            }
            return app_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "language", {
        get: function () {
            if (!this._language) {
                var languages = NSLocale.preferredLanguages();
                this._language = languages[0];
            }
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "region", {
        get: function () {
            if (!this._region) {
                this._region = NSLocale.currentLocale().objectForKey(NSLocaleCountryCode);
            }
            return this._region;
        },
        enumerable: true,
        configurable: true
    });
    return Device;
}());
var MainScreen = (function () {
    function MainScreen() {
    }
    Object.defineProperty(MainScreen.prototype, "screen", {
        get: function () {
            if (!this._screen) {
                this._screen = UIScreen.mainScreen();
            }
            return this._screen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "widthPixels", {
        get: function () {
            return this.widthDIPs * this.scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "heightPixels", {
        get: function () {
            return this.heightDIPs * this.scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "scale", {
        get: function () {
            return this.screen.scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "widthDIPs", {
        get: function () {
            return this.screen.bounds.size.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "heightDIPs", {
        get: function () {
            return this.screen.bounds.size.height;
        },
        enumerable: true,
        configurable: true
    });
    return MainScreen;
}());
exports.device = new Device();
var screen;
(function (screen) {
    screen.mainScreen = new MainScreen();
})(screen = exports.screen || (exports.screen = {}));
exports.isIOS = true;
