var lang_1 = require('@angular/core/src/facade/lang');
function convertToInt(value) {
    var normalizedValue;
    if (lang_1.isBlank(value)) {
        normalizedValue = 0;
    }
    else {
        if (lang_1.isNumber(value)) {
            normalizedValue = value;
        }
        else {
            var parsedValue = parseInt(value.toString());
            normalizedValue = isNaN(parsedValue) ? 0 : parsedValue;
        }
    }
    return Math.round(normalizedValue);
}
exports.convertToInt = convertToInt;
//# sourceMappingURL=utils.js.map