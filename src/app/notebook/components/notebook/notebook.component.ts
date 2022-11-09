import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IModuleState } from '../../state/module.state';
import { INote } from '../../models/notebook.interface';
import { selectNotes } from '../../selectors/notebook.selectors';
import { first, Observable, shareReplay } from 'rxjs';
import * as NotebookActions from '../../actions/notebook.actions';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from '../add-note-dialog/add-note-dialog.component';
import { EditNoteDialogComponent } from '../edit-note-dialog/edit-note-dialog.component';
@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotebookComponent implements OnInit {
  notes$: Observable<INote[]>;
  constructor(private _store: Store<IModuleState>, private _dialog: MatDialog) {
    this._store.dispatch(NotebookActions.GetNotesAction());
    this.notes$ = _store.select(selectNotes);
  }
  openAddDialog(): void {
    this._dialog.open(AddNoteDialogComponent);
  }

  ngOnInit(): void {}

  openEdit(note: INote) {
    const dialogRef = this._dialog.open(EditNoteDialogComponent, {
      data: note,
    });
    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((e) => {
        if (e && e.is_published) {
          this._store.dispatch(NotebookActions.EditNoteAction(e));
        }
        if (e && !e.is_published) {
          this._store.dispatch(NotebookActions.DeleteNoteAction(e));
        }
      });
  }
}
