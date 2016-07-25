var core_1 = require('@angular/core');
var control_value_accessor_1 = require('@angular/common/src/forms-deprecated/directives/control_value_accessor');
var lang_1 = require('@angular/core/src/facade/lang');
var base_value_accessor_1 = require('./base-value-accessor');
var CHECKED_VALUE_ACCESSOR = core_1.provide(control_value_accessor_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return CheckedValueAccessor; }), multi: true });
/**
 * The accessor for setting a checked property and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <Switch [(ngModel)]='model.test'>
 *  ```
 */
var CheckedValueAccessor = (function (_super) {
    __extends(CheckedValueAccessor, _super);
    function CheckedValueAccessor(elementRef) {
        _super.call(this, elementRef.nativeElement);
        this.onTouched = function () { };
    }
    CheckedValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = false;
        if (!lang_1.isBlank(value)) {
            if (typeof value === 'string') {
                normalizedValue = value.toLowerCase() === 'true' ? true : false;
            }
            else {
                normalizedValue = !!value;
            }
        }
        this.view.checked = normalizedValue;
    };
    CheckedValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    CheckedValueAccessor = __decorate([
        core_1.Directive({
            selector: 'Switch[ngModel]',
            host: { '(checkedChange)': 'onChange($event.value)' },
            providers: [CHECKED_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CheckedValueAccessor);
    return CheckedValueAccessor;
}(base_value_accessor_1.BaseValueAccessor));
exports.CheckedValueAccessor = CheckedValueAccessor;
//# sourceMappingURL=checked-value-accessor.js.map