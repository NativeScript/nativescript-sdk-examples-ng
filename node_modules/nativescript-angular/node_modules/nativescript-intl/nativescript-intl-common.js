"use strict";
exports.NUMERIC = 'numeric';
exports.LONG = 'long';
exports.SHORT = 'short';
exports.TWODIGIT = '2-digit';
exports.FULL = 'full';
var DateTimeFormat = (function () {
    function DateTimeFormat(locale, options, pattern) {
        this.locale = locale;
        this.options = options;
        this.pattern = pattern;
        this.dateTimeFormatElements = {
            'M': 'month',
            'E': 'weekday',
            'c': 'weekday',
            'd': 'day',
            'y': 'year',
            'h': 'hour',
            'H': 'hour',
            'm': 'minute',
            's': 'second',
            'z': 'timeZoneName',
            'G': 'era',
            'a': 'hour12'
        };
        if (options && options.minute === exports.NUMERIC) {
            this.options.minute = exports.TWODIGIT;
        }
        if (options && options.hour === exports.NUMERIC) {
            this.options.hour = exports.TWODIGIT;
        }
    }
    DateTimeFormat.prototype.hasTimeOptions = function (options) {
        return options.hour !== undefined || options.minute !== undefined || options.second !== undefined;
    };
    DateTimeFormat.prototype.hasDateOptions = function (options) {
        return options.weekday !== undefined || options.year !== undefined || options.month !== undefined || options.day !== undefined;
    };
    DateTimeFormat.prototype.useFullDatePattern = function (intlOptions) {
        var i;
        var propsArray = Object.keys(intlOptions);
        var propsArrayLength = propsArray.length;
        var result = false;
        for (i = 0; i < propsArrayLength; i++) {
            if (intlOptions[propsArray[i]] === exports.LONG || intlOptions[propsArray[i]] === exports.SHORT) {
                result = true;
                break;
            }
        }
        return result;
    };
    DateTimeFormat.prototype.getNativePattern = function (patternDefinition, locale) {
        return '';
    };
    DateTimeFormat.prototype.getCorrectPatternForLocale = function () {
        var dateTimePatternOptions = {};
        if (this.hasDateOptions(this.options)) {
            if (this.useFullDatePattern(this.options)) {
                dateTimePatternOptions.date = exports.FULL;
            }
            else {
                dateTimePatternOptions.date = exports.SHORT;
            }
        }
        if (this.hasTimeOptions(this.options)) {
            dateTimePatternOptions.time = exports.FULL;
        }
        var result = this.getNativePattern(dateTimePatternOptions, this.locale);
        if (this.options.hour) {
            if (result.indexOf('H') > -1) {
                this.options.hour12 = false;
            }
            else {
                this.options.hour12 = true;
            }
        }
        return result;
    };
    DateTimeFormat.prototype.getDateElementsFromPattern = function (pattern) {
        var result = [];
        var patternLength = pattern.length;
        var i = 0;
        var stringInsidePattern = false;
        while (i < patternLength) {
            if (pattern[i] === '"' || pattern[i] === "'") {
                var p = i + 1;
                while (p < patternLength && pattern[i] !== pattern[p]) {
                    p++;
                }
                for (var j = i; j < p + 1; j++) {
                    result.push({
                        "isDateElement": false,
                        "patternValue": pattern[j]
                    });
                }
                i = p + 1;
                continue;
            }
            if (this.dateTimeFormatElements.hasOwnProperty(pattern[i])) {
                var j = i;
                while (i < patternLength && pattern[i] === pattern[j]) {
                    i++;
                }
                result.push({
                    "isDateElement": true,
                    "patternValue": pattern.substr(j, i - j),
                    "intlOption": this.dateTimeFormatElements[pattern[j]]
                });
            }
            else {
                result.push({
                    "isDateElement": false,
                    "patternValue": pattern[i]
                });
                i++;
            }
        }
        return result;
    };
    DateTimeFormat.prototype.prepareDateElement = function (intlOption, dateElement) {
        switch (intlOption) {
            case exports.NUMERIC:
                return dateElement;
            case exports.TWODIGIT:
                return dateElement.repeat(2);
            case exports.SHORT:
                return dateElement.repeat(3);
            case exports.LONG:
                return dateElement.repeat(4);
            case true:
                return dateElement;
            case false:
                return '';
            default:
                return dateElement;
        }
    };
    DateTimeFormat.prototype.preparePattern = function (pattern, options) {
        var patternOptions = this.getDateElementsFromPattern(pattern);
        var patternOptionsLength = patternOptions.length;
        for (var i_1 = 0; i_1 < patternOptionsLength; i_1++) {
            if (patternOptions[i_1].isDateElement) {
                var formatChar = patternOptions[i_1].patternValue[0];
                var intlOptionValue = options[patternOptions[i_1].intlOption];
                if (intlOptionValue !== undefined) {
                    var newPatternValue = this.prepareDateElement(intlOptionValue, formatChar);
                    patternOptions[i_1].patternValue = newPatternValue;
                }
                else {
                    if (i_1 > 0) {
                        var j = i_1 - 1;
                        while (patternOptions[j] && patternOptions[j].isDateElement === false) {
                            if (patternOptions[j].patternValue !== ' ') {
                                if (patternOptions[j].patternValue !== '"' && patternOptions[j].patternValue !== "'") {
                                    patternOptions[j].patternValue = '';
                                }
                                break;
                            }
                            else {
                                patternOptions[j].patternValue = '';
                            }
                            j--;
                        }
                    }
                    patternOptions[i_1].patternValue = '';
                }
            }
        }
        var result = [];
        var i = 0;
        while (patternOptions[i].patternValue === '' || patternOptions[i].isDateElement === false) {
            i++;
        }
        for (i; i < patternOptionsLength; i++) {
            result.push(patternOptions[i].patternValue);
        }
        return result.join('');
    };
    DateTimeFormat.prototype.formatNative = function (pattern, locale, date) {
        return '';
    };
    Object.defineProperty(DateTimeFormat.prototype, "preparedPattern", {
        get: function () {
            if (!this._preparedPattern) {
                if (this.pattern) {
                    this._preparedPattern = this.pattern;
                }
                else {
                    this._preparedPattern = this.preparePattern(this.getCorrectPatternForLocale(), this.options);
                }
            }
            return this._preparedPattern;
        },
        enumerable: true,
        configurable: true
    });
    DateTimeFormat.prototype.format = function (date) {
        return this.formatNative(this.preparedPattern, this.locale, date);
    };
    return DateTimeFormat;
}());
exports.DateTimeFormat = DateTimeFormat;
var NumberFormat = (function () {
    function NumberFormat(locale, options, pattern) {
        this.locale = locale;
        this.options = options;
        this.pattern = pattern;
    }
    NumberFormat.prototype.formatNative = function (value, locale, options, pattern) {
        return '';
    };
    NumberFormat.prototype.format = function (value) {
        return this.formatNative(value, this.locale, this.options, this.pattern);
    };
    return NumberFormat;
}());
exports.NumberFormat = NumberFormat;
