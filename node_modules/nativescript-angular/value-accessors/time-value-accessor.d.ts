import { ElementRef } from '@angular/core';
import { BaseValueAccessor } from './base-value-accessor';
import { TimePicker } from "ui/time-picker";
/**
 * The accessor for setting a time and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TimePicker [(ngModel)]='model.test'>
 *  ```
 */
export declare class TimeValueAccessor extends BaseValueAccessor<TimePicker> {
    onTouched: () => void;
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
    registerOnTouched(fn: () => void): void;
}
