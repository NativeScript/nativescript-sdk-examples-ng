var core_1 = require('@angular/core');
var control_value_accessor_1 = require('@angular/common/src/forms-deprecated/directives/control_value_accessor');
var lang_1 = require('@angular/core/src/facade/lang');
var base_value_accessor_1 = require('./base-value-accessor');
var NUMBER_VALUE_ACCESSOR = core_1.provide(control_value_accessor_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return NumberValueAccessor; }), multi: true });
/**
 * The accessor for setting a value and listening to changes that is used by the
 * {@link NgModel}
 *
 *  ### Example
 *  ```
 *  <Slider [(ngModel)]='model.test'>
 *  ```
 */
var NumberValueAccessor = (function (_super) {
    __extends(NumberValueAccessor, _super);
    function NumberValueAccessor(elementRef) {
        _super.call(this, elementRef.nativeElement);
        this.onTouched = function () { };
    }
    NumberValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue;
        if (lang_1.isBlank(value)) {
            normalizedValue = 0;
        }
        else {
            if (lang_1.isNumber(value)) {
                normalizedValue = value;
            }
            else {
                var parsedValue = Number(value);
                normalizedValue = isNaN(parsedValue) ? 0 : parsedValue;
            }
        }
        this.view.value = normalizedValue;
    };
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NumberValueAccessor = __decorate([
        core_1.Directive({
            selector: 'Slider[ngModel]',
            host: { '(valueChange)': 'onChange($event.value)' },
            providers: [NUMBER_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], NumberValueAccessor);
    return NumberValueAccessor;
}(base_value_accessor_1.BaseValueAccessor));
exports.NumberValueAccessor = NumberValueAccessor;
//# sourceMappingURL=number-value-accessor.js.map