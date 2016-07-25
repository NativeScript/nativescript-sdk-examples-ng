"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./nativescript-intl-common");
var DateTimeFormat = (function (_super) {
    __extends(DateTimeFormat, _super);
    function DateTimeFormat() {
        _super.apply(this, arguments);
    }
    DateTimeFormat.prototype.getNativePattern = function (patternDefinition, locale) {
        var dateFormatter = NSDateFormatter.new();
        if (locale) {
            dateFormatter.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        if (patternDefinition.date) {
            dateFormatter.dateStyle = patternDefinition.date === common.FULL ? NSDateFormatterStyle.NSDateFormatterFullStyle : NSDateFormatterStyle.NSDateFormatterShortStyle;
        }
        if (patternDefinition.time) {
            dateFormatter.timeStyle = NSDateFormatterStyle.NSDateFormatterLongStyle;
        }
        return dateFormatter.dateFormat;
    };
    DateTimeFormat.prototype.formatNative = function (pattern, locale, date) {
        var dateFormatter = NSDateFormatter.new();
        if (locale) {
            dateFormatter.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        dateFormatter.dateFormat = pattern;
        return dateFormatter.stringFromDate(date ? NSDate.dateWithTimeIntervalSince1970(date.valueOf() / 1000) : NSDate.new());
    };
    return DateTimeFormat;
}(common.DateTimeFormat));
exports.DateTimeFormat = DateTimeFormat;
var NumberFormat = (function (_super) {
    __extends(NumberFormat, _super);
    function NumberFormat() {
        _super.apply(this, arguments);
    }
    NumberFormat.prototype.formatNative = function (value, locale, options, pattern) {
        var numberFormat = NSNumberFormatter.new();
        if (locale) {
            numberFormat.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        if (options) {
            switch (options.style.toLowerCase()) {
                case 'decimal':
                    numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterDecimalStyle;
                    break;
                case 'percent':
                    numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterPercentStyle;
                    break;
                case 'currency':
                    numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterCurrencyStyle;
                    if (options.currency !== void 0) {
                        numberFormat.currencyCode = options.currency;
                    }
                    break;
                default:
                    numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterDecimalStyle;
                    break;
            }
        }
        else {
            numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterDecimalStyle;
        }
        if (options && options.minimumIntegerDigits !== void 0) {
            numberFormat.minimumIntegerDigits = options.minimumIntegerDigits;
        }
        if (options && options.minimumFractionDigits !== void 0) {
            numberFormat.minimumFractionDigits = options.minimumFractionDigits;
        }
        if (options && options.maximumFractionDigits !== void 0) {
            numberFormat.maximumFractionDigits = options.maximumFractionDigits;
        }
        if (options && options.useGrouping !== void 0) {
            numberFormat.usesGroupingSeparator = options.useGrouping;
        }
        if (pattern) {
            numberFormat.positiveFormat = pattern;
        }
        else {
            if (options && (options.style.toLowerCase() === 'currency' && options.currencyDisplay === 'code')) {
                var pattern_1 = numberFormat.positiveFormat;
                pattern_1 = pattern_1.replace('¤', '¤¤');
                numberFormat.positiveFormat = pattern_1;
            }
        }
        return numberFormat.stringFromNumber(NSNumber.alloc().initWithDouble(value));
    };
    return NumberFormat;
}(common.NumberFormat));
exports.NumberFormat = NumberFormat;
