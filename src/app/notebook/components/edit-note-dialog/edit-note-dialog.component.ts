import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { first } from 'rxjs';
import { INote } from '../../models/notebook.interface';
import { ConfirmDeleteNoteComponent } from '../confirm-delete-note/confirm-delete-note.component';

@Component({
  selector: 'app-edit-note-dialog',
  templateUrl: './edit-note-dialog.component.html',
  styleUrls: ['./edit-note-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditNoteDialogComponent {
  formGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<EditNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: INote,
    private _dialog: MatDialog
  ) {
    this.formGroup = _fb.group({
      id: [this.data.id],
      title: [this.data.title, [Validators.required]],
      body: [this.data.body, [Validators.required]],
      is_published: [this.data.is_published],
    });
  }
  onSubmit() {
    this._dialogRef.close(this.formGroup.getRawValue());
  }
  onDelete() {
    const confirmDialogRef = this._dialog.open(ConfirmDeleteNoteComponent, {
      data: this.data.title,
    });
    confirmDialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((e) => {
        if (e) {
          this._dialogRef.close({
            ...this.formGroup.getRawValue(),
            is_published: false,
          });
        }
      });
  }
}
