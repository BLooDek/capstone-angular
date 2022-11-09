import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IModuleState } from '../../state/module.state';
import { INote } from '../../models/notebook.interface';
import { selectNotes } from '../../selectors/notebook.selectors';
import { Observable, shareReplay } from 'rxjs';
import * as NotebookActions from '../../actions/notebook.actions';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from '../add-note-dialog/add-note-dialog.component';
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
    this.notes$ = _store.select(selectNotes).pipe(shareReplay(1));
  }
  openAddDialog(): void {
    this._dialog.open(AddNoteDialogComponent);
  }

  ngOnInit(): void {}

  openEdit(note: INote) {
    console.log(note);
  }
}
