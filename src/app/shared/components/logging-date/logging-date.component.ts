import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-logging-date',
  templateUrl: './logging-date.component.html',
  styleUrls: ['./logging-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoggingDateComponent),
      multi: true,
    },
  ],
})
export class LoggingDateComponent implements ControlValueAccessor {
  @Input()
  _dateValue;

  @Input() title: string;

  get dateValue() {
    return this._dateValue;
  }

  set dateValue(val) {
    this._dateValue = val;
    this.propagateChange(this._dateValue);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.dateValue = event.value;
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.dateValue = value;
    }
  }
  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
