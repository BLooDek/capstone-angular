import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IModuleState } from '../state/module.state';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from '../../shared/services/spinner.service';

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store<IModuleState>,
    private _authService: AuthService,
    private _spinnerService: SpinnerService
  ) {}

  registerUser$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.RegisterUserAction),

      switchMap((payload) =>
        this._authService.registerUser(payload).pipe(
          map((data) => AuthActions.RegisterUserActionSuccess(data)),
          catchError((error) => of(AuthActions.RegisterUserActionError(error)))
        )
      )
    )
  );

  loginUser$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.LoginUserAction),

      switchMap((payload) =>
        this._authService.loginUser(payload).pipe(
          map((data) => AuthActions.LoginUserActionSuccess(data)),
          catchError((error) => of(AuthActions.LoginUserActionError(error)))
        )
      )
    )
  );

  getUserData$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(
        AuthActions.GetUserDataAction,
        AuthActions.LoginUserActionSuccess,
        AuthActions.RegisterUserActionSuccess
      ),
      switchMap(() =>
        this._authService.getUserData().pipe(
          map((data) => {
            return AuthActions.GetUserDataActionSuccess(data);
          }),
          catchError((error) => of(AuthActions.GetUserDataActionError(error)))
        )
      )
    )
  );

  logoutUser$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.LogoutUserAction),
      switchMap(() =>
        this._authService.logoutUser().pipe(
          map((_) => AuthActions.LogoutUserActionSuccess()),
          catchError((error) => of(AuthActions.LogoutUserActionError(error)))
        )
      )
    )
  );

  enableSpinner$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          AuthActions.LoginUserAction,
          AuthActions.GetUserDataAction,
          AuthActions.LogoutUserAction,
          AuthActions.RegisterUserAction
        ),
        tap(() => this._spinnerService.spinnerAttach())
      ),
    { dispatch: false }
  );
  disableSpinner$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          AuthActions.LoginUserActionSuccess,
          AuthActions.LoginUserActionError,
          AuthActions.GetUserDataActionSuccess,
          AuthActions.GetUserDataActionError,
          AuthActions.LogoutUserActionSuccess,
          AuthActions.LogoutUserActionError,
          AuthActions.RegisterUserActionSuccess,
          AuthActions.RegisterUserActionError
        ),
        tap(() => this._spinnerService.spinnerDetach())
      ),
    { dispatch: false }
  );
}
