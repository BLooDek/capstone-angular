import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { IModuleState } from '../../state/module.state';
import { Store } from '@ngrx/store';
import { AddNoteAction } from '../../actions/notebook.actions';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddNoteDialogComponent,
      multi: true,
    },
  ],
})
export class AddNoteDialogComponent implements ControlValueAccessor {
  formGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _store: Store<IModuleState>,
    private _dialogRef: MatDialogRef<AddNoteDialogComponent>
  ) {
    this.formGroup = _fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      created_at: [new Date()],
    });
  }

  get title() {
    return this.formGroup.get('title');
  }
  get body() {
    return this.formGroup.get('body');
  }

  onSubmit() {
    this._store.dispatch(AddNoteAction(this.formGroup.getRawValue()));
    this._dialogRef.close();
  }

  registerOnChange(fn: (value: any) => void) {
    this.formGroup.valueChanges
      .pipe(tap((val) => console.log(val)))
      .subscribe(fn);
  }

  registerOnTouched(fn: any): void {}

  writeValue(value: any) {
    if (value) {
      console.log(value);
      this.formGroup.setValue(value);
    }
  }
}
