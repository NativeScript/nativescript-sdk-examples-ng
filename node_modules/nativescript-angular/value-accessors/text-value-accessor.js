var core_1 = require('@angular/core');
var control_value_accessor_1 = require('@angular/common/src/forms-deprecated/directives/control_value_accessor');
var lang_1 = require('@angular/core/src/facade/lang');
var base_value_accessor_1 = require('./base-value-accessor');
var TEXT_VALUE_ACCESSOR = core_1.provide(control_value_accessor_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return TextValueAccessor; }), multi: true });
/**
 * The accessor for writing a text and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TextField [(ngModel)]='model.test'>
 *  ```
 */
var TextValueAccessor = (function (_super) {
    __extends(TextValueAccessor, _super);
    function TextValueAccessor(elementRef) {
        _super.call(this, elementRef.nativeElement);
        this.onTouched = function () { };
    }
    TextValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = lang_1.isBlank(value) ? '' : value.toString();
        this.view.text = normalizedValue;
    };
    TextValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    TextValueAccessor = __decorate([
        core_1.Directive({
            selector: 'TextField[ngModel], TextView[ngModel], SearchBar[ngModel]',
            host: { '(textChange)': 'onChange($event.value)' },
            providers: [TEXT_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TextValueAccessor);
    return TextValueAccessor;
}(base_value_accessor_1.BaseValueAccessor));
exports.TextValueAccessor = TextValueAccessor;
//# sourceMappingURL=text-value-accessor.js.map