var core_1 = require('@angular/core');
var control_value_accessor_1 = require('@angular/common/src/forms-deprecated/directives/control_value_accessor');
var base_value_accessor_1 = require('./base-value-accessor');
var utils = require('../common/utils');
var SELECTED_INDEX_VALUE_ACCESSOR = core_1.provide(control_value_accessor_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return SelectedIndexValueAccessor; }), multi: true });
/**
 * The accessor for setting a selectedIndex and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <SegmentedBar [(ngModel)]='model.test'>
 *  ```
 */
var SelectedIndexValueAccessor = (function (_super) {
    __extends(SelectedIndexValueAccessor, _super);
    function SelectedIndexValueAccessor(elementRef) {
        _super.call(this, elementRef.nativeElement);
        this.onTouched = function () { };
    }
    SelectedIndexValueAccessor.prototype.writeValue = function (value) {
        this._normalizedValue = utils.convertToInt(value);
        if (this.viewInitialized) {
            this.view.selectedIndex = this._normalizedValue;
        }
    };
    SelectedIndexValueAccessor.prototype.ngAfterViewInit = function () {
        this.viewInitialized = true;
        this.view.selectedIndex = this._normalizedValue;
    };
    SelectedIndexValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectedIndexValueAccessor = __decorate([
        core_1.Directive({
            selector: 'SegmentedBar[ngModel], ListPicker[ngModel], TabView[ngModel]',
            host: { '(selectedIndexChange)': 'onChange($event.value)' },
            providers: [SELECTED_INDEX_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SelectedIndexValueAccessor);
    return SelectedIndexValueAccessor;
}(base_value_accessor_1.BaseValueAccessor));
exports.SelectedIndexValueAccessor = SelectedIndexValueAccessor;
//# sourceMappingURL=selectedIndex-value-accessor.js.map