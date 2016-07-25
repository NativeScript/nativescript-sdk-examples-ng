var common = require("./time-picker-common");
var style = require("ui/styling/style");
function getDate(hour, minute) {
    var comps = NSDateComponents.alloc().init();
    comps.hour = hour;
    comps.minute = minute;
    return NSCalendar.currentCalendar().dateFromComponents(comps);
}
function getComponents(date) {
    return NSCalendar.currentCalendar().componentsFromDate(NSCalendarUnit.NSCalendarUnitHour | NSCalendarUnit.NSCalendarUnitMinute, date);
}
global.moduleMerge(common, exports);
var TimePicker = (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        _super.call(this);
        this._ios = new UIDatePicker();
        this._ios.datePickerMode = UIDatePickerMode.UIDatePickerModeTime;
        this._changeHandler = UITimePickerChangeHandlerImpl.initWithOwner(new WeakRef(this));
        this._ios.addTargetActionForControlEvents(this._changeHandler, "valueChanged", UIControlEvents.UIControlEventValueChanged);
        var comps = getComponents(NSDate.date());
        this.hour = comps.hour;
        this.minute = comps.minute;
    }
    Object.defineProperty(TimePicker.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    TimePicker.prototype._setNativeTime = function () {
        if (this.ios) {
            this.ios.date = getDate(this.hour, this.minute);
        }
    };
    TimePicker.prototype._setNativeMinTime = function () {
        if (this.ios) {
            this.ios.minimumDate = getDate(this.minHour, this.minMinute);
        }
    };
    TimePicker.prototype._setNativeMaxTime = function () {
        if (this.ios) {
            this.ios.maximumDate = getDate(this.maxHour, this.maxMinute);
        }
    };
    TimePicker.prototype._setNativeMinuteIntervalTime = function () {
        if (this.ios) {
            this.ios.minuteInterval = this.minuteInterval;
        }
    };
    return TimePicker;
}(common.TimePicker));
exports.TimePicker = TimePicker;
var UITimePickerChangeHandlerImpl = (function (_super) {
    __extends(UITimePickerChangeHandlerImpl, _super);
    function UITimePickerChangeHandlerImpl() {
        _super.apply(this, arguments);
    }
    UITimePickerChangeHandlerImpl.initWithOwner = function (owner) {
        var handler = UITimePickerChangeHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    UITimePickerChangeHandlerImpl.prototype.valueChanged = function (sender) {
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        var comps = getComponents(sender.date);
        var timeChanged = false;
        if (comps.hour !== owner.hour) {
            owner._onPropertyChangedFromNative(common.TimePicker.hourProperty, comps.hour);
            timeChanged = true;
        }
        if (comps.minute !== owner.minute) {
            owner._onPropertyChangedFromNative(common.TimePicker.minuteProperty, comps.minute);
            timeChanged = true;
        }
        if (timeChanged) {
            owner._onPropertyChangedFromNative(common.TimePicker.timeProperty, new Date(0, 0, 0, comps.hour, comps.minute));
        }
    };
    UITimePickerChangeHandlerImpl.ObjCExposedMethods = {
        'valueChanged': { returns: interop.types.void, params: [UIDatePicker] }
    };
    return UITimePickerChangeHandlerImpl;
}(NSObject));
var TimePickerStyler = (function () {
    function TimePickerStyler() {
    }
    TimePickerStyler.setColorProperty = function (view, newValue) {
        var picker = view._nativeView;
        picker.setValueForKey(newValue, "textColor");
    };
    TimePickerStyler.resetColorProperty = function (view, nativeValue) {
        var picker = view._nativeView;
        picker.setValueForKey(nativeValue, "textColor");
    };
    TimePickerStyler.getColorProperty = function (view) {
        var picker = view._nativeView;
        return picker.valueForKey("textColor");
    };
    TimePickerStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(TimePickerStyler.setColorProperty, TimePickerStyler.resetColorProperty, TimePickerStyler.getColorProperty), "TimePicker");
    };
    return TimePickerStyler;
}());
exports.TimePickerStyler = TimePickerStyler;
TimePickerStyler.registerHandlers();
