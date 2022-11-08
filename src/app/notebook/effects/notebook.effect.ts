import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { SpinnerService } from '../../shared/services/spinner.service';
import { NotebookService } from '../services/notebook.service';
import { IModuleState } from '../state/module.state';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import * as NotebookActions from '../actions/notebook.actions';

@Injectable()
export class NotebookEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<IModuleState>,
    private _notebookService: NotebookService,
    private _spinnerService: SpinnerService
  ) {}

  getNotes$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(NotebookActions.GetNotesAction),
      switchMap(() =>
        this._notebookService.getNotes().pipe(
          map((data) => NotebookActions.GetNotesActionSuccess({ notes: data })),
          catchError((error) => of(NotebookActions.GetNotesActionError(error)))
        )
      )
    )
  );

  addNote$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(NotebookActions.AddNoteAction),
      switchMap((payload) =>
        this._notebookService.addNote(payload).pipe(
          map((data) => NotebookActions.AddNoteActionSuccess({ note: data })),
          catchError((error) => of(NotebookActions.AddNoteActionError(error)))
        )
      )
    )
  );

  enableSpinner$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(NotebookActions.AddNoteAction, NotebookActions.GetNotesAction),
        tap(() => this._spinnerService.spinnerAttach())
      ),
    { dispatch: false }
  );
  disableSpinner$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          NotebookActions.GetNotesActionSuccess,
          NotebookActions.GetNotesActionError,
          NotebookActions.AddNoteActionSuccess,
          NotebookActions.AddNoteActionError
        ),
        tap(() => this._spinnerService.spinnerDetach())
      ),
    { dispatch: false }
  );
}
