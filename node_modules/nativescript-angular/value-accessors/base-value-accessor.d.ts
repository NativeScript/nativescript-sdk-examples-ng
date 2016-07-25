import { ControlValueAccessor } from '@angular/common/src/forms-deprecated/directives/control_value_accessor';
export declare class BaseValueAccessor<TView> implements ControlValueAccessor {
    view: TView;
    constructor(view: TView);
    onChange: (_: any) => void;
    private pendingChangeNotification;
    registerOnChange(fn: (_: any) => void): void;
    writeValue(value: any): void;
    registerOnTouched(fn: () => void): void;
}
