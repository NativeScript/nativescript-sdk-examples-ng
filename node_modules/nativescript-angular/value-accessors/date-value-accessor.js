var core_1 = require('@angular/core');
var control_value_accessor_1 = require('@angular/common/src/forms-deprecated/directives/control_value_accessor');
var lang_1 = require('@angular/core/src/facade/lang');
var base_value_accessor_1 = require('./base-value-accessor');
var DATE_VALUE_ACCESSOR = core_1.provide(control_value_accessor_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return DateValueAccessor; }), multi: true });
/**
 * The accessor for setting a date and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <DatePicker [(ngModel)]='model.test'>
 *  ```
 */
var DateValueAccessor = (function (_super) {
    __extends(DateValueAccessor, _super);
    function DateValueAccessor(elementRef) {
        _super.call(this, elementRef.nativeElement);
        this.onTouched = function () { };
    }
    DateValueAccessor.prototype.writeValue = function (value) {
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
        this.view.date = normalizedValue;
    };
    DateValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateValueAccessor = __decorate([
        core_1.Directive({
            selector: 'DatePicker[ngModel]',
            host: { '(dateChange)': 'onChange($event.value)' },
            providers: [DATE_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DateValueAccessor);
    return DateValueAccessor;
}(base_value_accessor_1.BaseValueAccessor));
exports.DateValueAccessor = DateValueAccessor;
//# sourceMappingURL=date-value-accessor.js.map