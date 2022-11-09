import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { SpinnerService } from '../../shared/services/spinner.service';
import { NotebookService } from '../services/notebook.service';
import { IModuleState } from '../state/module.state';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import * as NotebookActions from '../actions/notebook.actions';
import { SnackBarService } from '../../shared/services/snack.service';

@Injectable()
export class NotebookEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<IModuleState>,
    private _notebookService: NotebookService,
    private _spinnerService: SpinnerService,
    private _snackService: SnackBarService
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

  editNote$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(NotebookActions.EditNoteAction),
      switchMap((payload) =>
        this._notebookService.addNote(payload).pipe(
          map((data) => NotebookActions.EditNoteActionSuccess({ note: data })),
          catchError((error) => of(NotebookActions.EditNoteActionError(error)))
        )
      )
    )
  );

  enableSpinner$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          NotebookActions.AddNoteAction,
          NotebookActions.GetNotesAction,
          NotebookActions.EditNoteAction
        ),
        tap(() => this._spinnerService.spinnerAttach())
      ),
    { dispatch: false }
  );
  disableSpinner$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          NotebookActions.EditNoteActionError,
          NotebookActions.EditNoteActionSuccess,
          NotebookActions.GetNotesActionSuccess,
          NotebookActions.GetNotesActionError,
          NotebookActions.AddNoteActionSuccess,
          NotebookActions.AddNoteActionError
        ),
        tap(() => this._spinnerService.spinnerDetach()),
        tap((action) => this._snackService.openSnackBar(action.type, 'Ok'))
      ),
    { dispatch: false }
  );
}
