import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { IModuleState } from '../../auth/state/module.state';
import { SpinnerService } from '../../shared/services/spinner.service';
import { UsersService } from '../services/users.service';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import * as UsersActions from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<IModuleState>,
    private _spinnerService: SpinnerService,
    private _usersService: UsersService
  ) {}

  getTableData$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(UsersActions.GetUsersDataAction),

      switchMap(() =>
        this._usersService.getTableData().pipe(
          map((data) =>
            UsersActions.GetUsersDataActionSuccess({ payload: data })
          ),
          catchError((error) => of(UsersActions.GetUsersDataActionError(error)))
        )
      )
    )
  );

  enableSpinner$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(UsersActions.GetUsersDataAction),
        tap(() => this._spinnerService.spinnerAttach())
      ),
    { dispatch: false }
  );

  disableSpinner$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          UsersActions.GetUsersDataActionSuccess,
          UsersActions.GetUsersDataActionError
        ),
        tap(() => this._spinnerService.spinnerDetach())
      ),
    { dispatch: false }
  );
}
