import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IModuleState } from '../../state/module.state';
import { Store } from '@ngrx/store';
import { AddNoteAction } from '../../actions/notebook.actions';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNoteDialogComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _store: Store<IModuleState>,
    private _dialogRef: MatDialogRef<AddNoteDialogComponent>
  ) {
    this.formGroup = _fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this._store.dispatch(AddNoteAction(this.formGroup.getRawValue()));
    this._dialogRef.close();
  }
}
