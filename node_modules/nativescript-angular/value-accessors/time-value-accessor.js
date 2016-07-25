var core_1 = require('@angular/core');
var control_value_accessor_1 = require('@angular/common/src/forms-deprecated/directives/control_value_accessor');
var lang_1 = require('@angular/core/src/facade/lang');
var base_value_accessor_1 = require('./base-value-accessor');
var TIME_VALUE_ACCESSOR = core_1.provide(control_value_accessor_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return TimeValueAccessor; }), multi: true });
/**
 * The accessor for setting a time and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TimePicker [(ngModel)]='model.test'>
 *  ```
 */
var TimeValueAccessor = (function (_super) {
    __extends(TimeValueAccessor, _super);
    function TimeValueAccessor(elementRef) {
        _super.call(this, elementRef.nativeElement);
        this.onTouched = function () { };
    }
    TimeValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = lang_1.isBlank(value) ? new Date() : value;
        if (!lang_1.isDate(normalizedValue)) {
            if (typeof normalizedValue === 'string') {
                normalizedValue = new Date(normalizedValue);
            }
            else if (typeof normalizedValue === 'number') {
                normalizedValue = new Date(normalizedValue);
            }
            if (!lang_1.isDate(normalizedValue)) {
                normalizedValue = new Date();
            }
        }
        this.view.time = normalizedValue;
    };
    TimeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    TimeValueAccessor = __decorate([
        core_1.Directive({
            selector: 'TimePicker[ngModel]',
            host: { '(timeChange)': 'onChange($event.value)' },
            providers: [TIME_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TimeValueAccessor);
    return TimeValueAccessor;
}(base_value_accessor_1.BaseValueAccessor));
exports.TimeValueAccessor = TimeValueAccessor;
//# sourceMappingURL=time-value-accessor.js.map